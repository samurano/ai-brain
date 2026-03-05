import { captureAttributionFromUrl, getAttributionPayload } from "../lib/utm.js";
import { ensureLeadId, getLeadName, getLeadPhone, setLeadName, setLeadPhone } from "../lib/session.js";
import { getPricingCurrent, createPayment } from "../lib/api.js";
import { formatPrice } from "../lib/pricing.js";
import { track } from "../lib/analytics.js";

const PHONE_PATTERN = /^[+]?[-()\s\d]{10,20}$/;

let countdownTimer = null;
let refreshInProgress = false;
let lastSecondTick = null;

function applyConfigLinks() {
  const cfg = window.LANDING_CONFIG || {};
  const support = cfg.supportContactUrl || "https://t.me/ira_deni";

  document.querySelectorAll(".js-support-link").forEach((el) => {
    el.setAttribute("href", support);
  });
}

function initHeaderState() {
  const header = document.getElementById("site-head");
  if (!header) return;

  const sync = () => {
    header.classList.toggle("scrolled", window.scrollY > 6);
  };

  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

function showTopNotice(text, isOk = false) {
  const node = document.getElementById("pay-error");
  if (!node) return;
  node.hidden = false;
  node.textContent = text;
  node.classList.toggle("ok", Boolean(isOk));
}

function setFormError(text) {
  const node = document.getElementById("pay-form-error");
  if (node) node.textContent = text || "";
}

function shakeForm() {
  const shell = document.getElementById("payment-form-shell");
  if (!shell) return;
  shell.classList.remove("is-shaking");
  void shell.offsetWidth;
  shell.classList.add("is-shaking");
}

function updatePriceLadder(currentStage) {
  const stages = Array.from(document.querySelectorAll(".price-step"));
  const currentIndex = stages.findIndex((item) => item.dataset.stage === currentStage);

  stages.forEach((item, index) => {
    item.classList.remove("past", "current", "future");

    if (index < currentIndex) {
      item.classList.add("past");
      return;
    }

    if (index === currentIndex) {
      item.classList.add("current");
      return;
    }

    item.classList.add("future");
  });
}

function renderPricing(pricing) {
  const salesOpen = Boolean(pricing.sales_open);
  const payText = salesOpen
    ? `Оплатить доступ за ${formatPrice(pricing.current_price)}`
    : "Продажи закрыты";

  document.querySelectorAll("[data-current-price]").forEach((node) => {
    node.textContent = formatPrice(pricing.current_price);
  });

  document.querySelectorAll(".js-price-stage").forEach((node) => {
    node.textContent = `Текущая волна: ${pricing.price_stage_title}`;
  });

  document.querySelectorAll(".js-sales-note").forEach((node) => {
    node.textContent = salesOpen
      ? `Следующее переключение: ${pricing.next_switch_at_msk}`
      : "Продажи по текущему потоку закрыты";
  });

  document.querySelectorAll(".js-pay-label").forEach((node) => {
    node.textContent = payText;
    if (node.tagName === "BUTTON") {
      node.disabled = !salesOpen;
    }
  });

  const payForm = document.getElementById("payment-form");
  if (payForm) {
    payForm.querySelectorAll("input").forEach((field) => {
      field.disabled = !salesOpen;
    });
  }

  document.querySelectorAll(".js-pay-scroll").forEach((node) => {
    node.setAttribute("aria-disabled", salesOpen ? "false" : "true");
  });

  updatePriceLadder(pricing.price_stage);
}

function formatCountdownParts(ms) {
  if (ms <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400)
    .toString()
    .padStart(2, "0");
  const hours = Math.floor((totalSeconds % 86400) / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0");

  return { days, hours, minutes, seconds };
}

function pulseSeconds() {
  document.querySelectorAll(".timer-seconds").forEach((node) => {
    node.classList.remove("is-pulse");
    void node.offsetWidth;
    node.classList.add("is-pulse");
  });
}

function flashTimers() {
  document.querySelectorAll(".js-countdown").forEach((node) => {
    node.classList.remove("is-flash");
    void node.offsetWidth;
    node.classList.add("is-flash");
  });
}

function renderCountdown(ms) {
  const parts = formatCountdownParts(ms);

  Object.entries(parts).forEach(([unit, value]) => {
    document.querySelectorAll(`[data-unit="${unit}"]`).forEach((node) => {
      node.textContent = value;
    });
  });

  if (parts.seconds !== lastSecondTick) {
    pulseSeconds();
    lastSecondTick = parts.seconds;
  }
}

async function refreshPricingAfterSwitch() {
  if (refreshInProgress) return;
  refreshInProgress = true;

  try {
    flashTimers();
    const pricing = await getPricingCurrent();
    renderPricing(pricing);
    startCountdown(pricing.next_switch_ts);
    track("view_price_stage", {
      price_stage: pricing.price_stage,
      current_price: pricing.current_price,
    });
  } catch (error) {
    showTopNotice(`Не удалось обновить цену: ${error.message}`);
  } finally {
    refreshInProgress = false;
  }
}

function startCountdown(nextSwitchTs) {
  if (countdownTimer) clearInterval(countdownTimer);
  lastSecondTick = null;

  if (!nextSwitchTs) {
    renderCountdown(0);
    return;
  }

  const tick = () => {
    const diff = nextSwitchTs - Date.now();
    renderCountdown(diff);

    if (diff <= 0) {
      refreshPricingAfterSwitch();
    }
  };

  tick();
  countdownTimer = setInterval(tick, 1000);
}

function validateForm({ name, phone, email }) {
  if (!name || name.trim().length < 2) return "Укажите имя (минимум 2 символа).";
  if (phone && !PHONE_PATTERN.test(phone)) return "Проверьте формат телефона.";
  if (email && !/.+@.+\..+/.test(email)) return "Проверьте формат email.";
  return "";
}

function bindStickyButton() {
  const sticky = document.getElementById("sticky-pay-btn");
  if (!sticky) return;

  sticky.addEventListener("click", () => {
    const form = document.getElementById("payment-form");
    if (!form) return;
    form.scrollIntoView({ behavior: "smooth", block: "center" });
    form.requestSubmit();
  });
}

function bindScrollButtons() {
  document.querySelectorAll(".js-pay-scroll").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("aria-disabled") === "true") {
        event.preventDefault();
        return;
      }

      const target = document.getElementById("pay-form-section");
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initStickyCta() {
  const sticky = document.getElementById("sticky-pay-cta");
  const formSection = document.getElementById("pay-form-section");
  if (!sticky || !formSection) return;

  const desktopMq = window.matchMedia("(min-width: 1024px)");
  const computeVisibleState = () => {
    const rect = formSection.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  };

  const sync = (visibleFormSection) => {
    if (desktopMq.matches) {
      sticky.classList.remove("is-visible");
      return;
    }
    sticky.classList.toggle("is-visible", !visibleFormSection);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      sync(entry.isIntersecting);
    },
    { threshold: 0.15 },
  );

  observer.observe(formSection);
  desktopMq.addEventListener("change", () => sync(computeVisibleState()));
  sync(computeVisibleState());
}

function setAccordionState(item, open) {
  const button = item.querySelector(".faq-trigger");
  const panel = item.querySelector(".faq-panel");
  if (!button || !panel) return;

  item.classList.toggle("is-open", open);
  button.setAttribute("aria-expanded", String(open));
  panel.style.maxHeight = open ? `${panel.scrollHeight}px` : "0px";
}

function initAccordions() {
  const items = Array.from(document.querySelectorAll(".faq-item"));
  if (!items.length) return;

  items.forEach((item, index) => {
    const button = item.querySelector(".faq-trigger");
    if (!button) return;

    setAccordionState(item, item.classList.contains("is-open") || index === 0);

    button.addEventListener("click", () => {
      const shouldOpen = !item.classList.contains("is-open");
      items.forEach((other) => setAccordionState(other, false));
      setAccordionState(item, shouldOpen);
    });
  });

  window.addEventListener("resize", () => {
    items.forEach((item) => {
      if (item.classList.contains("is-open")) {
        setAccordionState(item, true);
      }
    });
  });
}

function initRevealAnimations() {
  const sections = Array.from(document.querySelectorAll(".reveal"));
  if (!sections.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    sections.forEach((section) => {
      section.classList.add("is-visible");
      section.querySelectorAll("[data-stagger]").forEach((node) => {
        node.style.transitionDelay = "0ms";
      });
    });
    return;
  }

  sections.forEach((section) => {
    section.querySelectorAll("[data-stagger]").forEach((node, index) => {
      node.style.transitionDelay = `${index * 80}ms`;
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  sections.forEach((section) => observer.observe(section));
}

function initCaseDots() {
  const trackNode = document.getElementById("pay-cases-track");
  const dots = Array.from(document.querySelectorAll("#pay-case-dots .case-dot"));
  if (!trackNode || !dots.length) return;

  const syncDots = () => {
    if (window.matchMedia("(min-width: 768px)").matches) return;

    const cards = Array.from(trackNode.children);
    if (!cards.length) return;

    const center = trackNode.scrollLeft + trackNode.clientWidth / 2;
    let activeIndex = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - center);
      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = index;
      }
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activeIndex);
    });
  };

  trackNode.addEventListener("scroll", syncDots, { passive: true });
  window.addEventListener("resize", syncDots);
  syncDots();
}

