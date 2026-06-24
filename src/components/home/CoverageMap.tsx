"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Shield, Users, Clock, CheckCircle } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Map, MapTileLayer, MapMarker } from "../ui/map";
import type { LatLngExpression } from "leaflet";

interface CityData {
  id: string;
  name: string;
  installs: string;
  teams: number;
  responseTime: string;
  status: string;
  coordinates: [number, number];
}

const cities: CityData[] = [
  { id: "pune", name: "Sangamwadi, Pune", installs: "1,800+", teams: 4, responseTime: "2 Hours", status: "Base Location", coordinates: [18.5391, 73.8769] },
];

export const CoverageMap = () => {
  const [selectedCity, setSelectedCity] = useState<CityData>(cities[0]); // Pune as default selected

  return (
    <section className="py-24 relative overflow-hidden bg-slate-100/40 border-y border-slate-200/50">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeader
          badge="Our Service Location"
          title="Where We Install Safety"
          subtitle="All India Safety operates dedicated consultant and installer crews in Pune, offering rapid on-site inspections from our base in Sangamwadi."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Map Column (real Leaflet Map with Google Maps Tiles) */}
          <div className="lg:col-span-7 flex justify-center w-full z-20">
            <div className="relative w-full max-w-[500px] aspect-[4/5] bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-md min-h-[400px]">
              <Map center={[18.5391, 73.8769]} zoom={15} className="w-full h-full">
                <MapTileLayer />
                {cities.map((city) => (
                  <MapMarker
                    key={city.id}
                    position={city.coordinates as LatLngExpression}
                    onClick={() => setSelectedCity(city)}
                    title={city.name}
                  />
                ))}
              </Map>
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
