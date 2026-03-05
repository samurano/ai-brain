const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
};

const SALES_END_AT = Date.parse("2026-03-23T00:00:00+03:00");
const PRICE_STAGES = [
  {
    stage: "wave_1",
    title: "10-12 марта 2026",
    startsAt: Date.parse("2026-03-10T00:00:00+03:00"),
    price: 1990,
  },
  {
    stage: "wave_2",
    title: "13-15 марта 2026",
    startsAt: Date.parse("2026-03-13T00:00:00+03:00"),
    price: 2490,
  },
  {
    stage: "wave_3",
    title: "16-18 марта 2026",
    startsAt: Date.parse("2026-03-16T00:00:00+03:00"),
    price: 2990,
  },
  {
    stage: "wave_4",
    title: "19-22 марта 2026",
    startsAt: Date.parse("2026-03-19T00:00:00+03:00"),
    price: 3490,
  },
];

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...CORS_HEADERS,
    },
  });
}

function mskFormat(ts) {
  return new Intl.DateTimeFormat("ru-RU", {
    timeZone: "Europe/Moscow",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(ts));
}

function getPricingSnapshot(now = new Date()) {
  const nowTs = now.getTime();
  const salesOpen = nowTs < SALES_END_AT;

  let idx = 0;
  for (let i = 0; i < PRICE_STAGES.length; i += 1) {
    if (nowTs >= PRICE_STAGES[i].startsAt) idx = i;
  }

  if (!salesOpen) idx = PRICE_STAGES.length - 1;

  const current = PRICE_STAGES[idx];
  const nextSwitchTs = salesOpen
    ? idx < PRICE_STAGES.length - 1
      ? PRICE_STAGES[idx + 1].startsAt
      : SALES_END_AT
    : null;

  return {
    sales_open: salesOpen,
    current_price: current.price,
    price_stage: current.stage,
    price_stage_title: current.title,
    next_switch_ts: nextSwitchTs,
    next_switch_at_msk: nextSwitchTs ? mskFormat(nextSwitchTs) : null,
    ladder: PRICE_STAGES.map((s) => ({
      stage: s.stage,
      title: s.title,
      price: s.price,
      starts_at_ts: s.startsAt,
      starts_at_msk: mskFormat(s.startsAt),
    })),
  };
}

function assertLead(payload) {
  if (!payload || typeof payload !== "object") {
    throw new Error("invalid_payload");
  }
  if (!payload.name || String(payload.name).trim().length < 2) {
    throw new Error("invalid_name");
  }
  if (!payload.consent_privacy) {
    throw new Error("consent_required");
  }
}

function assertPayment(payload) {
  if (!payload || typeof payload !== "object") {
    throw new Error("invalid_payload");
  }
  if (!payload.lead_id) {
    throw new Error("lead_id_required");
  }
  if (!payload.name || String(payload.name).trim().length < 2) {
    throw new Error("payer_name_required");
  }
}

function ensureId(id, prefix) {
  if (id && typeof id === "string") return id;
  return `${prefix}_${crypto.randomUUID()}`;
}

function base64UrlEncode(input) {
  const bytes = input instanceof Uint8Array ? input : new TextEncoder().encode(String(input));
  let str = "";
  for (let i = 0; i < bytes.length; i += 1) str += String.fromCharCode(bytes[i]);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function pemToArrayBuffer(pem) {
  const clean = pem.replace(/-----BEGIN PRIVATE KEY-----/g, "").replace(/-----END PRIVATE KEY-----/g, "").replace(/\n/g, "");
  const binary = atob(clean);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

async function getGoogleAccessToken(env) {
  if (!env.GOOGLE_SERVICE_ACCOUNT) return "";

  const account = JSON.parse(env.GOOGLE_SERVICE_ACCOUNT);
  const now = Math.floor(Date.now() / 1000);

  const header = base64UrlEncode(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64UrlEncode(
    JSON.stringify({
      iss: account.client_email,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: account.token_uri || "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  );

  const toSign = `${header}.${payload}`;
  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToArrayBuffer(account.private_key),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(toSign));
  const jwt = `${toSign}.${base64UrlEncode(new Uint8Array(signature))}`;

  const tokenResponse = await fetch(account.token_uri || "https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }).toString(),
  });

  const tokenData = await tokenResponse.json();
  if (!tokenResponse.ok || !tokenData.access_token) {
    throw new Error(`google_token_error: ${JSON.stringify(tokenData)}`);
  }

  return tokenData.access_token;
}

async function appendSheetRow(env, sheetName, rowValues) {
  if (!env.SHEET_ID || !env.GOOGLE_SERVICE_ACCOUNT) return;

  const accessToken = await getGoogleAccessToken(env);
  const encodedRange = encodeURIComponent(`${sheetName}!A:Z`);

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${env.SHEET_ID}/values/${encodedRange}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [rowValues] }),
    },
  );

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`sheets_append_error: ${err}`);
  }
}

