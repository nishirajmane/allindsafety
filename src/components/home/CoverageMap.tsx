"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Shield, Users, Clock, CheckCircle } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";

interface CityData {
  id: string;
  name: string;
  installs: string;
  teams: number;
  responseTime: string;
  status: string;
  // Positioning coordinates for the SVG map overlay (0-100 percentage)
  x: number; // Left coordinate %
  y: number; // Top coordinate %
}

const cities: CityData[] = [
  { id: "delhi", name: "Delhi NCR", installs: "900+", teams: 2, responseTime: "3 Hours", status: "Active Hub", x: 42, y: 28 },
  { id: "ahmedabad", name: "Ahmedabad", installs: "500+", teams: 1, responseTime: "4 Hours", status: "Active Hub", x: 26, y: 46 },
  { id: "mumbai", name: "Mumbai", installs: "1,400+", teams: 3, responseTime: "3 Hours", status: "Key Regional Office", x: 28, y: 58 },
  { id: "pune", name: "Pune", installs: "1,800+", teams: 4, responseTime: "2 Hours", status: "Headquarters", x: 33, y: 62 },
  { id: "nagpur", name: "Nagpur", installs: "400+", teams: 1, responseTime: "3 Hours", status: "Active Hub", x: 46, y: 53 },
  { id: "hyderabad", name: "Hyderabad", installs: "800+", teams: 2, responseTime: "3 Hours", status: "Regional Office", x: 45, y: 68 },
  { id: "bangalore", name: "Bangalore", installs: "1,100+", teams: 3, responseTime: "2 Hours", status: "Key Regional Office", x: 42, y: 79 },
  { id: "chennai", name: "Chennai", installs: "600+", teams: 2, responseTime: "4 Hours", status: "Active Hub", x: 49, y: 81 },
];

export const CoverageMap = () => {
  const [selectedCity, setSelectedCity] = useState<CityData>(cities[3]); // Pune as default selected

  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/40 border-y border-slate-200/50">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeader
          badge="National Coverage"
          title="Where We Install Safety"
          subtitle="All India Enterprises operates dedicated consultant and installer crews across major Indian metros, offering rapid on-site inspections."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Map Column (stylized SVG map with radar indicators) */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="relative w-full max-w-[500px] aspect-[4/5] bg-white rounded-3xl border border-slate-200/80 p-8 overflow-hidden select-none shadow-md">
              
              {/* Stylized background India map outline */}
              <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
                <svg className="w-[85%] h-[85%] text-primary" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M 40 10 Q 45 5 50 12 T 55 18 T 60 12 T 65 25 T 72 20 T 80 25 T 85 35 T 88 45 T 75 52 T 70 60 T 68 68 T 60 75 T 55 85 T 50 95 T 51 105 T 48 115 T 45 105 T 42 90 T 38 82 T 40 70 T 33 65 T 25 58 T 18 50 T 25 40 T 32 30 T 35 20 Z" />
                  <path d="M 68 35 L 75 35 L 75 42 Z" />
                </svg>
              </div>

              {/* Grid backdrop inside map container */}
              <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

              {/* Interactive pulsing node hotspots */}
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setSelectedCity(city)}
                  onMouseEnter={() => setSelectedCity(city)}
                  className="absolute cursor-pointer group focus:outline-none transition-transform"
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                >
                  {/* Outer Pulsing Ring */}
                  <div className={`absolute -inset-2 rounded-full animate-ping duration-1000 ${
                    selectedCity.id === city.id ? "bg-secondary/40" : "bg-primary/20 group-hover:bg-primary/30"
                  }`} />
                  
                  {/* Core solid dot */}
                  <div className={`w-3.5 h-3.5 rounded-full border border-white shadow-md transition-all duration-300 ${
                    selectedCity.id === city.id ? "bg-secondary scale-125" : "bg-primary-light group-hover:bg-secondary"
                  }`} />

                  {/* Tiny Label (shows on hover or active) */}
                  <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2 py-0.5 rounded bg-slate-900/95 text-[10px] font-semibold text-white border border-slate-800 shadow-lg pointer-events-none transition-opacity duration-300 ${
                    selectedCity.id === city.id ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                  } whitespace-nowrap z-30`}>
                    {city.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCity.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card glowEffect={true} className="p-8 bg-white border border-slate-200/80 shadow-xl rounded-3xl">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="inline-flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 font-heading text-xs font-semibold px-2 py-0.5 rounded-md mb-2">
                        <CheckCircle className="w-3.5 h-3.5" />
                        {selectedCity.status}
                      </span>
                      <h3 className="font-heading font-extrabold text-3xl text-slate-900">
                        {selectedCity.name}
                      </h3>
                    </div>
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>

                  {/* List details */}
                  <div className="grid grid-cols-1 gap-5 pt-4 border-t border-slate-100">
                    
                    {/* Installs Done */}
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center text-primary shrink-0">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-slate-500 text-xs font-sans">Installations Completed</span>
                        <span className="text-slate-900 font-heading font-bold text-lg leading-none mt-0.5 block">
                          {selectedCity.installs} Families Secured
                        </span>
                      </div>
                    </div>

                    {/* Team Size */}
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center text-primary shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-slate-500 text-xs font-sans">Active On-Site Teams</span>
                        <span className="text-slate-900 font-heading font-bold text-lg leading-none mt-0.5 block">
                          {selectedCity.teams} Certified Crews
                        </span>
                      </div>
                    </div>

                    {/* Response Time */}
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center text-primary shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-slate-500 text-xs font-sans">Site Inspection Response</span>
                        <span className="text-slate-900 font-heading font-bold text-lg leading-none mt-0.5 block">
                          Within {selectedCity.responseTime}
                        </span>
                      </div>
                    </div>

                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
