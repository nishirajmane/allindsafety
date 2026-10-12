"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Image that unmasks as it enters and drifts slower than the page. */
export function ParallaxImage({ src, alt, width, height, className = "", priority = false }: { src: string; alt: string; width: number; height: number; className?: string; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const img = el.querySelector("img");
      gsap.fromTo(el, { clipPath: "inset(12% 6% 12% 6% round 32px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "expo.out", duration: 1.6, scrollTrigger: { trigger: el, start: "top 85%" } });
      gsap.fromTo(img, { yPercent: -9 }, { yPercent: 9, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className={`parallax ${className}`}>
      <img src={src} alt={alt} width={width} height={height} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} decoding="async" />
    </div>
  );
}
