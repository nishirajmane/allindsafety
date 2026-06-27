import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle2, ArrowLeft, Shield, Clock, HelpCircle, Award } from "lucide-react";
import { locationsData } from "@/data/locations";
import { servicesData } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { LeadForm } from "@/components/home/LeadForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes for all 12 locations
export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    slug: loc.slug,
  }));
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locationsData.find((l) => l.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${location.tagline} | Allind Safety`,
    description: `Get premium safety net installation services, pigeon nets, and invisible grills in ${location.name}, Pune. Free site inspection, customized dimensions & 5+ years warranty.`,
    openGraph: {
      title: `${location.tagline} | Allind Safety`,
      description: `Get premium safety net installation services, pigeon nets, and invisible grills in ${location.name}, Pune. Free site inspection & 5+ years warranty.`,
      url: `https://allindiaenterprises.com/locations/${location.slug}`,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Safety Net Installations in ${location.name}, Pune`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = locationsData.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  // Filter services popular in this location
  const popularServices = servicesData.filter((service) =>
    location.popularServices.includes(service.slug)
  );

  // Localized JSON-LD Schema
  const localizedSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `All India Safety - ${location.name}`,
    "image": "https://allindiaenterprises.com/og-image.jpg",
    "@id": `https://allindiaenterprises.com/locations/${location.slug}#localbusiness`,
    "url": `https://allindiaenterprises.com/locations/${location.slug}`,
    "telephone": "+919797974476",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${location.name} Service Center`,
      "addressLocality": location.name,
      "addressRegion": "Pune, Maharashtra",
      "postalCode": location.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.coordinates[0],
      "longitude": location.coordinates[1]
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": `${location.name}, Pune`
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    }
  };

  return (
    <div className="py-12 md:py-20 bg-grid-pattern min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localizedSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Back Link and Breadcrumbs */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Locations
          </Link>

          <nav className="text-sm text-slate-500 font-sans" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1">
              <li>
                <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
              </li>
              <li>
                <span className="mx-2 text-slate-400">/</span>
                <Link href="/locations" className="hover:text-slate-800 transition-colors">Locations</Link>
              </li>
              <li>
                <span className="mx-2 text-slate-400">/</span>
                <span className="text-slate-800 font-medium">{location.name}</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-heading tracking-wider uppercase bg-primary/10 text-primary border border-secondary/20 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              Service Area: {location.name}, Pune
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              {location.tagline}
            </h1>
            <p className="text-lg text-slate-600 font-sans leading-relaxed">
              {location.description}
            </p>

            {/* Area trust highlights */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="font-heading font-bold text-slate-900 text-lg">Why choose Allind Safety in {location.name}?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {location.highlights.map((hl, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-sans text-sm leading-relaxed">
                      {hl}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="lg:col-span-5 w-full">
            <Card glowEffect={true} className="p-8 bg-white border border-slate-200/80 shadow-xl rounded-3xl">
              <h3 className="font-heading font-extrabold text-slate-900 text-xl mb-6 pb-4 border-b border-slate-100">
                {location.name} Service Details
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Dispatch Point", value: `${location.name}, Pune, MH`, icon: MapPin },
                  { label: "Postal Coverage", value: `PIN Code ${location.postalCode}`, icon: Shield },
                  { label: "Response Time", value: "Under 2 Hours", icon: Clock },
                  { label: "Warranty Issued", value: "5 Years Manufacturer Warranty", icon: Award },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center text-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-slate-500 text-xs font-sans uppercase tracking-wider">{item.label}</span>
                        <span className="text-slate-900 font-heading font-bold text-base leading-tight mt-0.5 block">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>

        {/* Popular Services Section */}
        <div className="mb-20 border-t border-slate-200 pt-16">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
              Popular Safety Services in {location.name}
            </h2>
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              These are the most highly-requested installations by households and companies in {location.name}. Click on a service to see full technical details and custom options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="block group">
                <Card className="p-6 h-full flex flex-col justify-between bg-white border border-slate-200/80 group-hover:border-primary/40 transition-all duration-300 rounded-2xl shadow-sm hover:shadow">
                  <div>
                    <h3 className="font-heading font-bold text-slate-800 group-hover:text-primary transition-colors text-base mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 font-sans text-xs line-clamp-3 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-primary uppercase font-heading tracking-wide group-hover:underline block mt-2">
                    View Details &rarr;
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Localized FAQ Section */}
        <div className="mb-20 border-t border-slate-200 pt-16">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
              Frequently Asked Questions for {location.name}
            </h2>
            <p className="text-slate-600 font-sans text-sm sm:text-base">
              Got questions about safety nets in {location.name}? Here are some quick answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {location.faq.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-heading font-bold text-slate-900 text-base flex gap-2.5 items-start">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {faq.question}
                </h4>
                <p className="text-slate-600 font-sans text-sm leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Form */}
        <div className="border-t border-slate-200 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-3">
              Request a Free Survey in {location.name}
            </h2>
            <p className="text-slate-600 font-sans text-sm">
              Schedule a local technician visit in {location.name}. We will bring sample nets and provide a precise square-foot calculation.
            </p>
          </div>
          <LeadForm />
        </div>

      </div>
    </div>
  );
}
