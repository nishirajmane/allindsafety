"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Phone, Mail, MapPin, MessageCircle, ArrowUp } from "lucide-react";
import { servicesData } from "@/data/services";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-20 pb-10 relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-slate-900 tracking-tight leading-none">
                  ALL INDIA
                </span>
                <span className="text-[10px] text-primary font-heading font-bold tracking-widest uppercase mt-0.5">
                  Enterprises
                </span>
              </div>
            </Link>
            <p className="text-slate-600 font-sans text-sm leading-relaxed">
              India&apos;s premier protective net installations. We secure balconies, windows, and sports grounds using high-tensile, UV-stabilized materials for absolute safety.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/share/17ZmeJT6TC/",
                  icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/allindsafety?igsh=bzg3djZqZ2x0anBn",
                  icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  name: "WhatsApp",
                  href: "https://wa.me/qr/J32LE5VM3UZPP1",
                  icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <MessageCircle {...props} />
                  ),
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white hover:bg-primary/10 border border-slate-200 hover:border-primary/30 flex items-center justify-center text-slate-500 hover:text-primary transition-all duration-300 shadow-sm"
                  >
                    <span className="sr-only">{social.name}</span>
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links to Services */}
          <div>
            <h3 className="font-heading font-bold text-slate-800 text-sm tracking-wider uppercase mb-6">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-sans text-sm text-slate-600 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-bold text-slate-800 text-sm tracking-wider uppercase mb-6">
              Company Info
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about" className="font-sans text-sm text-slate-600 hover:text-primary transition-colors">
                  About Our Journey
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="font-sans text-sm text-slate-600 hover:text-primary transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-sans text-sm text-slate-600 hover:text-primary transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact#faq" className="font-sans text-sm text-slate-600 hover:text-primary transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading font-bold text-slate-800 text-sm tracking-wider uppercase mb-6">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-slate-600 leading-relaxed">
                  Head Office: Sector 5, Koregaon Park, Pune, Maharashtra - 411001
                </span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex gap-3 items-center group font-sans text-sm text-slate-600 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="group-hover:underline">+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@allindiaenterprises.com"
                  className="flex gap-3 items-center group font-sans text-sm text-slate-600 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="group-hover:underline">info@allindiaenterprises.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-slate-500">
            &copy; {currentYear} All India Enterprises. All rights reserved. Designed to clean visual standards.
          </p>
          <div className="flex gap-6 text-xs text-slate-500 font-sans">
            <Link href="/privacy" className="hover:text-slate-700">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-700">Terms of Service</Link>
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1 hover:text-slate-700 focus:outline-none cursor-pointer"
            >
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Chat CTA */}
        <a
          href="https://wa.me/qr/J32LE5VM3UZPP1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-2xl flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95 group relative cursor-pointer"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-3 bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </footer>
  );
};
