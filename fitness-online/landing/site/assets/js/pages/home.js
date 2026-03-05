import { captureAttributionFromUrl, getAttributionPayload } from "../lib/utm.js";
import { ensureLeadId, setLeadName, setLeadPhone } from "../lib/session.js";
import { createPrechatLead } from "../lib/api.js";
import { track } from "../lib/analytics.js";

const PHONE_PATTERN = /^[+]?[-()\s\d]{10,20}$/;

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

function clearError() {
  const error = document.getElementById("form-error");
  if (error) error.textContent = "";
}

function setError(text) {
  const error = document.getElementById("form-error");
  if (error) error.textContent = text;
}

function shakeForm() {
  const shell = document.getElementById("prechat-form-shell");
  if (!shell) return;
  shell.classList.remove("is-shaking");
  void shell.offsetWidth;
  shell.classList.add("is-shaking");
}

function bindHeroCtas() {
  document.querySelectorAll(".js-prechat-cta").forEach((button) => {
    button.addEventListener("click", () => {
      track("click_prechat_cta");
    });
  });
}

function validate(name, phone, consent) {
  if (!name || name.trim().length < 2) return "Укажите имя (минимум 2 символа).";
  if (phone && !PHONE_PATTERN.test(phone)) return "Проверьте формат телефона.";
  if (!consent) return "Нужно согласиться с политикой конфиденциальности.";
  return "";
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

function initStickyCta() {
  const sticky = document.getElementById("sticky-cta");
  const heroCta = document.getElementById("hero-cta");
  const finalCta = document.getElementById("final-cta");
  if (!sticky || !heroCta || !finalCta) return;

  const desktopMq = window.matchMedia("(min-width: 1024px)");
  let heroVisible = true;
  let finalVisible = false;

  const sync = () => {
    if (desktopMq.matches) {
      sticky.classList.remove("is-visible");
      return;
    }

    const show = !heroVisible && !finalVisible;
    sticky.classList.toggle("is-visible", show);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === heroCta) heroVisible = entry.isIntersecting;
        if (entry.target === finalCta) finalVisible = entry.isIntersecting;
      });
      sync();
    },
    { threshold: 0.2 },
  );

  observer.observe(heroCta);
  observer.observe(finalCta);
  desktopMq.addEventListener("change", sync);
  sync();
}

function initCaseDots() {
  const trackNode = document.getElementById("cases-track");
  const dots = Array.from(document.querySelectorAll("#case-dots .case-dot"));
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

async function onSubmit(event) {
  event.preventDefault();
  clearError();
  track("submit_prechat_form");

  const form = event.currentTarget;
  const name = form.querySelector("#name").value.trim();
  const phone = form.querySelector("#phone").value.trim();
  const consent = form.querySelector("#consent").checked;

  const message = validate(name, phone, consent);
  if (message) {
    setError(message);
    shakeForm();
    return;
  }

  const leadId = ensureLeadId();
  setLeadName(name);
  if (phone) setLeadPhone(phone);

  const payload = {
    name,
    phone,
    consent_privacy: consent,
    lead_id: leadId,
    ts_client: new Date().toISOString(),
    landing_page: window.location.pathname,
    ...getAttributionPayload(),
  };

  const submitButton = document.getElementById("submit-btn");
  const defaultText = submitButton.textContent;
  submitButton.disabled = true;

  try {
    const result = await createPrechatLead(payload);
    track("prechat_form_success", { lead_id: leadId });

    submitButton.classList.add("is-success");
    submitButton.textContent = "✓ Готово";

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const target = result.redirect_url || "prechat-instruction/";
    window.location.assign(target);
  } catch (error) {
    setError(`Не удалось отправить форму: ${error.message}`);
    shakeForm();
    submitButton.disabled = false;
    submitButton.classList.remove("is-success");
    submitButton.textContent = defaultText;
  }
}

function init() {
  captureAttributionFromUrl();
  applyConfigLinks();
  initHeaderState();
  bindHeroCtas();
  initAccordions();
  initRevealAnimations();
  initStickyCta();
  initCaseDots();

  track("view_prechat_page");

  const form = document.getElementById("prechat-form");
  if (form) {
    form.addEventListener("submit", onSubmit);
  }
}

init();
