"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { servicesData } from "@/data/services";

export const ServicesSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Bento grid layout for exactly 6 services:
  // Row 1: [2-col wide] [1-col]
  // Row 2: [1-col] [2-col wide]
  // This creates a visually balanced asymmetric bento layout.
  const bentoLayouts = [
    {
      // Index 0: Balcony Safety Nets — hero card, 2 cols wide
      span: "lg:col-span-2 md:col-span-2 col-span-1",
      height: "h-[340px] sm:h-[370px] lg:h-[420px]",
    },
    {
      // Index 1: Pigeon Safety Nets — 1 col
      span: "lg:col-span-1 md:col-span-1 col-span-1",
      height: "h-[340px] sm:h-[370px] lg:h-[420px]",
    },
    {
      // Index 2: Invisible Grills — 1 col
      span: "lg:col-span-1 md:col-span-1 col-span-1",
      height: "h-[340px] sm:h-[370px] lg:h-[420px]",
    },
    {
      // Index 3: Children Safety Nets — 2 cols wide
      span: "lg:col-span-2 md:col-span-2 col-span-1",
      height: "h-[340px] sm:h-[370px] lg:h-[420px]",
    },
    {
      // Index 4: Monkey Safety Nets — full 3 cols wide, shorter height
      span: "lg:col-span-2 md:col-span-1 col-span-1",
      height: "h-[340px] sm:h-[370px] lg:h-[400px]",
    },
    {
      // Index 5: Bird Spikes — 1 col
      span: "lg:col-span-1 md:col-span-1 col-span-1",
      height: "h-[340px] sm:h-[370px] lg:h-[400px]",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-50">
      {/* Subtle backdrop highlight */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-none px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Heading */}
        <SectionHeader
          badge="Protective Offerings"
          title="Safety Solutions For Every Space"
          subtitle="Explore our range of premium structural nets and barriers engineered to shield high-rises, spaces, playgrounds, and workplaces."
        />

        {/* Bento Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {servicesData.map((service, idx) => {
            const layout = bentoLayouts[idx] || {
              span: "col-span-1",
              height: "h-[340px] lg:h-[420px]",
            };

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`${layout.span} ${layout.height} relative group rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:border-slate-350 flex flex-col justify-between text-left`}
              >
                {/* Text Content at the Top */}
                <div className="p-6 pb-0 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    {/* Glassmorphic category label */}
                    <span className="text-[10px] font-bold text-secondary tracking-widest uppercase font-sans">
                      {service.title.split(" ")[0]}
                    </span>
                    {/* Small chevron link */}
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-secondary group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-2 group-hover:text-secondary transition-colors duration-300">
                    <Link href={`/services/${service.slug}`} className="hover:underline">
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 font-sans text-xs leading-relaxed line-clamp-2 max-w-xl">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Image container at the Bottom, cropped by rounded bottom corners */}
                <div className="relative w-full mt-4 flex-grow flex items-end justify-center px-6 overflow-hidden">
                  <Link
                    href={`/services/${service.slug}`}
                    className="relative w-full h-full min-h-[160px] sm:min-h-[200px] lg:min-h-[220px] rounded-t-xl border-t border-x border-slate-100 bg-slate-50 overflow-hidden shadow-[0_-4px_20px_rgba(0,0,0,0.03)] transition-transform duration-500 ease-out group-hover:-translate-y-1 block"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                    />
                    {/* Soft white overlay gradient on top edge of image */}
                    <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none opacity-40" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
