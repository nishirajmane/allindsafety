"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LazyMotion, MotionConfig } from "framer-motion";
const loadFeatures = () => import("./features").then(module => module.default);
const MotionPaused = createContext(false);
export const useMotionPaused = () => useContext(MotionPaused);

export function MotionExperience({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    let disposed = false;
    let revert: (() => void) | undefined;
    if (paused) return;
    async function animatePage() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      revert = () => media.revert();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const hero = document.querySelector(".editorial-hero");
        if (hero) {
          gsap.timeline({ defaults: { ease: "power4.out" } })
            .fromTo(".hero-topline", { opacity: 0.5, y: 12 }, { opacity: 1, y: 0, duration: 0.7 })
            .fromTo(".hero-line > span", { yPercent: 100, rotation: 3 }, { yPercent: 0, rotation: 0, duration: 1.15, stagger: 0.12 }, 0.08)
            .fromTo(".hero-bottom-copy", { opacity: 0.5, y: 24 }, { opacity: 1, y: 0, duration: 0.85 }, 0.45)
            .fromTo(".hero-visual picture", { clipPath: "inset(10% 8% 10% 8% round 40px)" }, { clipPath: "inset(0% 0% 0% 0% round 8px)", duration: 1.3 }, 0.25)
            .fromTo(".hero-sticker", { scale: 0.6, rotation: -25 }, { scale: 1, rotation: 10, duration: 0.9, ease: "back.out(1.4)" }, 0.7);
          gsap.fromTo(".hero-visual img", { scale: 1.05 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".hero-visual", start: "top 75%", end: "bottom top", scrub: 0.8 } });
          const band = document.querySelector<HTMLElement>(".kinetic-track");
          if (band) {
            const ticker = gsap.to(band, { xPercent: -50, duration: 28, repeat: -1, ease: "none", paused: true });
            ScrollTrigger.create({ trigger: ".kinetic-band", start: "top bottom", end: "bottom top", onToggle: self => self.isActive ? ticker.play() : ticker.pause() });
          }
        } else {
          const intro = document.querySelector(".detail-hero, .gallery-heading, .contact-heading, .about-grid");
          if (intro) gsap.fromTo(intro, { y: 24, opacity: 0.7 }, { y: 0, opacity: 1, duration: 0.9, ease: "power4.out" });
        }
        gsap.utils.toArray<HTMLElement>(".section-heading h2, .faq-section h2, .quote-layout h2").forEach(heading => {
          gsap.fromTo(heading, { y: 32, opacity: 0.65 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: heading, start: "top 90%", once: true } });
        });
        const words = document.querySelectorAll(".why-word");
        if (words.length) gsap.fromTo(words, { opacity: 0.25 }, { opacity: 1, stagger: 0.12, ease: "none", scrollTrigger: { trigger: ".why-section h2", start: "top 80%", end: "bottom 40%", scrub: 0.5 } });
        gsap.to(".scroll-progress", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.15 } });
      });
      media.add("(min-width: 1024px) and (min-height: 760px) and (prefers-reduced-motion: no-preference)", () => {
        const section = document.querySelector<HTMLElement>(".editorial-work");
        const stage = document.querySelector<HTMLElement>(".work-stage");
        const track = document.querySelector<HTMLElement>(".work-track");
        if (!section || !stage || !track) return;
        section.setAttribute("data-work-motion", "true");
        const travel = () => Math.max(0, track.scrollWidth - window.innerWidth);
        const sequence = gsap.timeline({ scrollTrigger: { trigger: section, start: "top 84px", end: () => `+=${travel() + 350}`, pin: stage, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 } });
        sequence.to(track, { x: () => -travel(), ease: "none" }, 0).fromTo(".work-meter span", { scaleX: 0.1 }, { scaleX: 1, ease: "none" }, 0);
        const images = track.querySelectorAll("img");
        sequence.fromTo(images, { scale: 1.08 }, { scale: 1, ease: "none" }, 0);
        const focusProject = (event: FocusEvent) => {
          const project = (event.target as HTMLElement).closest(".work-photo");
          const index = Array.from(track.querySelectorAll(".work-photo")).indexOf(project as Element);
          const trigger = sequence.scrollTrigger;
          if (index >= 0 && trigger) window.scrollTo({ top: trigger.start + (trigger.end - trigger.start) * (index / 2), behavior: "instant" });
        };
        track.addEventListener("focusin", focusProject);
        return () => { track.removeEventListener("focusin", focusProject); section.removeAttribute("data-work-motion"); };
      });
      media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        const cleanups: (() => void)[] = [];
        document.querySelectorAll<HTMLElement>(".action-lime").forEach(button => {
          const xTo = gsap.quickTo(button, "x", { duration: 0.5, ease: "power3.out" });
          const yTo = gsap.quickTo(button, "y", { duration: 0.5, ease: "power3.out" });
          const move = (event: PointerEvent) => {
            const rect = button.getBoundingClientRect();
            xTo((event.clientX - rect.left - rect.width / 2) * 0.12);
            yTo((event.clientY - rect.top - rect.height / 2) * 0.16);
          };
          const reset = () => { xTo(0); yTo(0); };
          button.addEventListener("pointermove", move);
          button.addEventListener("pointerleave", reset);
          button.addEventListener("blur", reset);
          cleanups.push(() => { button.removeEventListener("pointermove", move); button.removeEventListener("pointerleave", reset); button.removeEventListener("blur", reset); });
        });
        document.querySelectorAll<HTMLElement>(".service-photo, .gallery-photo").forEach(card => {
          const image = card.querySelector("img");
          if (!image) return;
          const enter = () => gsap.to(image, { scale: 1.06, duration: 0.7, ease: "power3.out", overwrite: true });
          const leave = () => gsap.to(image, { scale: 1, duration: 0.7, ease: "power3.out", overwrite: true });
          card.addEventListener("pointerenter", enter);
          card.addEventListener("pointerleave", leave);
          cleanups.push(() => { card.removeEventListener("pointerenter", enter); card.removeEventListener("pointerleave", leave); gsap.killTweensOf(image); gsap.set(image, { clearProps: "transform" }); });
        });
        return () => cleanups.forEach(cleanup => cleanup());
      });
      const refresh = () => { if (!disposed) ScrollTrigger.refresh(); };
      void document.fonts.ready.then(refresh);
    }
    void animatePage().catch(() => { /* Optional motion never blocks content or navigation. */ });
    return () => { disposed = true; revert?.(); };
  }, [pathname, paused]);

  return <MotionPaused.Provider value={paused}><MotionConfig reducedMotion={paused ? "always" : "user"}><LazyMotion features={loadFeatures} strict><div className="scroll-progress" aria-hidden="true"/>{children}<button type="button" className="motion-toggle" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? "Resume motion" : "Pause motion"}</button></LazyMotion></MotionConfig></MotionPaused.Provider>;
}
