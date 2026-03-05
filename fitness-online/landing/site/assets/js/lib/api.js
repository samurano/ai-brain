import { getPricingSnapshot } from "./pricing.js";
import { getJson, setJson } from "./storage.js";

const MOCK_LEADS_KEY = "mockLeads";
const MOCK_PAYMENTS_KEY = "mockPayments";

function getConfig() {
  return window.LANDING_CONFIG || { apiMode: "mock", apiBaseUrl: "" };
}

function getApiMode() {
  const mode = getConfig().apiMode || "mock";
  return mode.toLowerCase() === "production" ? "production" : "mock";
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function postJson(path, body) {
  const { apiBaseUrl } = getConfig();
  const url = `${apiBaseUrl}${path}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.error || `API error ${response.status}`;
    throw new Error(message);
  }
  return data;
}

function appendMockLead(payload) {
  const leads = getJson(MOCK_LEADS_KEY, []);
  leads.push({ ...payload, created_at: new Date().toISOString() });
  setJson(MOCK_LEADS_KEY, leads);
}

function appendMockPayment(payload) {
  const payments = getJson(MOCK_PAYMENTS_KEY, []);
  payments.push({ ...payload, created_at: new Date().toISOString() });
  setJson(MOCK_PAYMENTS_KEY, payments);
}

async function mockPrechatLead(payload) {
  appendMockLead(payload);
  return {
    ok: true,
    lead_id: payload.lead_id,
    redirect_url: "prechat-instruction/",
  };
}

async function mockPaymentCreate(payload) {
  const config = getConfig();
  const pricing = getPricingSnapshot();
  const paymentId = `mock_pay_${Date.now()}`;

  appendMockPayment({
    payment_id: paymentId,
    status: "pending",
    amount: pricing.current_price,
    price_stage: pricing.price_stage,
    lead_id: payload.lead_id,
    payload,
  });

  await delay(config.yookassaMockDelayMs || 400);

  const target = new URL(`./success/?payment_id=${paymentId}&lead_id=${payload.lead_id}`, window.location.href);
  return {
    ok: true,
    payment_id: paymentId,
    amount: pricing.current_price,
    price_stage: pricing.price_stage,
    confirmation_url: target.toString(),
  };
}

async function mockPricingCurrent() {
  return getPricingSnapshot();
}

export async function createPrechatLead(payload) {
  if (getApiMode() === "mock") return mockPrechatLead(payload);
  return postJson("/api/prechat-lead", payload);
}

export async function createPayment(payload) {
  if (getApiMode() === "mock") return mockPaymentCreate(payload);
  return postJson("/api/payment/create", payload);
}

export async function getPricingCurrent() {
  if (getApiMode() === "mock") return mockPricingCurrent();
  const { apiBaseUrl } = getConfig();
  const response = await fetch(`${apiBaseUrl}/api/pricing/current`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "pricing_error");
  }
  return data;
}
