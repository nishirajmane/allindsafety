"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight, HelpCircle, ArrowRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

interface ComparisonItem {
  id: string;
  name: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImg: string;
  afterImg: string;
  description: string;
}

export const ComparisonSlider = () => {
  const [activeTab, setActiveTab] = useState("balcony");
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const datasets: { [key: string]: ComparisonItem } = {
    balcony: {
      id: "balcony",
      name: "Balcony Safety Net",
      beforeLabel: "Vulnerable Balcony Edge",
      afterLabel: "Secure High-Tension Protection",
      beforeImg: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      description: "Keep pets and children safe from open high-rise balconies. Our nets absorb high-impact falls without restricting visibility or ventilation."
    },
    pigeon: {
      id: "pigeon",
      name: "Pigeon Protection Net",
      beforeLabel: "Roosting & Corrosive Droppings",
      afterLabel: "Hygienic Bird-Free Area",
      beforeImg: "https://images.unsplash.com/photo-1549488344-cbb6c34cf087?q=80&w=800&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
      description: "Get rid of unhygienic bird clutter. We block pigeons and crows humanely with fine-mesh nets, keeping your balcony space fresh and sanitary."
    },
    grill: {
      id: "grill",
      name: "Invisible Grill",
      beforeLabel: "Cluttered Iron Bars",
      afterLabel: "Modern Frameless Security",
      beforeImg: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
      description: "Upgrade from bulky iron grills to marine-grade stainless steel wire systems. Heavy-duty security that blends seamlessly into the horizon."
    }
  };

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  const activeData = datasets[activeTab];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <SectionHeader
          badge="Interactive Preview"
          title="See The Safety Transformation"
          subtitle="Drag the slider to preview our high-fidelity safety net installations. Compare open risks with fully secured spaces."
        />

        {/* Tab Selectors */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10">
          {Object.values(datasets).map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSliderPosition(50); // Reset position
              }}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                activeTab === item.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-secondary/15 border border-transparent"
                  : "bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-sm"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Slider Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-4">
                  {activeData.name} Setup
                </h3>
                <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
                  {activeData.description}
                </p>

                {/* Legend badges */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-2 bg-white border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-xs font-semibold font-sans text-slate-700">Before: {activeData.beforeLabel}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 bg-white border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-semibold font-sans text-slate-700">After: {activeData.afterLabel}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Slider Area */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
                className="relative w-full max-w-[640px] aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-slate-200 select-none cursor-ew-resize group"
              >
                {/* After Image (Background) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeData.afterImg}
                  alt="After Protection"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
                <div className="absolute top-4 right-4 bg-emerald-500/80 backdrop-blur border border-emerald-400/30 text-white font-heading font-bold text-xs px-2.5 py-1 rounded-md shadow-lg pointer-events-none select-none z-20">
                  After Net Setup
                </div>

                {/* Before Image (Overlay clipped by slider position) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none z-10"
                  style={{ width: `${sliderPosition}%` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeData.beforeImg}
                    alt="Before Protection"
                    className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none pointer-events-none"
                    style={{ width: containerRef.current?.getBoundingClientRect().width || 640 }}
                    draggable={false}
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur border border-white/10 text-white font-heading font-bold text-xs px-2.5 py-1 rounded-md shadow-lg pointer-events-none select-none">
                    Before Risk
                  </div>
                </div>

                {/* Slider bar & dragging handle button */}
                <div
                  className="absolute inset-y-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary cursor-ew-resize z-20 shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Drag Handle Ball */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-secondary flex items-center justify-center text-slate-700 shadow-2xl shadow-secondary/20 group-hover:scale-110 active:scale-95 transition-transform">
                    <ArrowLeftRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
