"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Users, Award, Zap } from "lucide-react";
import { servicesData } from "@/data/services";
import { Select } from "@/components/ui/Select";

export const HeroSection = () => {
  const [isIntro, setIsIntro] = useState(true);
  const [quoteText, setQuoteText] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [step, setStep] = useState<"input" | "saved">("input");

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
        {/* Top Layout Grid: Title on Left, Quote Widget on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          {/* Main Title and Description on Left */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
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
            <motion.p
              variants={contentVariants}
              initial="hidden"
              animate={isIntro ? "hidden" : "visible"}
              custom={0.4}
              className="text-slate-500 font-sans text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
            >
              Upgrade to modern invisible grills. Seamless views combined with ultra-high-grade 316 marine-grade stainless steel safety cables to protect your home.
            </motion.p>
          </div>

          {/* WhatsApp Quote widget on Right */}
          <div className="lg:col-span-5 flex flex-col items-start w-full">
            {/* WhatsApp Quote Generator Widget */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={isIntro ? "hidden" : "visible"}
              custom={0.6}
              className="w-full max-w-md z-20"
            >
              <AnimatePresence mode="wait">
                {step === "input" ? (
                  <motion.div
                    key="step-input"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="border border-slate-200 rounded-2xl bg-white shadow-lg p-5 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all flex flex-col gap-4 relative overflow-hidden"
                  >
                    {/* Decorative accent glow */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />

                    <div>
                      <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1 block font-sans">
                        Get instant quotation
                      </span>
                      <h3 className="font-sans font-extrabold text-slate-900 text-lg leading-tight">
                        Describe your requirement
                      </h3>
                    </div>

                    <div className="relative">
                      <textarea
                        value={quoteText}
                        onChange={(e) => setQuoteText(e.target.value)}
                        placeholder="Type your quote request (e.g. Invisible grill for balcony, 10x8ft)..."
                        className="w-full min-h-[90px] p-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary bg-slate-50/50 focus:bg-white font-sans text-sm leading-relaxed transition-all resize-none"
                      />
                    </div>

                    <button
                      onClick={() => {
                        if (quoteText.trim()) {
                          setStep("saved");
                        }
                      }}
                      disabled={!quoteText.trim()}
                      className="bg-primary hover:bg-teal-700 text-white font-sans font-bold text-sm py-3 px-6 rounded-xl flex items-center justify-center transition-all shadow-md shadow-primary/10 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer"
                    >
                      <span>Save Requirement</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step-saved"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="border border-slate-200 rounded-2xl bg-white shadow-lg p-5 flex flex-col gap-4 relative text-left"
                  >
                    {/* Decorative green accent glow */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />

                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-sans">
                      <div className="flex items-center">
                        <span className="text-xs font-bold text-emerald-600">
                          Quote requirement saved!
                        </span>
                      </div>
                      <button
                        onClick={() => setStep("input")}
                        className="text-[11px] font-bold text-slate-500 hover:text-primary transition-colors cursor-pointer"
                      >
                        Edit Text
                      </button>
                    </div>

                    {/* Preview Box */}
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 relative">
                      <p className="text-xs text-slate-600 italic font-sans leading-relaxed break-words">
                        &ldquo;{quoteText}&rdquo;
                      </p>
                    </div>

                    {/* Custom options selection */}
                    <div className="grid grid-cols-2 gap-3 font-sans">
                      {/* Service Option */}
                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Service Type
                        </label>
                        <Select
                          value={selectedService}
                          onValueChange={setSelectedService}
                          placeholder="Select Service..."
                          options={servicesData.map((s) => ({ label: s.title, value: s.title }))}
                        />
                      </div>

                      {/* City Option */}
                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          City
                        </label>
                        <Select
                          value={selectedCity}
                          onValueChange={setSelectedCity}
                          placeholder="Select City..."
                          options={["Pune", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Delhi NCR", "Ahmedabad", "Nagpur"].map(
                            (city) => ({ label: city, value: city })
                          )}
                        />
                      </div>
                    </div>

                    {/* Submit Actions */}
                    <div className="flex flex-col gap-2 pt-2 border-t border-slate-100 font-sans">
                      <a
                        href={`https://wa.me/919876543210?text=${encodeURIComponent(
                          `Hi All India Enterprises! I'd like to request a quote.\n\n*Requirement details:*\n"${quoteText}"\n\n${selectedService ? `*Service:* ${selectedService}\n` : ""
                          }${selectedCity ? `*City:* ${selectedCity}\n` : ""}\nPlease send me the quotation.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary hover:bg-teal-700 text-white font-sans font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center transition-all shadow-md shadow-primary/10 active:scale-[0.98] cursor-pointer"
                      >
                        <span>Submit & Send on WhatsApp</span>
                      </a>

                      <button
                        onClick={() => {
                          setStep("input");
                          setQuoteText("");
                          setSelectedService("");
                          setSelectedCity("");
                        }}
                        className="text-[11px] font-bold text-slate-400 hover:text-slate-600 transition-colors text-center py-1 cursor-pointer"
                      >
                        Reset & Clear
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
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