async function notifyTelegram(env, text) {
  if (!env.TG_BOT_TOKEN || !env.TG_CHAT_ID) return;

  await fetch(`https://api.telegram.org/bot${env.TG_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: env.TG_CHAT_ID,
      text,
      disable_web_page_preview: true,
    }),
  });
}

async function createYooKassaPayment(env, payload, pricing) {
  if (!env.YOOKASSA_SHOP_ID || !env.YOOKASSA_SECRET) {
    const paymentId = `mock_${crypto.randomUUID()}`;
    return {
      payment_id: paymentId,
      confirmation_url: `${env.SITE_BASE_URL}/pay/success/?payment_id=${paymentId}&lead_id=${payload.lead_id}`,
      amount: pricing.current_price,
      price_stage: pricing.price_stage,
    };
  }

  const basic = btoa(`${env.YOOKASSA_SHOP_ID}:${env.YOOKASSA_SECRET}`);
  const returnUrl = `${env.SITE_BASE_URL}/pay/success/`;

  const body = {
    amount: {
      value: Number(pricing.current_price).toFixed(2),
      currency: "RUB",
    },
    capture: true,
    confirmation: {
      type: "redirect",
      return_url: returnUrl,
    },
    description: "Доступ к 10-дневной программе «Плоский живот»",
    metadata: {
      lead_id: payload.lead_id,
      price_stage: pricing.price_stage,
      utm_source: payload.utm_source || "",
      utm_campaign: payload.utm_campaign || "",
    },
    receipt: {
      customer: {
        full_name: payload.name,
        phone: payload.phone || undefined,
        email: payload.email || undefined,
      },
      items: [
        {
          description: "Доступ к программе «Плоский живот» (10 дней)",
          quantity: "1.00",
          amount: {
            value: Number(pricing.current_price).toFixed(2),
            currency: "RUB",
          },
          vat_code: 1,
          payment_mode: "full_payment",
          payment_subject: "service",
        },
      ],
    },
  };

  const response = await fetch("https://api.yookassa.ru/v3/payments", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/json",
      "Idempotence-Key": crypto.randomUUID(),
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`yookassa_create_error: ${JSON.stringify(data)}`);
  }

  return {
    payment_id: data.id,
    confirmation_url: data.confirmation?.confirmation_url,
    amount: Number(data.amount?.value || pricing.current_price),
    price_stage: pricing.price_stage,
  };
}

async function dedupeWebhook(env, paymentId) {
  if (!paymentId) return false;
  const key = `payment_success:${paymentId}`;

  if (env.PAYMENT_DEDUP_KV) {
    const existing = await env.PAYMENT_DEDUP_KV.get(key);
    if (existing) return true;
    await env.PAYMENT_DEDUP_KV.put(key, "1", { expirationTtl: 60 * 60 * 24 * 45 });
    return false;
  }

  // Fallback для режима без KV: дедуп только в рамках текущего worker isolate.
  if (!globalThis.__PAYMENT_DEDUPE__) {
    globalThis.__PAYMENT_DEDUPE__ = new Set();
  }
  if (globalThis.__PAYMENT_DEDUPE__.has(key)) return true;
  globalThis.__PAYMENT_DEDUPE__.add(key);
  return false;
}

function mapStatus(ykStatus) {
  if (ykStatus === "succeeded") return "succeeded";
  if (ykStatus === "canceled") return "canceled";
  return "pending";
}

async function handleLead(request, env) {
  const payload = await request.json();
  assertLead(payload);

  const leadId = ensureId(payload.lead_id, "lead");
  const ts = new Date().toISOString();

  const leadRow = [
    ts,
    leadId,
    payload.name || "",
    payload.phone || "",
    payload.consent_privacy ? "1" : "0",
    payload.landing_page || "",
    payload.utm_source || "",
    payload.utm_medium || "",
    payload.utm_campaign || "",
    payload.utm_content || "",
    payload.utm_term || "",
    payload.utm_geo || "",
    payload.utm_angle || "",
    payload.ad_id || "",
  ];

  const eventRow = [ts, "prechat_lead", leadId, "", JSON.stringify(payload)];

  await Promise.allSettled([
    appendSheetRow(env, "leads", leadRow),
    appendSheetRow(env, "event_log", eventRow),
    notifyTelegram(
      env,
      [
        "Новый лид предзаписи",
        `lead_id: ${leadId}`,
        `Имя: ${payload.name || "-"}`,
        `Телефон: ${payload.phone || "-"}`,
        `UTM: ${payload.utm_source || "-"} / ${payload.utm_campaign || "-"}`,
      ].join("\n"),
    ),
  ]);

  return json({
    ok: true,
    lead_id: leadId,
    redirect_url: `${env.SITE_BASE_URL}/prechat-instruction/`,
  });
}

async function handlePaymentCreate(request, env) {
  const payload = await request.json();
  assertPayment(payload);

  const pricing = getPricingSnapshot();
  if (!pricing.sales_open) {
    return json({ ok: false, error: "sales_closed" }, 409);
  }

  const payment = await createYooKassaPayment(env, payload, pricing);
  const ts = new Date().toISOString();

  const paymentRow = [
    ts,
    payment.payment_id,
    payload.lead_id,
    "pending",
    String(payment.amount),
    payment.price_stage,
    payload.utm_source || "",
    payload.utm_campaign || "",
  ];

  const eventRow = [ts, "payment_created", payload.lead_id, payment.payment_id, JSON.stringify(payload)];

  await Promise.allSettled([
    appendSheetRow(env, "payments", paymentRow),
    appendSheetRow(env, "event_log", eventRow),
  ]);

  return json({
    ok: true,
    payment_id: payment.payment_id,
    amount: payment.amount,
    price_stage: payment.price_stage,
    confirmation_url: payment.confirmation_url,
  });
}

async function handlePaymentWebhook(request, env) {
  const payload = await request.json();
  const paymentObject = payload.object || {};
  const paymentId = paymentObject.id || "";
  const status = mapStatus(paymentObject.status);
  const leadId = paymentObject.metadata?.lead_id || "";
  const amount = paymentObject.amount?.value || "";

  if (status === "succeeded") {
    const alreadyProcessed = await dedupeWebhook(env, paymentId);
    if (alreadyProcessed) {
      return json({ ok: true, duplicate: true });
    }
  }

  const ts = new Date().toISOString();
  const paymentRow = [
    ts,
    paymentId,
    leadId,
    status,
    String(amount),
    paymentObject.metadata?.price_stage || "",
    paymentObject.metadata?.utm_source || "",
    paymentObject.metadata?.utm_campaign || "",
  ];

  const eventRow = [ts, "payment_webhook", leadId, paymentId, JSON.stringify(payload)];

  await Promise.allSettled([
    appendSheetRow(env, "payments", paymentRow),
    appendSheetRow(env, "event_log", eventRow),
  ]);

  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    try {
      if (request.method === "GET" && url.pathname === "/api/pricing/current") {
        return json(getPricingSnapshot());
      }

      if (request.method === "POST" && url.pathname === "/api/prechat-lead") {
        return await handleLead(request, env);
      }

      if (request.method === "POST" && url.pathname === "/api/payment/create") {
        return await handlePaymentCreate(request, env);
      }

      if (request.method === "POST" && url.pathname === "/api/payment/webhook") {
        return await handlePaymentWebhook(request, env);
      }

      return json({ ok: false, error: "not_found" }, 404);
    } catch (error) {
      return json({ ok: false, error: error.message || "internal_error" }, 400);
    }
  },
};
