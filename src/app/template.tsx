"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    __allindHydrated?: boolean;
  }
}

// The first render (server HTML + hydration) is covered by the preloader; only
// client-side navigations get the curtain. The flag is set after the first commit,
// so hydration retries still render exactly what the server sent.
export default function Template({ children }: { children: ReactNode }) {
  const [navigated] = useState(() => typeof window !== "undefined" && window.__allindHydrated === true);

  useEffect(() => {
    window.__allindHydrated = true;
  }, []);

  if (!navigated) return <>{children}</>;

  return (
    <>
      <motion.div
        className="curtain"
        aria-hidden="true"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
      >
        <span className="curtain__word">Allind</span>
      </motion.div>
      {/* Opacity only: a transform here would break GSAP pinning inside the page. */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}>
        {children}
      </motion.div>
    </>
  );
}
