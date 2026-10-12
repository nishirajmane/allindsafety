"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/** Fine-pointer only: a trailing ring that grows and labels anything with [data-cursor]. */
export function Cursor() {
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ring.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const label = el.querySelector("span")!;
    const x = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3" });
    let current: string | null = null;

    function move(e: PointerEvent) {
      x(e.clientX);
      y(e.clientY);
      el!.dataset.visible = "true";
      const node = e.target as HTMLElement;
      const target = node.closest<HTMLElement>("[data-cursor]");
      const next = target?.dataset.cursor ?? (node.closest("a,button") ? "link" : null);
      if (next !== current) {
        current = next;
        el!.dataset.state = next ? (next === "link" ? "link" : "label") : "";
        label.textContent = next && next !== "link" ? next : "";
      }
    }
    const leave = () => (el.dataset.visible = "false");
    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div ref={ring} className="cursor" aria-hidden="true">
      <span />
    </div>
  );
}
