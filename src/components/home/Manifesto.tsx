"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Counter } from "@/components/system/Counter";
import { stats } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const Pill = ({ src, alt }: { src: string; alt: string }) => (
  <span className="pill-img">
    <img src={src} alt={alt} width="160" height="90" loading="lazy" decoding="async" />
  </span>
);

const words = (text: string) =>
  text.split(" ").map((w, i) => (
    <span className="mword" key={i}>
      {w}{" "}
    </span>
  ));

export function Manifesto() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mword, .pill-img",
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: { trigger: ".manifesto__text", start: "top 80%", end: "bottom 45%", scrub: 0.6 },
        },
      );
      gsap.from(".pill-img", {
        width: 0,
        stagger: 0.1,
        ease: "expo.out",
        duration: 1.4,
        scrollTrigger: { trigger: ".manifesto__text", start: "top 75%" },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="manifesto section" data-theme="light">
      <div className="wrap">
        <p className="mono label">(02) Why we exist</p>
        <p className="manifesto__text">
          {words("A balcony is where the city comes in —")} <Pill src="/art/work/02-curved-terrace-net-720.webp" alt="Curved terrace protected by a safety net" />{" "}
          {words("morning light, monsoon air, the whole skyline. We keep all of it. We just make sure nothing — no toddler")}{" "}
          <Pill src="/art/services/children-safety-net.webp" alt="Children playing safely on a netted balcony" />{" "}
          {words("no pet, no pigeon")} <Pill src="/art/services/pigeon-safety-nets.webp" alt="Pigeons kept outside a netted balcony" />{" "}
          {words("— ever crosses the line.")}
        </p>

        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stats__item">
              <dt className="mono">{s.label}</dt>
              <dd>
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
