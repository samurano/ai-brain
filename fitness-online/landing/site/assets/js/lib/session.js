import { getText, setText } from "./storage.js";

const LEAD_ID_KEY = "leadId";
const LEAD_NAME_KEY = "leadName";
const LEAD_PHONE_KEY = "leadPhone";

function uid() {
  if (globalThis.crypto && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `lead_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export function ensureLeadId() {
  const existing = getText(LEAD_ID_KEY, "");
  if (existing) return existing;
  const created = uid();
  setText(LEAD_ID_KEY, created);
  return created;
}

export function getLeadId() {
  return getText(LEAD_ID_KEY, "");
}

export function setLeadName(name) {
  if (!name) return;
  setText(LEAD_NAME_KEY, name.trim());
}

export function getLeadName() {
  return getText(LEAD_NAME_KEY, "");
}

export function setLeadPhone(phone) {
  if (!phone) return;
  setText(LEAD_PHONE_KEY, phone.trim());
}

export function getLeadPhone() {
  return getText(LEAD_PHONE_KEY, "");
}
