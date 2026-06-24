"use client";

import React, { useState } from "react";
import { motion as framerMotion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, MapPin, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface GalleryItem {
  id: number;
  title: string;
  category: "balcony" | "pigeon" | "grills" | "sports";
  categoryLabel: string;
  city: string;
  img: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "18th Floor Balcony Netting",
    category: "balcony",
    categoryLabel: "Balcony Nets",
    city: "Koregaon Park, Pune",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    description: "Fully tensioned translucent balcony nets installed to protect active pets without compromising valley views."
  },
  {
    id: 2,
    title: "Balcony Pigeon Shield",
    category: "pigeon",
    categoryLabel: "Pigeon Nets",
    city: "Kothrud, Pune",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
    description: "High-density knotted bird nets sealing the balcony boundaries completely. Blocks pigeon nesting and bird clutter."
  },
  {
    id: 3,
    title: "Modern Invisible Grill Setup",
    category: "grills",
    categoryLabel: "Invisible Grills",
    city: "Sangamwadi, Pune",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
    description: "316 marine-grade vertical invisible grills. Robust anti-fall safeguard looking completely frameless."
  },
  {
    id: 4,
    title: "Rooftop Cricket Practice Net",
    category: "sports",
    categoryLabel: "Sports Nets",
    city: "Baner, Pune",
    img: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=800&auto=format&fit=crop",
    description: "Multi-layered knotted enclosure cage on building terrace, designed for cricket training and leather ball impacts."
  },
  {
    id: 5,
    title: "Terrace Balcony Safety Guard",
    category: "balcony",
    categoryLabel: "Balcony Nets",
    city: "Viman Nagar, Pune",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
    description: "Child protection safety netting mounted onto glass balustrade balconies for reinforced defense."
  },
  {
    id: 6,
    title: "Corporate Duct Area Netting",
    category: "pigeon",
    categoryLabel: "Pigeon Nets",
    city: "Kharadi, Pune",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
    description: "Deep shaft duct area net installation securing ventilation channels against pigeon clutter and dropping accumulation."
  },
  {
    id: 7,
    title: "Turf Football Boundary Net",
    category: "sports",
    categoryLabel: "Sports Nets",
    city: "Hinjawadi, Pune",
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
    description: "Heavy-duty outdoor perimeter netting setup for private football turf complex. Withstands extreme ball speeds."
  },
  {
    id: 8,
    title: "Low-Profile Invisible Grill Setup",
    category: "grills",
    categoryLabel: "Invisible Grills",
    city: "Hadapsar, Pune",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
    description: "Horizontal grid invisible grills designed to match luxury bedroom window layouts, securing toddlers."
  },
  {
    id: 9,
    title: "Premium Bird Exclusion Mesh",
    category: "pigeon",
    categoryLabel: "Pigeon Nets",
    city: "Aundh, Pune",
    img: "https://images.unsplash.com/photo-1599809275671-b5941cabc7a5?q=80&w=800&auto=format&fit=crop",
    description: "Specialized non-lethal spikes and nets installed on outdoor air conditioning units and ledge boundaries."
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "balcony", label: "Balcony Nets" },
    { id: "pigeon", label: "Pigeon Nets" },
    { id: "grills", label: "Invisible Grills" },
    { id: "sports", label: "Sports & Cricket Nets" }
  ];

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="py-16 md:py-24 bg-grid-pattern min-h-screen">
      {/* Radial glows */}
      <div className="absolute top-44 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-44 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeader
          badge="Portfolio Gallery"
          title="Our Premium Installations"
          subtitle="Browse high-resolution photographs of our real-life safety net installations in Pune, including commercial turfs, homes, and high-rise apartments."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-heading font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                filter === cat.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-secondary/15 border border-transparent"
                  : "bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <framerMotion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <framerMotion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <Card
                  glowEffect={true}
                  onClick={() => setLightboxItem(item)}
                  className="flex flex-col h-full overflow-hidden p-4 bg-white border border-slate-200 hover:border-secondary/25 transition-all duration-300 relative group shadow-sm"
                >
                  {/* Image Container with Zoom effect */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 border border-slate-200 shadow-lg">
                        <ZoomIn className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    {/* Category badge */}
                    <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur border border-slate-700 text-white font-heading font-semibold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Text Description */}
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 text-slate-500 font-sans text-xs shrink-0 mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.city}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </framerMotion.div>
            ))}
          </AnimatePresence>
        </framerMotion.div>

        {/* Lightbox Overlay Modal */}
        <AnimatePresence>
          {lightboxItem && (
            <framerMotion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            >
              <framerMotion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 20 }}
                className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-6 sm:p-8 flex flex-col md:grid md:grid-cols-12 gap-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Side: Photo */}
                <div className="md:col-span-7 rounded-2xl overflow-hidden bg-slate-100 relative aspect-[4/3] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={lightboxItem.img}
                    alt={lightboxItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Side: details & CTA */}
                <div className="md:col-span-5 flex flex-col justify-between text-left">
                  <div>
                    <span className="inline-block bg-primary/10 border border-secondary/20 text-primary text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider mb-3 font-heading">
                      {lightboxItem.categoryLabel}
                    </span>
                    <h3 className="font-heading font-extrabold text-slate-900 text-2xl mb-4">
                      {lightboxItem.title}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-slate-500 font-sans text-xs mb-6">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Location: {lightboxItem.city}, India</span>
                    </div>

                    <p className="text-slate-600 font-sans text-sm leading-relaxed mb-6">
                      {lightboxItem.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 pt-6 border-t border-slate-100">
                    <Button href="/contact" variant="primary" size="sm" className="w-full" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Request Same Quote
                    </Button>
                    <button
                      onClick={() => setLightboxItem(null)}
                      className="font-heading text-xs font-semibold text-slate-500 hover:text-slate-800 uppercase tracking-wider py-2 transition-colors cursor-pointer"
                    >
                      Return to Gallery
                    </button>
                  </div>
                </div>
              </framerMotion.div>
            </framerMotion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
