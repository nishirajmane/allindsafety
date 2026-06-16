"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Shield, Users, Award, Zap } from "lucide-react";

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    // Lock body scroll and set intro active class on mount
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("intro-active");

    const timer = setTimeout(() => {
      setIsIntro(false);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("intro-active");
    }, 1200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.documentElement.classList.remove("intro-active");
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/gallery?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: customDelay,
      },
    }),
  };

  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-24 bg-white overflow-hidden">
      {/* Decorative subtle background highlights */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Layout Grid: Title and Search Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 md:mb-16">
          {/* Main Title on Left */}
          <div className="lg:col-span-7">
            <motion.h1
              variants={contentVariants}
              initial="hidden"
              animate={isIntro ? "hidden" : "visible"}
              custom={0.2}
              className="text-[44px] sm:text-[68px] md:text-[84px] lg:text-[88px] xl:text-[98px] font-black font-heading text-slate-950 leading-[0.9] tracking-tighter"
            >
              Find Your <br />
              Perfect Grill
            </motion.h1>
          </div>

          {/* Description and Search Bar on Right */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <motion.p
              variants={contentVariants}
              initial="hidden"
              animate={isIntro ? "hidden" : "visible"}
              custom={0.4}
              className="text-slate-500 font-sans text-sm sm:text-base md:text-lg mb-8 leading-relaxed max-w-md"
            >
              Upgrade to modern invisible grills. Seamless views combined with ultra-high-grade 316 marine-grade stainless steel safety cables to protect your home.
            </motion.p>

            {/* Location / Service Search bar */}
            <motion.form
              onSubmit={handleSearch}
              variants={contentVariants}
              initial="hidden"
              animate={isIntro ? "hidden" : "visible"}
              custom={0.6}
              className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all w-full max-w-md"
            >
              <div className="pl-4 text-slate-400 shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter country, city or region"
                className="w-full py-4 px-3 text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent font-sans"
              />
              <button
                type="submit"
                className="bg-slate-950 hover:bg-slate-800 text-white p-4.5 flex items-center justify-center transition-colors duration-300 group shrink-0 cursor-pointer"
                aria-label="Search location"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
          </div>
        </div>

        {/* Large Wide Bottom Image Container (Preserving aspect slot to avoid layout shifts) */}
        <div className="w-full aspect-[16/9] md:aspect-[21/9] relative">
          <motion.div
            layout
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className={
              isIntro
                ? "fixed inset-0 z-[55] w-screen h-screen rounded-none bg-slate-50 overflow-hidden pointer-events-none"
                : "absolute inset-0 overflow-hidden rounded-2xl md:rounded-[32px] border border-slate-100 shadow-xl group bg-slate-50 z-0"
            }
          >
            {/* 
              EDIT IMAGE HERE:
              Change the src path below to your custom image (e.g. /images/your-hero-image.jpg)
            */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-image.png"
              alt="Premium modern balcony and invisible grill safety installation"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />
            {/* Subtle gradient overlay to ground the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isIntro ? "hidden" : "visible"}
          custom={0.8}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 mt-12 border-t border-slate-100 w-full text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center text-primary shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-slate-800 font-heading font-bold text-sm leading-none">10+ Years</span>
              <span className="text-slate-500 text-xs font-sans mt-0.5 block">Experience</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center text-primary shadow-sm">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-slate-800 font-heading font-bold text-sm leading-none">5000+</span>
              <span className="text-slate-500 text-xs font-sans mt-0.5 block">Installs Done</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center text-primary shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-slate-800 font-heading font-bold text-sm leading-none">100%</span>
              <span className="text-slate-500 text-xs font-sans mt-0.5 block">Safety Focus</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center text-primary shadow-sm">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-slate-800 font-heading font-bold text-sm leading-none">Same Day</span>
              <span className="text-slate-500 text-xs font-sans mt-0.5 block">Free Survey</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
