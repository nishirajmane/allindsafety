"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Award, Smile, Clock } from "lucide-react";
import { Card } from "../ui/Card";

export const TrustSection = () => {
  const metrics = [
    {
      value: "10+",
      label: "Years Experience",
      description: "Proven track record in high-rise and residential projects.",
      icon: Award,
      color: "from-teal-500/10 to-emerald-500/10 border-teal-500/10",
      iconColor: "text-teal-600",
    },
    {
      value: "5000+",
      label: "Installations",
      description: "Balconies, ducts, playgrounds, and industrial spaces secured.",
      icon: Smile,
      color: "from-cyan-500/10 to-blue-500/10 border-cyan-500/10",
      iconColor: "text-cyan-600",
    },
    {
      value: "100%",
      label: "Safety Focus",
      description: "We use only certified UV-resistant high-tension nylon nets.",
      icon: ShieldAlert,
      color: "from-amber-500/10 to-orange-500/10 border-amber-500/10",
      iconColor: "text-amber-600",
    },
    {
      value: "24/7",
      label: "Customer Support",
      description: "Prompt service coordination and warranty issue assistance.",
      icon: Clock,
      color: "from-indigo-500/10 to-purple-500/10 border-indigo-500/10",
      iconColor: "text-indigo-600",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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

  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/40 border-y border-slate-200/50">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card glowEffect={true} className="flex flex-col h-full justify-between group bg-white border border-slate-200/80 shadow-sm">
                  <div className="flex flex-col gap-6">
                    {/* Metric Icon Container */}
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center border shadow-sm`}
                    >
                      <Icon className={`w-6 h-6 ${metric.iconColor}`} />
                    </div>

                    {/* Metric Values */}
                    <div>
                      <span className="block text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-none group-hover:scale-105 transition-transform duration-300 origin-left">
                        {metric.value}
                      </span>
                      <span className="block text-lg font-heading font-bold text-slate-800 mt-2">
                        {metric.label}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 font-sans text-sm mt-4 leading-relaxed">
                    {metric.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
