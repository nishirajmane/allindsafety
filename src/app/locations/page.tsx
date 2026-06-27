import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight, ShieldCheck, Phone } from "lucide-react";
import { locationsData } from "@/data/locations";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Safety Net Installation Locations in Pune | Allind Safety",
  description: "Allind Safety provides professional safety net installation, pigeon nets, and invisible grills across all major areas in Pune including Baner, Wakad, Kothrud, Kharadi, Hinjewadi, and more.",
};

export default function LocationsIndexPage() {
  return (
    <div className="py-16 md:py-24 bg-grid-pattern min-h-screen">
      {/* Glow Shapes */}
      <div className="absolute top-44 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-44 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs for SEO */}
        <nav className="flex mb-8 text-sm text-slate-500 font-sans" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="hover:text-slate-800 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2.5 text-slate-400">/</span>
                <span className="text-slate-800 font-medium">Locations</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Section Header */}
        <SectionHeader
          badge="Our Service Locations"
          title="Areas We Serve in Pune & PCMC"
          subtitle="We operate dedicated consultant and installer crews across the Pune metropolitan area. Click on a locality below to find specific services, local pricing, and custom safety solutions."
        />

        {/* Grid of Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {locationsData.map((loc) => (
            <Link key={loc.id} href={`/locations/${loc.slug}`} className="block group cursor-pointer">
              <Card
                glowEffect={true}
                className="p-6 h-full flex flex-col justify-between bg-white border border-slate-200/80 group-hover:border-primary/40 group-hover:shadow-md transition-all duration-300 rounded-3xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-semibold text-slate-400 font-sans tracking-wide">
                      PIN: {loc.postalCode}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-primary transition-colors mb-3">
                    {loc.name}
                  </h3>

                  <p className="text-slate-600 font-sans text-sm line-clamp-3 leading-relaxed mb-6">
                    {loc.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold text-primary font-heading uppercase tracking-wider">
                  <span>Explore Local Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Local trust banner */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <h2 className="text-2xl font-heading font-extrabold text-slate-900 flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" />
              Not in our listed locations?
            </h2>
            <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
              Don&apos;t worry! We cover the entire Pune metropolitan area, Pimpri-Chinchwad, and neighboring areas. Contact us directly to confirm availability and schedule a free inspection.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <a
              href="tel:+919797974476"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-teal-700 text-white font-heading font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/10 cursor-pointer"
            >
              <Phone className="w-4 h-4 animate-pulse" />
              Call Support
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer border border-slate-200/50"
            >
              Book Inspection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
