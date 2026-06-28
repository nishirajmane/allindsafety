"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { servicesData } from "@/data/services";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setIsOpen(false);
    });
    return () => cancelAnimationFrame(handle);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
  ];

  // We show top 8 services in dropdown
  const dropdownServices = servicesData.slice(0, 8);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-4 shadow-lg shadow-slate-100/50"
            : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo / Brand Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Allind Safety Logo"
                className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl md:text-2xl text-slate-900 tracking-tight leading-none">
                  ALLIND
                </span>
                <span className="text-[10px] text-primary font-heading font-bold tracking-widest uppercase mt-0.5">
                  Safety
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className={`font-sans text-sm font-semibold transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-slate-600"
                  }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-1 font-sans text-sm font-semibold transition-colors hover:text-primary cursor-pointer ${pathname.startsWith("/services") ? "text-primary" : "text-slate-600"
                    }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-xl bg-white border border-slate-200/80 p-2 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="grid grid-cols-1 gap-1">
                    {dropdownServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-center px-4 py-2.5 rounded-lg text-sm text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className={`font-sans text-sm font-semibold transition-colors hover:text-primary ${pathname === "/about" ? "text-primary" : "text-slate-600"
                  }`}
              >
                About Us
              </Link>

              <Link
                href="/gallery"
                className={`font-sans text-sm font-semibold transition-colors hover:text-primary ${pathname === "/gallery" ? "text-primary" : "text-slate-600"
                  }`}
              >
                Gallery
              </Link>

              <Link
                href="/locations"
                className={`font-sans text-sm font-semibold transition-colors hover:text-primary ${pathname.startsWith("/locations") ? "text-primary" : "text-slate-600"
                  }`}
              >
                Locations
              </Link>

              <Link
                href="/contact"
                className={`font-sans text-sm font-semibold transition-colors hover:text-primary ${pathname === "/contact" ? "text-primary" : "text-slate-600"
                  }`}
              >
                Contact
              </Link>
            </div>

            {/* Call-to-Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="tel:+919797974476"
                className="flex items-center gap-2 text-slate-600 hover:text-primary font-sans text-sm font-semibold transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>+91 97979 74476</span>
              </Link>
              <Button href="/contact" size="sm" variant="primary">
                Free Inspection
              </Button>
            </div>

            {/* Hamburger Menu Icon (Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Navigation */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white border-l border-slate-200 p-6 shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <img
              src="/logo.png"
              alt="Allind Safety Logo"
              className="h-11 w-auto object-contain"
            />
            <span className="font-heading font-extrabold text-lg text-slate-900">ALLIND</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-slate-100 focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-sans text-lg font-semibold transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-slate-700"
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Services in mobile dropdown list */}
          <div className="border-t border-slate-100 pt-4 mt-2">
            <span className="text-xs uppercase text-slate-400 font-bold font-heading tracking-widest mb-3 block">
              Our Services
            </span>
            <div className="grid grid-cols-1 gap-3 max-h-60 overflow-y-auto pr-2">
              {servicesData.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="font-sans text-sm text-slate-500 hover:text-primary transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="border-t border-slate-100 pt-6 flex flex-col gap-4 mt-auto">
            <Link
              href="tel:+919797974476"
              className="flex items-center gap-3 text-slate-700 hover:text-primary font-sans text-base font-semibold py-2"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="block text-xs text-slate-400 font-bold leading-none">Call Now</span>
                <span className="text-sm mt-1 block">+91 97979 74476</span>
              </div>
            </Link>
            <Button href="/contact" size="md" variant="primary" className="w-full">
              Get Free Inspection
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
