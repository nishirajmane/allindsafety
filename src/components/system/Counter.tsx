"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const format = (n: number) => Math.round(n).toLocaleString("en-IN");

/** Counts up when scrolled into view. Server HTML carries the final value. */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const state = { n: 0 };
    el.textContent = "0";
    const tween = gsap.to(state, {
      n: value,
      duration: 2,
      ease: "expo.out",
      onUpdate: () => (el.textContent = format(state.n)),
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      el.textContent = format(value);
    };
  }, [value]);

  return (
    <span className="counter">
      <span ref={ref}>{format(value)}</span>
      {suffix && <span className="counter__suffix">{suffix}</span>}
    </span>
  );
}
