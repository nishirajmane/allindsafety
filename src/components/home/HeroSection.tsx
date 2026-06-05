"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Phone, Star, Users, Award, Zap } from "lucide-react";
import { Button } from "../ui/Button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-grid-pattern">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Floating Abstract Safety Grid Net Graphics */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="net-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 60 M 0 0 L 60 60" fill="none" stroke="rgba(15, 118, 110, 0.12)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#net-pattern)" />
        </svg>
      </div>

      {/* Floating Animated Web/Safety Circles */}
      <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-24 left-10 w-24 h-24 rounded-full border border-secondary/20 flex items-center justify-center p-4 z-0 pointer-events-none"
      >
        <div className="w-full h-full rounded-full border border-dashed border-primary/30 flex items-center justify-center">
          <Shield className="w-6 h-6 text-secondary" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-24 right-12 w-36 h-36 rounded-full border border-primary/20 flex items-center justify-center p-6 z-0 pointer-events-none"
      >
        <div className="w-full h-full rounded-full border border-dashed border-secondary/35 flex items-center justify-center">
          <Zap className="w-8 h-8 text-primary" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Details */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Top Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold font-heading tracking-wider uppercase bg-primary/10 text-primary border border-secondary/20 mb-6"
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Certified Protection & Premium Materials</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              India's Trusted <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-secondary-light glow-text">
                Safety Net Installation
              </span>{" "}
              Experts
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 font-sans max-w-2xl leading-relaxed mb-8"
            >
              Protecting families, children, pets, and commercial properties with ultra-high strength safety nets, invisible grills, and pigeon barriers across India.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
            >
              <Button href="/contact" size="lg" variant="primary" leftIcon={<Shield className="w-5 h-5" />}>
                Get Free Inspection
              </Button>
              <Button href="tel:+919876543210" size="lg" variant="outline" leftIcon={<Phone className="w-5 h-5" />}>
                Call Now
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200 w-full text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-800 font-heading font-bold text-sm leading-none">10+ Years</span>
                  <span className="text-slate-500 text-xs font-sans mt-0.5 block">Experience</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-800 font-heading font-bold text-sm leading-none">5000+</span>
                  <span className="text-slate-500 text-xs font-sans mt-0.5 block">Installs Done</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-800 font-heading font-bold text-sm leading-none">100%</span>
                  <span className="text-slate-500 text-xs font-sans mt-0.5 block">Safety Focus</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-800 font-heading font-bold text-sm leading-none">Same Day</span>
                  <span className="text-slate-500 text-xs font-sans mt-0.5 block">Free Survey</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Visuals / Image Presentation */}
          <div className="lg:col-span-5 relative z-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-slate-200 shadow-xl p-4 flex flex-col group bg-white"
            >
              {/* Image Grid with Overlay */}
              <div className="relative flex-grow rounded-2xl overflow-hidden mb-4 bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
                  alt="Premium Protected Balcony"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <span className="text-white text-sm font-heading font-bold">Smart Balcony Shield</span>
                    <span className="block text-xs text-slate-300 font-sans mt-0.5">Garware Premium Mesh</span>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-semibold text-emerald-400 uppercase">Verified Safe</span>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Feature Indicator */}
              <div className="flex gap-4 items-center justify-between px-2 py-1">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?q=80&w=100&auto=format&fit=crop`}
                      alt="Customer Avatar"
                      className="w-7 h-7 rounded-full border border-white object-cover"
                    />
                  ))}
                </div>
                <div className="text-right">
                  <div className="flex gap-0.5 justify-end">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 font-sans block mt-0.5">
                    Trusted by 4.9/5 rated 2,400+ residents
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
