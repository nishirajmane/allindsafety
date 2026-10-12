"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { process } from "@/data/content";
import { Reveal } from "@/components/system/Reveal";

gsap.registerPlugin(ScrollTrigger);

/** Sticky card deck: each step settles on top of the last, which sinks back and dims. */
export function Process() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".step", el);
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        gsap.to(card.querySelector(".step__card"), {
          scale: 0.9 + i * 0.015,
          filter: "brightness(0.55)",
          ease: "none",
          scrollTrigger: { trigger: next, start: "top bottom", end: "top 20%", scrub: true },
        });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className="process section" data-theme="light">
      <div className="wrap">
        <div className="section-head">
          <p className="mono label">(05) How it works</p>
          <Reveal as="h2" className="h2">
            From first call <em>to fully held.</em>
          </Reveal>
          <p className="section-head__aside">Four steps. No hard sell, no hidden charges, no mess left behind.</p>
        </div>
        <ol className="steps">
          {process.map((s, i) => (
            <li className="step" key={s.title} style={{ top: `calc(var(--header-h) + ${i * 18}px)` }}>
              <div className="step__card" data-tone={i % 2 ? "ink" : "sky"}>
                <span className="step__num">0{i + 1}</span>
                <div className="step__body">
                  <p className="mono label">{s.meta}</p>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
