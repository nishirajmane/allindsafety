"use client";

import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/content";
import { Icon } from "@/components/ui/Icon";

const ease = [0.16, 1, 0.3, 1] as const;

export function Voices() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (d: number) => setIndex((i) => (i + d + testimonials.length) % testimonials.length);
  const t = testimonials[index];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => window.clearTimeout(id);
  }, [index, paused]);

  return (
    <section
      className="voices section"
      data-theme="light"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Customer reviews"
    >
      <div className="wrap">
        <div className="voices__top">
          <p className="mono label">(07) Neighbours, talking</p>
          <p className="mono voices__rating">From homes across Pune</p>
        </div>

        <motion.div
          className="voices__stage"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragEnd={(_, info) => {
            if (Math.abs(info.offset.x) > 60) go(info.offset.x < 0 ? 1 : -1);
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure key={index} className="voices__quote" aria-live="polite">
              <blockquote>
                {t.text.split(" ").map((w, i) => (
                  <Fragment key={i}>
                    <span className="voices__mask">
                      <motion.span
                        initial={{ y: "105%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-105%" }}
                        transition={{ duration: 0.75, ease, delay: i * 0.012 }}
                      >
                        {w}
                      </motion.span>
                    </span>{" "}
                  </Fragment>
                ))}
              </blockquote>
              <motion.figcaption initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <span className="voices__avatar" aria-hidden="true">
                  {t.name[0]}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <span className="mono">
                    {t.area}, Pune · {t.service}
                  </span>
                </span>
              </motion.figcaption>
            </motion.figure>
          </AnimatePresence>
        </motion.div>

        <div className="voices__nav">
          <span className="mono">
            {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
          <div className="voices__bars" aria-hidden="true">
            {testimonials.map((_, i) => (
              <span key={i} data-active={i === index || undefined}>
                {i === index && !paused && <i key={index} />}
              </span>
            ))}
          </div>
          <div className="voices__arrows">
            <button className="round-btn" onClick={() => go(-1)} aria-label="Previous review">
              <Icon name="left" />
            </button>
            <button className="round-btn" onClick={() => go(1)} aria-label="Next review">
              <Icon name="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
