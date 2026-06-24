"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  Sun,
  ShieldAlert,
  CirclePercent,
  Zap,
  HeartHandshake,
  Users2,
  ActivitySquare
} from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

export const WhyChooseUs = () => {
  const features = [
    {
      title: "Certified Installers",
      description: "Our installation crew is thoroughly trained, insured, and certified for high-altitude rigging.",
      icon: UserCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-500/10",
    },
    {
      title: "UV Resistant Materials",
      description: "Nets are manufactured with built-in UV stabilizers to endure heavy tropical sunlight without degrading.",
      icon: Sun,
      color: "text-amber-600",
      bg: "bg-amber-500/10",
    },
    {
      title: "High Strength Nets",
      description: "Sourced from top manufacturers like Garware, tested to support high dynamic impact weights.",
      icon: ShieldAlert,
      color: "text-cyan-600",
      bg: "bg-cyan-500/10",
    },
    {
      title: "Affordable Pricing",
      description: "Get industrial-grade protective quality at competitive rates with transparent, itemized quotes.",
      icon: CirclePercent,
      color: "text-indigo-600",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Fast Installation",
      description: "Efficient team setups allow us to secure a standard residential balcony in under 2 hours.",
      icon: Zap,
      color: "text-rose-600",
      bg: "bg-rose-500/10",
    },
    {
      title: "Warranty Support",
      description: "Receive up to 5-7 years written warranty on materials and physical installation anchor joints.",
      icon: HeartHandshake,
      color: "text-teal-600",
      bg: "bg-teal-500/10",
    },
    {
      title: "Professional Team",
      description: "Punctual, safety-compliant consultants who perform free, clean inspections without mess.",
      icon: Users2,
      color: "text-blue-600",
      bg: "bg-blue-500/10",
    },
    {
      title: "Safety Compliance",
      description: "All products meet international quality standards and high-rise structural safety regulations.",
      icon: ActivitySquare,
      color: "text-purple-600",
      bg: "bg-purple-500/10",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/30 border-y border-slate-200/60 bg-grid-pattern">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeader
          badge="Our Excellence"
          title="Engineered For Absolute Trust"
          subtitle="Discover why thousands of households, residential societies, and construction sites choose All India Safety."
        />

        {/* Feature Grid (4x2 layout) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card
                  glowEffect={true}
                  className="flex flex-col gap-4 p-6 h-full hover:bg-white hover:-translate-y-1 transition-all duration-300 border border-slate-200/80 bg-white shadow-sm"
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg ${feature.bg} flex items-center justify-center ${feature.color} border border-slate-200/50`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
