"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { onReady } from "./ready";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface RevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
  /** "lines" rises each masked line; "fade" lifts the whole block. */
  mode?: "lines" | "fade";
  delay?: number;
  /** Play immediately once the page is ready instead of on scroll. */
  immediate?: boolean;
}

/** Masked line-by-line headline reveal. Text stays in the DOM for crawlers and screen readers. */
export function Reveal({ as: Tag = "div", children, className, id, mode = "lines", delay = 0, immediate = false }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { visibility: "visible" });
      return;
    }
    let split: SplitText | null = null;
    let tween: gsap.core.Tween | null = null;
    const off = onReady(() => {
      const trigger = immediate ? undefined : { trigger: el, start: "top 88%", once: true };
      if (mode === "fade") {
        gsap.set(el, { visibility: "visible" });
        tween = gsap.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", delay, scrollTrigger: trigger });
        return;
      }
      split = SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit(self) {
          gsap.set(el, { visibility: "visible" });
          tween?.kill();
          tween = gsap.from(self.lines, {
            yPercent: 115,
            rotate: 2.5,
            transformOrigin: "0% 0%",
            duration: 1.25,
            stagger: 0.09,
            ease: "expo.out",
            delay,
            scrollTrigger: trigger,
          });
          return tween;
        },
      });
    });
    return () => {
      off();
      tween?.scrollTrigger?.kill();
      tween?.kill();
      split?.revert();
    };
  }, [mode, delay, immediate]);

  return (
    <Tag ref={ref} className={className} id={id} data-reveal="">
      {children}
    </Tag>
  );
}
