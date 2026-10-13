"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NetScene } from "@/components/three/NetScene";
import { Magnetic } from "@/components/system/Magnetic";
import { onReady } from "@/components/system/ready";
import { business } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const progress = useRef(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => (progress.current = self.progress),
      });
      if (reduce) return;
      gsap.to(".hero__content", {
        yPercent: -18,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: el, start: "35% top", end: "bottom top", scrub: true },
      });
    }, el);

    const off = onReady(() => {
      if (reduce) return el.setAttribute("data-in", "");
      const q = gsap.utils.selector(el);
      // Explicit start values replace the CSS pre-hide before data-in lifts it.
      gsap.set(q(".hero__title .line > span"), { y: 0, yPercent: 120, rotate: 4 });
      gsap.set(q(".hero__meta > *, .hero__foot > *"), { opacity: 0, y: 24 });
      el.setAttribute("data-in", "");
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .to(q(".hero__title .line > span"), { yPercent: 0, rotate: 0, duration: 1.5, stagger: 0.1 })
        .to(q(".hero__meta > *"), { opacity: 1, y: 0, duration: 1, stagger: 0.06 }, 0.3)
        .to(q(".hero__foot > *"), { opacity: 1, y: 0, duration: 1.2, stagger: 0.08 }, 0.45);
    });
    return () => {
      off();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="hero" data-theme="dark" data-cursor="Throw">
      <NetScene progress={progress} />
      <div className="hero__fade" aria-hidden="true" />
      <div className="hero__content wrap">
        <div className="hero__meta mono">
          <span>(01) Safety nets &amp; invisible grills</span>
          <span className="hide-sm">Pune, MH — 18.53°N 73.89°E</span>
          <span className="hero__live">
            <i aria-hidden="true" /> Booking site visits this week
          </span>
        </div>

        <h1 className="hero__h1">
          Safety nets &amp; invisible grills <span>in Pune</span>
        </h1>

        <div className="hero__title" aria-hidden="true">
          <span className="line">
            <span>The sky stays.</span>
          </span>
          <span className="line">
            <span>
              The <em>risk</em> doesn&rsquo;t.
            </span>
          </span>
        </div>

        <div className="hero__foot">
          <p className="hero__lede">
            Safety nets, invisible grills and bird protection for Pune&rsquo;s homes. Measured free, quoted clearly, installed in about
            two hours — rated to <strong>150&nbsp;kg a knot</strong>.
          </p>
          <div className="hero__actions">
            <Magnetic>
              <Link href="/contact" className="btn btn--sky btn--lg">
                Book a free site visit
              </Link>
            </Magnetic>
            <a href={`tel:${business.phone}`} className="btn btn--ghost btn--lg">
              {business.phoneDisplay}
            </a>
          </div>
          <p className="hero__hint mono" aria-hidden="true">
            <span className="hint-dot" /> <span className="hide-touch">Click</span>
            <span className="show-touch">Tap</span> the net — throw something at it
          </p>
        </div>
      </div>
    </section>
  );
}
