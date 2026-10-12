"use client";

import { createContext, useContext, useEffect, useRef, type ReactNode, type RefObject } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<RefObject<Lenis | null> | null>(null);

/** Returns a ref to the live Lenis instance (null on touch-only / reduced motion). */
export const useLenis = () => useContext(LenisContext);

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Wheel gets inertia; touch keeps native momentum scrolling.
    const instance = new Lenis({ lerp: 0.1, wheelMultiplier: 0.95 });
    lenis.current = instance;
    instance.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      lenis.current = null;
    };
  }, []);

  useEffect(() => {
    if (!window.location.hash) lenis.current?.scrollTo(0, { immediate: true, force: true });
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