async function submitPayment(event) {
  event.preventDefault();
  setFormError("");

  const form = event.currentTarget;
  const name = form.querySelector("#payer-name").value.trim();
  const phone = form.querySelector("#payer-phone").value.trim();
  const email = form.querySelector("#payer-email").value.trim();

  const error = validateForm({ name, phone, email });
  if (error) {
    setFormError(error);
    shakeForm();
    return;
  }

  const leadId = ensureLeadId();
  setLeadName(name);
  if (phone) setLeadPhone(phone);

  const payload = {
    lead_id: leadId,
    name,
    phone,
    email,
    ts_client: new Date().toISOString(),
    ...getAttributionPayload(),
  };

  const button = document.getElementById("pay-btn");
  button.disabled = true;

  track("click_pay_cta", { lead_id: leadId });

  try {
    const result = await createPayment(payload);
    track("payment_create_success", {
      payment_id: result.payment_id,
      price_stage: result.price_stage,
      current_price: result.amount,
      lead_id: leadId,
    });

    window.location.assign(result.confirmation_url);
  } catch (apiError) {
    setFormError(`Не удалось создать платеж: ${apiError.message}`);
    shakeForm();
    button.disabled = false;
  }
}

async function init() {
  captureAttributionFromUrl();
  applyConfigLinks();
  initHeaderState();
  initAccordions();
  initRevealAnimations();
  initCaseDots();
  initStickyCta();

  track("view_pay_page");

  const params = new URLSearchParams(window.location.search);
  if (params.get("payment") === "failed") {
    showTopNotice("Оплата не завершена. Попробуйте еще раз.");
    track("payment_failed");
  }

  const nameInput = document.getElementById("payer-name");
  const phoneInput = document.getElementById("payer-phone");
  if (nameInput) nameInput.value = getLeadName();
  if (phoneInput) phoneInput.value = getLeadPhone();

  const pricing = await getPricingCurrent();
  renderPricing(pricing);
  startCountdown(pricing.next_switch_ts);

  track("view_price_stage", {
    price_stage: pricing.price_stage,
    current_price: pricing.current_price,
  });

  bindStickyButton();
  bindScrollButtons();

  const form = document.getElementById("payment-form");
  if (form) {
    form.addEventListener("submit", submitPayment);
  }
}

init().catch((error) => {
  showTopNotice(`Ошибка загрузки страницы оплаты: ${error.message}`);
});
