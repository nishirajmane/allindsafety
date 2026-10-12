"use client";

import { useEffect, useState } from "react";
import { business, whatsappLink } from "@/data/site";

/** Thumb-reach call + WhatsApp, revealed once the visitor scrolls past the first screen. */
export function MobileDock() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearEnd = window.innerHeight + window.scrollY > document.body.scrollHeight - 420;
      setShow(window.scrollY > window.innerHeight * 0.6 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="dock" data-show={show}>
      <a href={`tel:${business.phone}`} tabIndex={show ? 0 : -1}>
        Call
      </a>
      <a
        href={whatsappLink("Hi Allind Safety! I'd like a free site visit.")}
        target="_blank"
        rel="noopener noreferrer"
        className="dock__primary"
        tabIndex={show ? 0 : -1}
      >
        Free visit on WhatsApp
      </a>
    </div>
  );
}
