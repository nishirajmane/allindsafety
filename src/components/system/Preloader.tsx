"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { markReady } from "./ready";

/** First-visit-per-session intro: a knot counter that lifts away like a curtain. */
export function Preloader() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const seen = document.documentElement.classList.contains("seen");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || seen || reduce) {
      if (el) el.style.display = "none";
      markReady();
      return;
    }
    try {
      sessionStorage.setItem("allind-seen", "1");
    } catch {}

    const counter = { value: 0 };
    const number = el.querySelector<HTMLElement>("[data-count]");
    const tl = gsap.timeline({ defaults: { ease: "expo.inOut" } });
    tl.to(counter, {
      value: 100,
      duration: 1.5,
      ease: "power3.inOut",
      onUpdate: () => {
        if (number) number.textContent = String(Math.round(counter.value)).padStart(3, "0");
      },
    })
      .to(el.querySelector(".preloader__bar span"), { scaleX: 1, duration: 1.5, ease: "power3.inOut" }, 0)
      .fromTo(el.querySelectorAll(".preloader__word span"), { yPercent: 110 }, { yPercent: 0, stagger: 0.05, duration: 1, ease: "expo.out" }, 0.1)
      .to(el.querySelectorAll(".preloader__word span"), { yPercent: -110, stagger: 0.03, duration: 0.7, ease: "expo.in" }, 1.55)
      .add(() => markReady(), 2.05)
      .to(el, { clipPath: "inset(0 0 100% 0)", duration: 1, ease: "expo.inOut" }, 1.9)
      .add(() => (el.style.display = "none"));
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={root} className="preloader" aria-hidden="true">
      <div className="preloader__word">
        {"Allind".split("").map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </div>
      <div className="preloader__foot">
        <span className="mono">Tensioning the net</span>
        <span className="mono" data-count>
          000
        </span>
      </div>
      <div className="preloader__bar">
        <span />
      </div>
    </div>
  );
}
