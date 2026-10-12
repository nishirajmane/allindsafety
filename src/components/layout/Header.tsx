"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Wordmark } from "./Logo";
import { business, nav, whatsappLink } from "@/data/site";
import { servicesData } from "@/data/services";
import { useLenis } from "@/components/system/SmoothScroll";

const ease = [0.76, 0, 0.24, 1] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();
  const lastY = useRef(0);


  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 240 && y > lastY.current + 2);
      if (y < lastY.current - 2) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const instance = lenis?.current;
    if (open) {
      instance?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      instance?.start();
      document.documentElement.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <>
      <header className="header" data-hidden={hidden && !open} data-scrolled={scrolled} data-open={open}>
        <Link href="/" className="header__pill header__brand" aria-label="Allind Safety — home">
          <Wordmark />
        </Link>
        <nav className="header__nav header__pill" aria-label="Main">
          {nav.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href} className="roll" data-text={item.label}>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="header__actions">
          <Link href="/contact" className="btn btn--sky header__cta">
            Free site visit
          </Link>
          <button className="header__pill header__menu" aria-expanded={open} aria-controls="site-menu" onClick={toggle}>
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="burger" aria-hidden="true">
              <i />
              <i />
            </span>
            <span className="header__menu-label" aria-hidden="true">
              {open ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            className="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ clipPath: "circle(0% at calc(100% - 48px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 48px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 48px) 40px)" }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="menu__inner">
              <nav className="menu__links" aria-label="Menu">
                {[{ label: "Home", href: "/" }, ...nav].map((item, i) => (
                  <div className="menu__mask" key={item.href}>
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%" }}
                      transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.05 }}
                    >
                      <Link href={item.href} onClick={close} className="menu__link" data-active={pathname === item.href || undefined}>
                        <sup className="mono">0{i + 1}</sup>
                        {item.label}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </nav>
              <motion.div
                className="menu__aside"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <div>
                  <p className="mono label">Services</p>
                  {servicesData.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={close}>
                      {s.title}
                    </Link>
                  ))}
                </div>
                <div>
                  <p className="mono label">Talk to a human</p>
                  <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    WhatsApp us
                  </a>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
