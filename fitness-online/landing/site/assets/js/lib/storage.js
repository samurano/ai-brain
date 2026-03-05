const PREFIX = "landing.";

function key(name) {
  return `${PREFIX}${name}`;
}

export function getJson(name, fallback = null) {
  try {
    const raw = localStorage.getItem(key(name));
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function setJson(name, value) {
  try {
    localStorage.setItem(key(name), JSON.stringify(value));
  } catch {
    // noop
  }
}

export function getText(name, fallback = "") {
  try {
    const raw = localStorage.getItem(key(name));
    return raw == null ? fallback : raw;
  } catch {
    return fallback;
  }
}

export function setText(name, value) {
  try {
    localStorage.setItem(key(name), String(value));
  } catch {
    // noop
  }
}

export function getFlag(name) {
  return getText(name, "0") === "1";
}

export function setFlag(name, value) {
  setText(name, value ? "1" : "0");
}
