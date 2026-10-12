// Tiny signal fired once the preloader (or route curtain) has cleared the screen,
// so entrance animations don't play hidden behind it.
const EVENT = "allind:ready";

declare global {
  interface Window {
    __allindReady?: boolean;
  }
}

export function markReady() {
  if (typeof window === "undefined" || window.__allindReady) return;
  window.__allindReady = true;
  window.dispatchEvent(new Event(EVENT));
}

export function onReady(callback: () => void) {
  if (window.__allindReady) {
    callback();
    return () => {};
  }
  const handler = () => callback();
  window.addEventListener(EVENT, handler, { once: true });
  return () => window.removeEventListener(EVENT, handler);
}
