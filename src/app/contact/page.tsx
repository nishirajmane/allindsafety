import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LeadForm } from "@/components/home/LeadForm";
import { BasicMap } from "@/components/ui/map";

export const metadata = {
  title: "Contact Us | All India Safety",
  description: "Get in touch with India's premium safety net installation experts. Book a free site survey or chat with us on WhatsApp.",
};

export default function ContactPage() {
  const contactDetails = [
    {
      title: "Call Direct",
      value: "+91 98765 43210",
      sub: "Mon-Sun, 8am to 8pm IST",
      href: "tel:+919876543210",
      icon: Phone,
    },
    {
      title: "WhatsApp Quick Chat",
      value: "Chat on WhatsApp",
      sub: "Instant response for quotes",
      href: "https://wa.me/919199199976",
      icon: MessageSquare,
    },
    {
      title: "Email Support",
      value: "info@allindiaenterprises.com",
      sub: "For enterprise contract inquiries",
      href: "mailto:info@allindiaenterprises.com",
      icon: Mail,
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-grid-pattern min-h-screen">
      {/* Background glow layers */}
      <div className="absolute top-44 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-44 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <SectionHeader
          badge="Get in Touch"
          title="Contact Our Safety Experts"
          subtitle="Ready to secure your spaces? Request a call-back, book a free same-day site survey, or drop by our regional office."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-2xl font-heading font-extrabold text-slate-900">Contact Channels</h3>
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                Connect with our service representatives directly. We coordinate installations in Pune, Mumbai, Bangalore, Hyderabad, Chennai, Delhi NCR, Ahmedabad, and Nagpur.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              {contactDetails.map((detail, idx) => {
                const Icon = detail.icon;
                return (
                  <a
                    key={idx}
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block group cursor-pointer"
                  >
                    <Card
                      glowEffect={true}
                      className="p-5 flex gap-4 items-center bg-white border border-slate-200/80 group-hover:border-primary/30 transition-all duration-300 shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-slate-500 text-xs font-sans uppercase tracking-wider">{detail.title}</span>
                        <span className="text-slate-900 font-heading font-bold text-base sm:text-lg group-hover:text-primary transition-colors leading-tight mt-0.5 block">
                          {detail.value}
                        </span>
                        <span className="block text-slate-500 text-xs font-sans mt-0.5">{detail.sub}</span>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>

            {/* Office Address & Operating Hours */}
            <Card glowEffect={true} className="p-6 bg-white border border-slate-200/80 text-left shadow-sm">
              <h4 className="font-heading font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Headquarters Address
              </h4>
              <p className="text-slate-600 font-sans text-sm leading-relaxed mb-6">
                All India Safety <br />
                Floor 3, Tech Park Central, Sector 5, <br />
                Koregaon Park, Pune, Maharashtra - 411001
              </p>

              <h4 className="font-heading font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Working Hours
              </h4>
              <p className="text-slate-600 font-sans text-sm leading-relaxed">
                Site Surveys: Monday - Sunday | 9:00 AM - 7:00 PM <br />
                Office Support: Monday - Saturday | 9:30 AM - 6:30 PM
              </p>
            </Card>

            {/* Real Interactive Map */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
              <BasicMap />
              <div className="absolute bottom-4 left-4 z-20 text-left bg-white border border-slate-200 p-3 rounded-xl shadow-lg">
                <span className="block text-xs font-heading font-bold text-slate-900">Pune HQ Office</span>
                <span className="text-[10px] text-slate-500 font-sans mt-0.5 block">Sangamwadi, Pune</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 w-full">
            <div className="text-center lg:text-left mb-6">
              <h3 className="text-2xl font-heading font-extrabold text-slate-900">Send Consultation Request</h3>
              <p className="text-slate-600 font-sans text-sm mt-1">
                Fill in your details below and a regional site inspector will contact you directly to schedule a survey.
              </p>
            </div>
            <LeadForm />
          </div>

        </div>

      </div>
    </div>
  );
}
