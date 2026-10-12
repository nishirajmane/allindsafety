"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { work, workSrc } from "@/data/content";
import { useLenis } from "@/components/system/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.16, 1, 0.3, 1] as const;

/** Three columns drifting at different speeds; a shared-element lightbox on tap. */
export function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);
  const root = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const touchX = useRef(0);

  const columns = [0, 1, 2].map((c) => work.map((w, i) => ({ ...w, i })).filter((_, i) => i % 3 === c));

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".gallery__col", el).forEach((col, i) => {
        gsap.fromTo(col, { y: 0 }, { y: [-60, 80, -140][i], ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
      });
    });
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".gallery__item", el).forEach((item) => {
        gsap.from(item, { clipPath: "inset(100% 0 0 0)", duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: item, start: "top 92%" } });
      });
    });
    return () => mm.revert();
  }, []);

  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + work.length) % work.length)), []);

  useEffect(() => {
    if (open === null) return;
    const instance = lenis?.current;
    instance?.stop();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      instance?.start();
      document.documentElement.style.overflow = "";
    };
  }, [open, step, lenis]);

  const current = open === null ? null : work[open];

  return (
    <section ref={root} className="gallery section" data-theme="dark">
      <div className="wrap gallery__grid">
        {columns.map((col, c) => (
          <div className="gallery__col" key={c}>
            {col.map((item) => (
              <button key={item.slug} className="gallery__item" onClick={() => setOpen(item.i)} data-cursor="View" aria-label={`View ${item.title}`}>
                <motion.span className="gallery__frame" layoutId={`photo-${item.slug}`} style={{ aspectRatio: `${item.w} / ${item.h}` }}>
                  <img src={workSrc(item, 720)} alt={`${item.title} — ${item.kind} by Allind Safety`} width={item.w} height={item.h} loading={item.i < 3 ? "eager" : "lazy"} decoding="async" />
                </motion.span>
                <span className="gallery__caption">
                  <span className="mono">{String(item.i + 1).padStart(2, "0")}</span>
                  <span>{item.title}</span>
                  <span className="mono">{item.kind}</span>
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {current && open !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.target === e.currentTarget && setOpen(null)}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            }}
          >
            <div className="lightbox__bar mono">
              <span>
                {String(open + 1).padStart(2, "0")} / {String(work.length).padStart(2, "0")} — {current.kind}
              </span>
              <button className="round-btn round-btn--dark" onClick={() => setOpen(null)} aria-label="Close" autoFocus>
                ✕
              </button>
            </div>
            <motion.div className="lightbox__frame" layoutId={`photo-${current.slug}`} transition={{ duration: 0.7, ease }} onClick={() => setOpen(null)}>
              <img src={workSrc(current, 1280)} alt={`${current.title} — ${current.kind} by Allind Safety`} width={current.w} height={current.h} />
            </motion.div>
            <div className="lightbox__foot">
              <p>{current.title}</p>
              <div>
                <button className="round-btn round-btn--dark" onClick={() => step(-1)} aria-label="Previous photo">
                  ←
                </button>
                <button className="round-btn round-btn--dark" onClick={() => step(1)} aria-label="Next photo">
                  →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
