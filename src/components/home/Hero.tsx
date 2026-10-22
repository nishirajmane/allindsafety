"use client";

import Link from "next/link";
import { getImageProps } from "next/image";
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
  const { props: desktopPhoto } = getImageProps({
    src: "/optimized/hero-image-1200.webp",
    alt: "",
    width: 1200,
    height: 800,
    sizes: "100vw",
    fetchPriority: "high",
  });
  const { props: mobilePhoto } = getImageProps({
    src: "/optimized/hero-image-640.webp",
    alt: "",
    width: 640,
    height: 427,
    sizes: "100vw",
    fetchPriority: "high",
  });

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
      gsap.set(q(".hero__h1, .hero__foot > *"), { opacity: 0, y: 24 });
      el.setAttribute("data-in", "");
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .to(q(".hero__h1"), { opacity: 1, y: 0, duration: 0.9 })
        .to(q(".hero__title .line > span"), { yPercent: 0, rotate: 0, duration: 1.4, stagger: 0.1 }, 0.2)
        .to(q(".hero__foot > *"), { opacity: 1, y: 0, duration: 1.1, stagger: 0.08 }, 0.5);
    });
    return () => {
      off();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="hero" data-theme="dark" data-cursor="Throw">
      <picture className="hero__photo">
        <source media="(max-width: 640px)" srcSet={mobilePhoto.src} />
        <img {...desktopPhoto} alt="" />
      </picture>
      <NetScene progress={progress} />
      <div className="hero__fade" aria-hidden="true" />
      <div className="hero__content wrap">
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
            Strong safety nets and invisible grills for your home. We measure for free, give you one clear price, and fit it in about
            2 hours.
          </p>
          <div className="hero__actions">
            <Magnetic>
              <Link href="/contact" className="btn btn--sky btn--lg">
                Book a free visit
              </Link>
            </Magnetic>
            <a href={`tel:${business.phone}`} className="btn btn--ghost btn--lg">
              {business.phoneDisplay}
            </a>
          </div>
          <p className="hero__hint" aria-hidden="true">
            <span className="hint-dot" /> <span className="hide-touch">Click</span>
            <span className="show-touch">Tap</span> the net to play
          </p>
        </div>
      </div>
    </section>
  );
}
