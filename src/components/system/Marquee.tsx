"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Infinite CSS marquee whose speed and direction follow scroll velocity. */
export function Marquee({ children, reverse = false, className = "" }: { children: ReactNode; reverse?: boolean; className?: string }) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animation = el.getAnimations()[0];
    if (!animation) return;
    let rate = 1;
    let direction = 1;
    let raf = 0;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      onUpdate(self) {
        direction = self.direction;
        rate = 1 + Math.min(Math.abs(self.getVelocity()) / 260, 6);
      },
    });
    const loop = () => {
      rate += (1 - rate) * 0.05;
      animation.playbackRate = rate * direction;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      st.kill();
    };
  }, []);

  return (
    <div className={`marquee ${className}`} data-reverse={reverse || undefined}>
      <div ref={track} className="marquee__track">
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
