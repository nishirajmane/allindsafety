"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <div className="faq__item" key={item.question} data-open={isOpen || undefined}>
            <h3>
              <button aria-expanded={isOpen} aria-controls={id} onClick={() => setOpen(isOpen ? null : i)}>
                <span className="mono faq__idx">0{i + 1}</span>
                <span className="faq__q">{item.question}</span>
                <span className="faq__icon" aria-hidden="true" />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={id}
                  className="faq__a"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
