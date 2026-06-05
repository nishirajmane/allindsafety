"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { servicesData, getServiceIcon } from "@/data/services";

export const ServicesSection = () => {
  // Take the first 8 services as specified in the homepage services list
  const displayServices = servicesData.slice(0, 8);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 14,
      },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeader
          badge="Protective Offerings"
          title="Safety Solutions For Every Space"
          subtitle="Explore our range of premium structural nets and barriers engineered to shield high-rises, spaces, playgrounds, and workplaces."
        />

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {displayServices.map((service) => {
            const IconComponent = getServiceIcon(service.iconName);
            return (
              <motion.div key={service.id} variants={itemVariants} className="h-full">
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <Card
                    glowEffect={true}
                    className="flex flex-col justify-between h-full p-6 border border-slate-200/80 bg-white hover:bg-white transition-all duration-300 relative shadow-sm"
                  >
                    {/* Glowing highlight in the corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secondary/5 to-transparent rounded-tr-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex flex-col gap-5">
                      {/* Service Icon with Gradient Background */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-secondary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-primary transition-colors duration-300 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 font-sans text-sm leading-relaxed line-clamp-3">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Footer link in card */}
                    <div className="flex items-center gap-1 text-xs font-bold text-primary tracking-wide uppercase mt-6 group-hover:gap-2 transition-all duration-300">
                      <span>Explore Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <div className="flex justify-center items-center">
          <Button href="/contact" variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Request Customized Site Inspection
          </Button>
        </div>
      </div>
    </section>
  );
};
