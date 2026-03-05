const SALES_END_AT = Date.parse("2026-03-23T00:00:00+03:00");

const STAGES = [
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

function formatMsk(ts) {
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

export function formatPrice(amount) {
  return `${Number(amount).toLocaleString("ru-RU")} ₽`;
}

export function getPricingSnapshot(now = new Date()) {
  const nowTs = now.getTime();
  const salesOpen = nowTs < SALES_END_AT;

  let idx = 0;
  for (let i = 0; i < STAGES.length; i += 1) {
    if (nowTs >= STAGES[i].startsAt) idx = i;
  }

  if (!salesOpen) idx = STAGES.length - 1;

  const current = STAGES[idx];
  let nextSwitchTs = null;

  if (salesOpen) {
    nextSwitchTs = idx < STAGES.length - 1 ? STAGES[idx + 1].startsAt : SALES_END_AT;
  }

  return {
    sales_open: salesOpen,
    current_price: current.price,
    current_price_formatted: formatPrice(current.price),
    price_stage: current.stage,
    price_stage_title: current.title,
    next_switch_ts: nextSwitchTs,
    next_switch_at_msk: nextSwitchTs ? formatMsk(nextSwitchTs) : null,
    ladder: STAGES.map((s) => ({
      stage: s.stage,
      title: s.title,
      price: s.price,
      price_formatted: formatPrice(s.price),
      starts_at_ts: s.startsAt,
      starts_at_msk: formatMsk(s.startsAt),
    })),
  };
}

export function formatCountdown(ms) {
  if (ms <= 0) return "00:00:00";
  const sec = Math.floor(ms / 1000);
  const h = Math.floor(sec / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((sec % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${h}:${m}:${s}`;
}
