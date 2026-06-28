import React from "react";
import { Target, Eye, Award } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "About Us | All India Safety",
  description: "Learn about the mission, vision, and certified team behind India's trusted safety net installation services.",
};

export default function AboutPage() {
  const certifications = [
    { title: "ISO 9001:2015 Certified", desc: "Recognized for premium quality management systems and service excellence." },
    { title: "OSHA Materials Compliant", desc: "All nets and fixtures meet industrial health and safety standards." },
    { title: "Garware Authorized Partner", desc: "Direct sourcing of high-strength copolymer nylon netting products." },
    { title: "Safety Audited Crews", desc: "Every installer passes regular high-altitude safety training and audits." },
  ];

  return (
    <div className="py-16 md:py-24 bg-grid-pattern min-h-screen">
      {/* Background radial glows */}
      <div className="absolute top-44 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-44 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Page Header */}
        <SectionHeader
          badge="Our Story"
          title="Securing Indian Homes Since 2016"
          subtitle="All India Safety was founded with a single mission: to eliminate structural safety hazards in high-rises and workplaces with high-end, visual-grade installations."
        />

        {/* Company Story Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
              The Evolution of Safety Net Standards
            </h3>
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              Started in Pune as a small local installation service, we recognized a major gap in the market: safety nets were often treated as cheap, unsightly plastic mesh. Residents were forced to compromise their balconies&apos; aesthetic appeal for the sake of safety.
            </p>
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              We changed the narrative by introducing high-tension copolymer nylon and marine-grade SS invisible grills to India. By treating safety installations with precise engineering care, we grew to cover 8 major metropolitan regions.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-slate-200/80 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
              alt="Installation Team at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* Mission & Vision Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <Card glowEffect={true} className="p-8 flex flex-col gap-6 bg-white border border-slate-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-secondary/20 flex items-center justify-center text-primary">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                To protect families, children, and pets in high-rise buildings from drop accidents, while keeping structural spaces free from bird hazards, using top-tier materials that respect building architecture.
              </p>
            </div>
          </Card>

          <Card glowEffect={true} className="p-8 flex flex-col gap-6 bg-white border border-slate-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-primary">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                To become India&apos;s primary standard for protective structures, trusted by premium high-rise architects and builders for high-fidelity invisible security solutions.
              </p>
            </div>
          </Card>
        </div>

        {/* Certifications Section */}
        <div>
          <SectionHeader
            title="Certifications & Safety Audits"
            subtitle="We hold ourselves to strict standards. All nets and accessories pass tensile structural checks before deployment."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} glowEffect={true} className="p-6 border border-slate-200/80 bg-white text-left shadow-sm">
                <div className="flex gap-3 items-start">
                  <Award className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-base mb-2">{cert.title}</h4>
                    <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
