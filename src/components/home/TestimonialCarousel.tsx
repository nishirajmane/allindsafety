"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  review: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rohan Deshmukh",
    city: "Pune",
    rating: 5,
    review: "Installed invisible grills and balcony safety nets for our 12th-floor apartment. The team was extremely professional. They completed the work in 2 hours and cleaned up everything. The view is completely uncompromised!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Priyanka Nair",
    city: "Mumbai",
    rating: 5,
    review: "We were troubled by pigeons nesting in our utility balcony. The pigeon net installed by All India Safety has solved the problem permanently. Very clean installation and prompt response.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Karthik Reddy",
    city: "Bangalore",
    rating: 5,
    review: "Excellent sports net installation for our residential society cricket practice cage. Heavy-duty mesh quality and very sturdy pole setup. Highly recommended for any structural net requirements.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Ananya Sharma",
    city: "Delhi",
    rating: 5,
    review: "Really impressed with the children's safety net installation. With a toddler in the house, safety was my topmost priority. The double anchor joints they used are very reassuring.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Suresh Patel",
    city: "Ahmedabad",
    rating: 5,
    review: "Great customer support and very reasonable pricing. We had monkey intrusion issues, and their heavy-duty monkey safety net has completely resolved it. Sturdy material!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  }
];

export const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoplay) return;
    timeoutRef.current = setTimeout(handleNext, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, autoplay]);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/30 border-y border-slate-200/50">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeader
          badge="Reviews & Feedback"
          title="What Our Customers Say"
          subtitle="Read honest reviews from families and enterprises across India who trust us to secure their living and working spaces."
        />

        {/* Carousel Outer Layout */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          {/* Quote mark backdrop */}
          <Quote className="absolute -top-10 -left-6 md:left-2 w-28 h-28 text-slate-200/40 pointer-events-none z-0" />

          {/* Testimonial Active Display */}
          <div
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            className="relative z-10"
          >
            <Card glowEffect={true} className="p-8 sm:p-12 bg-white border border-slate-200/80 shadow-xl rounded-3xl min-h-[300px] flex flex-col justify-between">
              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Text Review */}
                <p className="text-slate-800 font-sans text-base sm:text-lg lg:text-xl italic leading-relaxed mb-8">
                  &ldquo;{testimonials[activeIndex].review}&rdquo;
                </p>
              </div>

              {/* User Avatar & Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <span className="block text-slate-900 font-heading font-bold text-base leading-none">
                    {testimonials[activeIndex].name}
                  </span>
                  <span className="text-slate-500 text-xs font-sans mt-1.5 block">
                    Verified Customer, {testimonials[activeIndex].city}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-primary transition-all shadow-md hover:scale-105 z-20 cursor-pointer hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-primary transition-all shadow-md hover:scale-105 z-20 cursor-pointer hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? "w-8 bg-primary" : "bg-slate-300 hover:bg-slate-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
