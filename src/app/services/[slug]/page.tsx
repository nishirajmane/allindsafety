import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CheckCircle2, Shield, Calendar, Award, Zap, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { LeadForm } from "@/components/home/LeadForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate Static Params for all 12 services to enable static site generation (SSG)
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | All India Safety`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | All India Safety`,
      description: service.shortDescription,
      images: [{ url: service.beforeAfterImage.after }],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const specsItems = [
    { label: "Material Composition", value: service.specs.material, icon: Shield },
    { label: "Expected Lifespan", value: service.specs.durability, icon: Calendar },
    { label: "Written Warranty", value: service.specs.warranty, icon: Award },
    { label: "Breakage Capacity", value: service.specs.strength, icon: Zap },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "All India Safety",
      "telephone": "+919876543210",
      "priceRange": "$$",
      "image": "https://allindiaenterprises.com/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tech Park Central, Sector 5, Koregaon Park",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411001",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      "Pune",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Delhi NCR",
      "Ahmedabad",
      "Nagpur"
    ]
  };

  return (
    <div className="py-12 md:py-20 bg-grid-pattern min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Services
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-heading tracking-wider uppercase bg-primary/10 text-primary border border-secondary/20 mb-2">
              Protective Service
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-slate-600 font-sans leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Key features checklist */}
            <div className="space-y-3 pt-4">
              <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">Key Service Advantages:</h3>
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Panel */}
          <div className="lg:col-span-5 w-full">
            <Card glowEffect={true} className="p-8 bg-white border border-slate-200/80 shadow-xl rounded-3xl">
              <h3 className="font-heading font-extrabold text-slate-900 text-xl mb-6 pb-4 border-b border-slate-100">
                Technical Specifications
              </h3>
              <div className="space-y-6">
                {specsItems.map((spec, index) => {
                  const Icon = spec.icon;
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center text-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-slate-500 text-xs font-sans uppercase tracking-wider">{spec.label}</span>
                        <span className="text-slate-900 font-heading font-bold text-base leading-tight mt-1 block">
                          {spec.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>

        {/* Lead Capture Form Section */}
        <div className="border-t border-slate-200 pt-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-3">
              Request a Free Quote for {service.title}
            </h2>
            <p className="text-slate-600 font-sans text-sm">
              Book a free measurements survey. Our site technician will visit your location with samples and advise on the best thickness.
            </p>
          </div>
          <LeadForm />
        </div>

      </div>
    </div>
  );
}
