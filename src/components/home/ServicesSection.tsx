"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { servicesData } from "@/data/services";

export const ServicesSection = () => {
  const [showAll, setShowAll] = React.useState(false);

  // Take first 5 services or all 12 depending on state
  const displayServices = showAll ? servicesData : servicesData.slice(0, 5);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  // Bento grid configurations for 12 items.
  // We configure layout mapping for each item index (desktop 3-column, tablet 2-column, and mobile 1-column).
  const bentoLayouts = [
    {
      // Index 0: Balcony Safety Nets (1 col)
      span: "lg:col-span-1 md:col-span-1 col-span-1",
      height: "h-[320px] sm:h-[350px] lg:h-[380px]",
    },
    {
      // Index 1: Pigeon Safety Nets (1 col)
      span: "lg:col-span-1 md:col-span-1 col-span-1",
      height: "h-[320px] sm:h-[350px] lg:h-[380px]",
    },
    {
      // Index 2: Invisible Grills (1 col)
      span: "lg:col-span-1 md:col-span-1 col-span-1",
      height: "h-[320px] sm:h-[350px] lg:h-[380px]",
    },
    {
      // Index 3: Children Safety Nets (2 cols on desktop/tablet)
      span: "lg:col-span-2 md:col-span-2 col-span-1",
      height: "h-[320px] sm:h-[350px] lg:h-[380px]",
    },
    {
      // Index 4: Monkey Safety Nets (1 col)
      span: "lg:col-span-1 md:col-span-1 col-span-1",
      height: "h-[320px] sm:h-[350px] lg:h-[380px]",
    },
    {
      // Index 5: Construction Safety Nets (1 col)
      span: "lg:col-span-1 md:col-span-1 col-span-1",
      height: "h-[320px] sm:h-[350px] lg:h-[380px]",
    },
    {
      // Index 6: Sports Nets (2 cols on desktop/tablet)
      span: "lg:col-span-2 md:col-span-2 col-span-1",
      height: "h-[320px] sm:h-[350px] lg:h-[380px]",
    },
    {
      // Index 7: Bird Spikes (3 cols on desktop, 2 cols on tablet)
      span: "lg:col-span-3 md:col-span-2 col-span-1",
      height: "h-[320px] sm:h-[350px] lg:h-[380px]",
    },
    {
      // Index 8: Bird Protection Nets (1 col)
      span: "lg:col-span-1 md:col-span-1 col-span-1",
      height: "h-[320px] sm:h-[350px] lg:h-[380px]",
    },
    {
      // Index 9: Cricket Nets (1 col)
      span: "lg:col-span-1 md:col-span-1 col-span-1",
      height: "h-[320px] sm:h-[350px] lg:h-[380px]",
    },
    {
      // Index 10: Duct Area Safety Nets (1 col)
      span: "lg:col-span-1 md:col-span-1 col-span-1",
      height: "h-[320px] sm:h-[350px] lg:h-[380px]",
    },
    {
      // Index 11: Industrial Safety Nets (3 cols on desktop, 2 cols on tablet)
      span: "lg:col-span-3 md:col-span-2 col-span-1",
      height: "h-[320px] sm:h-[350px] lg:h-[380px]",
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
          key={showAll ? "all" : "short"}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {displayServices.map((service, idx) => {
            const layout = bentoLayouts[idx] || {
              span: "col-span-1",
              height: "h-[320px] lg:h-[380px]",
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
                    className="relative w-full h-full min-h-[160px] sm:min-h-[190px] lg:min-h-[200px] rounded-t-xl border-t border-x border-slate-100 bg-slate-50 overflow-hidden shadow-[0_-4px_20px_rgba(0,0,0,0.03)] transition-transform duration-500 ease-out group-hover:-translate-y-1 block"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.beforeAfterImage.after}
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

        {/* Toggle Show More/Less Button */}
        <div className="flex justify-center items-center mb-10">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="secondary"
            rightIcon={showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            className="min-w-[160px]"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>

        {/* View All CTA */}
      </div>
    </section>
  );
};
