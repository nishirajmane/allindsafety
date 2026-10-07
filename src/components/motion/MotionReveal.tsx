"use client";
import { useRef, type ReactNode } from "react";
import { m, useAnimationControls, useReducedMotion } from "framer-motion";

export function MotionReveal({ children, className, delay = 0, hover = false }: { children: ReactNode; className?: string; delay?: number; hover?: boolean }) {
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();
  const played = useRef(false);
  return <m.div
    className={className}
    initial={false}
    animate={controls}
    viewport={{ once: true, amount: 0.12 }}
    onViewportEnter={() => {
      if (played.current || reduceMotion) return;
      played.current = true;
      void controls.start({ opacity: [0.7, 1], y: [18, 0], transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } });
    }}
    whileHover={hover && !reduceMotion ? { y: -5, transition: { type: "spring", stiffness: 260, damping: 22 } } : undefined}
    whileTap={hover && !reduceMotion ? { scale: 0.985 } : undefined}
  >{children}</m.div>;
}
