"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { servicesData } from "@/data/services";
import { Reveal } from "@/components/system/Reveal";
import { Icon } from "@/components/ui/Icon";

const short = (s: string) => s.split(" ").slice(0, 2).join(" ").replace(/[()]/g, "");

/**
 * Desktop: an editorial index — hovering a row floats its photo beside the cursor.
 * Touch: each row carries its own photo, revealed as it scrolls in.
 */
export function ServicesIndex() {
  const [active, setActive] = useState<number | null>(null);
  const list = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });

  useEffect(() => {
    const el = list.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
    };
    el.addEventListener("pointermove", move);
    return () => el.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <section id="services" className="services section" data-theme="light">
      <div className="wrap">
        <div className="section-head">
          <p className="mono label">(03) Safety nets &amp; invisible grills</p>
          <Reveal as="h2" className="h2">
            Six ways to <em>stay held.</em>
          </Reveal>
          <p className="section-head__aside">
            Balcony safety nets, pigeon nets, invisible grills, children and monkey nets, and bird spikes. Each one measured on site,
            fitted with rust-proof stainless hardware and load-tested before we leave.
          </p>
        </div>

        <div ref={list} className="svc-wrap" onPointerLeave={() => setActive(null)}>
        <ul className="svc">
          {servicesData.map((s, i) => (
            <li key={s.slug} className="svc__row" onPointerEnter={() => setActive(i)} data-active={active === i || undefined}>
              <Link href={`/services/${s.slug}`} className="svc__link" data-cursor="Explore">
                <span className="svc__idx mono">0{i + 1}</span>
                <h3 className="svc__title">{s.title}</h3>
                <span className="svc__meta mono">
                  <span>{s.specs.strength}</span>
                  <span>{short(s.specs.durability)} life</span>
                </span>
                <span className="svc__arrow" aria-hidden="true">
                  <Icon name="up-right" />
                </span>
                <span className="svc__media">
                  <img src={s.image} alt={`${s.title} installed by Allind Safety`} width="960" height="523" loading="lazy" decoding="async" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
          <motion.div className="svc__float" style={{ x: sx, y: sy }} aria-hidden="true" data-show={active !== null || undefined}>
            <AnimatePresence initial={false}>
              {active !== null && (
                <motion.img
                  key={active}
                  src={servicesData[active].image}
                  alt=""
                  initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.25 }}
                  animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
