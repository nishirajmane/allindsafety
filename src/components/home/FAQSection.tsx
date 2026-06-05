"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What safety net is best for balconies?",
    answer: "Copolymer nylon or High-Density Polyethylene (HDPE) nets are best for balconies. They provide high tensile breakage capacity, built-in UV resistance, and translucent options that maintain views. For most apartment balconies, we recommend our 0.8mm translucent nylon nets.",
  },
  {
    question: "How long does the installation take?",
    answer: "A standard apartment balcony installation takes approximately 1.5 to 2.5 hours. Our team carries all the necessary anchoring machinery, performs precise hole drillings, mounts stainless steel anchors, stretches the net under optimal tension, and cleans the site on the same day.",
  },
  {
    question: "Are your nets UV resistant and weatherproof?",
    answer: "Yes, absolutely. All our nets are manufactured with embedded UV-stabilizers. They are specifically engineered to endure extreme weather conditions, including harsh monsoon rain and scorching hot summer sunlight, without rotting, losing color, or weakening in tension.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Yes, we provide 3 to 7 years of written warranty depending on the chosen material thickness and mesh grade. This warranty covers both material degradation due to sunlight/rain and any loose anchoring joints under standard usage.",
  },
  {
    question: "How much does the safety net installation cost?",
    answer: "Our prices are highly competitive and are calculated based on the square footage of the site. Rates generally start from ₹15 to ₹35 per square foot. We offer a 100% Free Site Inspection where we measure the dimensions and provide a transparent, upfront quote.",
  },
  {
    question: "Can these safety nets withstand heavy loads?",
    answer: "Yes. Our standard balcony and child safety nets are tested to withstand breakout loads of up to 120kg to 160kg per knot. This makes them fully capable of catching and stopping active pets, falling toddlers, or adults who slip against the boundary.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Schema.org FAQ JSON-LD markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Inject FAQ JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background glow blob */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeader
          badge="FAQs"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our safety net installation process, durability, pricing, and warranty details."
        />

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-secondary/40 shadow-lg shadow-slate-100/50"
                    : "bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180 border-secondary/30 text-primary" : "text-slate-500"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 font-sans text-sm sm:text-base leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
