"use client";
import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LazyMotion, MotionConfig } from "framer-motion";
const loadFeatures = () => import("./features").then((module) => module.default);

export function MotionExperience({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let disposed = false;
    let revert: (() => void) | undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    async function animatePage() {
      const { gsap } = await import("gsap");
      if (disposed) return;
      const media = gsap.matchMedia();
      revert = () => media.revert();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const hero = document.querySelector(".hero-shell");
        if (!hero) {
          const intro = document.querySelector(".detail-hero, .gallery-heading, .contact-heading, .about-grid");
          if (intro) gsap.fromTo(intro, { y: 16, opacity: 0.75 }, { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" });
          return;
        }
        const timeline = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
        timeline
          .fromTo(".hero-copy .eyebrow", { y: 10, opacity: 0.65 }, { y: 0, opacity: 1 })
          .fromTo(".hero-copy h1", { y: 28, opacity: 0.65 }, { y: 0, opacity: 1 }, 0.08)
          .fromTo(".hero-copy p", { y: 18, opacity: 0.7 }, { y: 0, opacity: 1 }, 0.18)
          .fromTo(".hero-actions .action", { y: 16, scale: 0.97 }, { y: 0, scale: 1, stagger: 0.08 }, 0.26)
          .fromTo(".hero-visual", { y: 20, opacity: 0.75 }, { y: 0, opacity: 1, duration: 1 }, 0.12)
          .fromTo(".hero-sticker", { rotation: -8, scale: 0.85 }, { rotation: 10, scale: 1, ease: "back.out(1.4)" }, 0.35);
      });
      if (window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)").matches) {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
          if (!document.querySelector(".hero-visual picture")) return;
          gsap.to(".hero-visual picture", { y: -24, ease: "none", scrollTrigger: { trigger: ".hero-shell", start: "top top", end: "bottom top", scrub: 0.7 } });
        });
      }
    }
    void animatePage().catch(() => { /* Content remains visible if optional motion cannot load. */ });
    return () => { disposed = true; revert?.(); };
  }, [pathname]);

  return <MotionConfig reducedMotion="user"><LazyMotion features={loadFeatures} strict>{children}</LazyMotion></MotionConfig>;
}
