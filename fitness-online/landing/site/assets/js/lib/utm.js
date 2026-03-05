import { getJson, setJson } from "./storage.js";

const KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_geo",
  "utm_angle",
  "ad_id",
];

const FIRST_KEY = "firstTouch";
const LAST_KEY = "lastTouch";

function nowIso() {
  return new Date().toISOString();
}

function sanitize(input) {
  const cleaned = {};
  for (const key of KEYS) {
    const value = input[key];
    if (typeof value === "string" && value.trim()) {
      cleaned[key] = value.trim();
    }
  }
  return cleaned;
}

function writeCookie(name, value, days = 30) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function captureAttributionFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const incoming = {};
  for (const key of KEYS) {
    if (params.has(key)) incoming[key] = params.get(key);
  }

  const cleanIncoming = sanitize(incoming);
  if (Object.keys(cleanIncoming).length === 0) return;

  const first = getJson(FIRST_KEY, null);
  if (!first) {
    const firstPayload = { ...cleanIncoming, captured_at: nowIso() };
    setJson(FIRST_KEY, firstPayload);
    writeCookie("landing_first_touch", JSON.stringify(firstPayload));
  }

  const lastPayload = { ...cleanIncoming, captured_at: nowIso() };
  setJson(LAST_KEY, lastPayload);
  writeCookie("landing_last_touch", JSON.stringify(lastPayload));
}

export function getFirstTouch() {
  return getJson(FIRST_KEY, {});
}

export function getLastTouch() {
  return getJson(LAST_KEY, {});
}

export function getAttributionPayload() {
  const first = getFirstTouch();
  const last = getLastTouch();
  const payload = {};

  for (const key of KEYS) {
    payload[key] = last[key] || "";
    payload[`first_touch_${key}`] = first[key] || "";
    payload[`last_touch_${key}`] = last[key] || "";
  }

  return payload;
}
