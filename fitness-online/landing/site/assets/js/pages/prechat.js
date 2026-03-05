import { captureAttributionFromUrl } from "../lib/utm.js";
import { getLeadId } from "../lib/session.js";
import { track } from "../lib/analytics.js";

function applyLinks() {
  const cfg = window.LANDING_CONFIG || {};

  const support = cfg.supportContactUrl || "https://t.me/ira_deni";
  document.querySelectorAll(".js-support-link").forEach((el) => {
    el.setAttribute("href", support);
  });

  const joinPrechatBtn = document.getElementById("join-prechat-btn");
  joinPrechatBtn.setAttribute("href", cfg.prechatChatUrl || support);

  const leadId = getLeadId();
  const payUrl = new URL("../pay/", window.location.href);
  if (leadId) payUrl.searchParams.set("lead_id", leadId);
  document.getElementById("go-to-pay-btn").setAttribute("href", payUrl.toString());

  joinPrechatBtn.addEventListener("click", () => {
    track("click_join_prechat_chat", { lead_id: leadId || "" });
  });
}

function init() {
  captureAttributionFromUrl();
  applyLinks();
  track("view_prechat_instruction_page");
}

init();
