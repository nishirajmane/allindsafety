"use client";

import React, { useState, useEffect } from "react";
import { motion as framerMotion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface GalleryItem {
  id: number;
  img: string;
  span: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, img: "/gallery/WhatsApp Image 2026-06-20 at 11.16.36 (1).jpeg", span: "md:col-span-2 md:row-span-1" },
  { id: 2, img: "/gallery/WhatsApp Image 2026-06-20 at 11.16.36.jpeg", span: "md:col-span-2 md:row-span-2" },
  { id: 3, img: "/gallery/WhatsApp Image 2026-06-20 at 11.16.37 (1).jpeg", span: "md:col-span-1 md:row-span-1" },
  { id: 4, img: "/gallery/WhatsApp Image 2026-06-20 at 11.16.37 (2).jpeg", span: "md:col-span-1 md:row-span-1" },
  { id: 5, img: "/gallery/WhatsApp Image 2026-06-20 at 11.16.37.jpeg", span: "md:col-span-1 md:row-span-2" },
  { id: 6, img: "/gallery/WhatsApp Image 2026-06-20 at 11.16.38 (1).jpeg", span: "md:col-span-2 md:row-span-1" },
  { id: 7, img: "/gallery/WhatsApp Image 2026-06-20 at 11.16.38.jpeg", span: "md:col-span-1 md:row-span-1" },
  { id: 8, img: "/gallery/WhatsApp Image 2026-06-20 at 11.16.46.jpeg", span: "md:col-span-1 md:row-span-1" },
  { id: 9, img: "/gallery/WhatsApp Image 2026-06-20 at 11.16.47 (1).jpeg", span: "md:col-span-2 md:row-span-2" },
  { id: 10, img: "/gallery/WhatsApp Image 2026-06-20 at 11.16.47.jpeg", span: "md:col-span-1 md:row-span-1" },
  { id: 11, img: "/gallery/WhatsApp Image 2026-06-20 at 11.18.29 (1).jpeg", span: "md:col-span-1 md:row-span-1" },
  { id: 12, img: "/gallery/WhatsApp Image 2026-06-20 at 11.18.32.jpeg", span: "md:col-span-2 md:row-span-1" },
  { id: 13, img: "/gallery/WhatsApp Image 2026-06-20 at 11.18.40.jpeg", span: "md:col-span-2 md:row-span-1" }
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
  };

  return (
    <div className="py-16 md:py-24 bg-grid-pattern min-h-screen relative overflow-hidden">
      {/* Radial glows */}
      <div className="absolute top-44 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-44 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeader
          badge="Portfolio Gallery"
          title="Our Premium Installations"
          subtitle="Browse high-resolution photographs of our real-life safety net installations, including commercial turfs, homes, and high-rise apartments."
        />

        {/* Gallery Bento Grid */}
        <framerMotion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 grid-flow-dense auto-rows-[250px]"
        >
          {galleryItems.map((item, index) => (
            <framerMotion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer border border-slate-200/60 bg-slate-100 shadow-sm ${item.span}`}
              onClick={() => setLightboxIndex(index)}
            >
              {/* Image element */}
              <img
                src={item.img}
                alt={`Safety net installation ${item.id}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                  <ZoomIn className="w-5 h-5 text-primary" />
                </div>
              </div>
            </framerMotion.div>
          ))}
        </framerMotion.div>

        {/* Lightbox Overlay Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <framerMotion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Container */}
              <framerMotion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-5xl max-h-[85vh] w-auto h-auto mx-4 overflow-hidden rounded-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryItems[lightboxIndex].img}
                  alt={`Safety net installation ${galleryItems[lightboxIndex].id}`}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                
                {/* Image counter at bottom */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full text-white/80 font-sans text-xs border border-white/10">
                  {lightboxIndex + 1} / {galleryItems.length}
                </div>
              </framerMotion.div>
            </framerMotion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
