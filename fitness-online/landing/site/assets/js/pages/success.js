import { captureAttributionFromUrl } from "../lib/utm.js";
import { track, trackOnce } from "../lib/analytics.js";

function applyLinks() {
  const cfg = window.LANDING_CONFIG || {};
  const support = cfg.supportContactUrl || "https://t.me/ira_deni";
  const privateChat = cfg.privateChatUrl || support;

  document.querySelectorAll(".js-support-link").forEach((el) => {
    el.setAttribute("href", support);
  });

  const button = document.getElementById("join-private-chat-btn");
  button.setAttribute("href", privateChat);

  button.addEventListener("click", () => {
    track("click_join_private_chat");
  });
}

function initPaymentMeta(params) {
  const paymentId = params.get("payment_id") || "не передан";
  const leadId = params.get("lead_id") || "не передан";

  const meta = document.getElementById("payment-meta");
  meta.textContent = `Платеж: ${paymentId} • lead_id: ${leadId}`;

  trackOnce("payment_success", paymentId, {
    payment_id: paymentId,
    lead_id: leadId,
  });
}

function init() {
  captureAttributionFromUrl();
  applyLinks();

  const params = new URLSearchParams(window.location.search);
  initPaymentMeta(params);
}

init();
