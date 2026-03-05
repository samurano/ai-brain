import { getJson, setJson, getFlag, setFlag } from "./storage.js";
import { getAttributionPayload } from "./utm.js";
import { getLeadId } from "./session.js";

const LOG_KEY = "eventLog";

function mskTimestamp() {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Moscow",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date());
}

function pushEvent(event) {
  const current = getJson(LOG_KEY, []);
  current.push(event);
  const sliced = current.slice(-250);
  setJson(LOG_KEY, sliced);
}

export function track(eventName, payload = {}) {
  const event = {
    event_name: eventName,
    ts_msk: mskTimestamp(),
    page_path: window.location.pathname,
    lead_id: payload.lead_id || getLeadId() || "",
    ...getAttributionPayload(),
    ...payload,
  };

  pushEvent(event);

  if (!window.dataLayer) window.dataLayer = [];
  window.dataLayer.push(event);

  // Для быстрой ручной проверки событий в браузере.
  console.log("[track]", eventName, event);
  return event;
}

export function trackOnce(eventName, dedupeKey, payload = {}) {
  const key = `dedupe.${eventName}.${dedupeKey}`;
  if (!dedupeKey) return track(eventName, payload);
  if (getFlag(key)) return null;
  setFlag(key, true);
  return track(eventName, payload);
}
