"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const specs = [
  { value: "150", unit: "kg", title: "Breaking load, per knot", text: "Balcony nets rated 120–150 kg at every single knot. Children nets go to 160 kg." },
  { value: "UV", unit: "+", title: "Sun-proof. Monsoon-proof.", text: "UV-stabilised HDPE and copolymer nylon that won't fade, rot or sag through Pune seasons." },
  { value: "316", unit: "SS", title: "Marine-grade steel", text: "Invisible grills use SS 316 cable in a nano-nylon sleeve — up to 400 kg tensile strength." },
  { value: "7", unit: "yr", title: "Warranty, in writing", text: "5–7 years of manufacturer warranty depending on product. Expected life: 8 to 15 years." },
];

const N = 13;
const grid = Array.from({ length: N }, (_, i) => (i / (N - 1)) * 600);

/** Pinned: we zoom from a whole net down into a single knot while the specs change. */
export function Anatomy() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const items = gsap.utils.toArray<HTMLElement>(".anatomy__spec", el);
      const bar = el.querySelector(".anatomy__progress span");
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${window.innerHeight * (window.innerWidth < 768 ? 2.6 : 3.2)}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      tl.fromTo(".anatomy__mesh", { scale: 1, rotate: -8 }, { scale: 7.5, rotate: 0, duration: 4, ease: "power2.in" }, 0)
        .fromTo(".anatomy__knot", { opacity: 0.3 }, { opacity: 1, duration: 1 }, 0.5)


        .fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 4 }, 0);
      gsap.fromTo(
        el.querySelectorAll(".anatomy__threads path"),
        { strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 1.6, stagger: 0.03, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 75%" } },
      );
      gsap.set(items.slice(1), { autoAlpha: 0, yPercent: 40 });
      items.forEach((item, i) => {
        if (i === 0) return;
        tl.to(items[i - 1], { autoAlpha: 0, yPercent: -40, duration: 0.25 }, i - 0.15).to(item, { autoAlpha: 1, yPercent: 0, duration: 0.25 }, i);
      });
    });
    return () => mm.revert();
  }, []);

  // Stable wrapper: GSAP pinning re-parents the section into a pin-spacer.

  return (
    <div>
    <section ref={root} className="anatomy" data-theme="dark">
      <div className="anatomy__inner wrap">
        <div className="anatomy__head">
          <p className="mono label">(04) Anatomy of a knot</p>
          <h2 className="h2">
            Engineered <em>to hold.</em>
          </h2>
        </div>

        <div className="anatomy__visual" aria-hidden="true">
          <svg className="anatomy__mesh" viewBox="0 0 600 600">
            <g className="anatomy__threads" fill="none" stroke="currentColor" strokeWidth="1.2">
              {grid.map((p, i) => (
                <path key={`h${i}`} pathLength={1} strokeDasharray="1" d={`M0 ${p} Q300 ${p + (i % 2 ? 6 : -6)} 600 ${p}`} />
              ))}
              {grid.map((p, i) => (
                <path key={`v${i}`} pathLength={1} strokeDasharray="1" d={`M${p} 0 Q${p + (i % 2 ? 6 : -6)} 300 ${p} 600`} />
              ))}
            </g>
            <g className="anatomy__knot">
              <circle cx="300" cy="300" r="9" fill="var(--sky)" />
              <circle cx="300" cy="300" r="16" fill="none" stroke="var(--sky)" strokeWidth="0.8" />
            </g>
          </svg>
        </div>

        <div className="anatomy__specs">
          {specs.map((s, i) => (
            <article className="anatomy__spec" key={s.title}>
              <p className="anatomy__value">
                {s.value}
                <span>{s.unit}</span>
              </p>
              <div>
                <p className="mono label">
                  0{i + 1} / 0{specs.length}
                </p>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </article>
          ))}
          <div className="anatomy__progress" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
