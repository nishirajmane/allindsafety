"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, User, MapPin, Layers, MessageSquare, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";

// Validation Schema using Zod
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  city: z.string().min(1, "Please select your city"),
  service: z.string().min(1, "Please select the service required"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LeadFormProps {
  minimal?: boolean;
}

export const LeadForm: React.FC<LeadFormProps> = ({ minimal = false }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      city: "Pune",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API lead ingestion call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Prefilled lead details redirect to WhatsApp
    const textMessage = `Hi All India Safety! %0A%0A*New Lead Submitted:*%0A- *Name:* ${encodeURIComponent(
      data.fullName
    )}%0A- *Phone:* ${encodeURIComponent(data.phone)}%0A- *City:* ${encodeURIComponent(
      data.city
    )}%0A- *Service:* ${encodeURIComponent(data.service)}%0A- *Message:* ${encodeURIComponent(
      data.message || "No comments"
    )}`;

    setTimeout(() => {
      window.open(`https://wa.me/919199199976?text=${textMessage}`, "_blank");
    }, 1200);
  };

  const citiesList = [
    "Pune (All Areas)",
    ...locationsData.map((loc) => `${loc.name}, Pune`),
  ];

  if (minimal) {
    return (
      <Card glowEffect={true} className="p-8 sm:p-10 bg-white border border-slate-200/80 shadow-xl rounded-3xl relative">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mb-6 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
              Request Received!
            </h3>
            <p className="text-slate-600 font-sans text-sm sm:text-base max-w-sm mb-6">
              Thank you. We have recorded your information. A representative will contact you in the next 15 minutes. We are also redirecting you to WhatsApp.
            </p>
            <Button onClick={() => setIsSuccess(false)} variant="outline" size="sm">
              Submit Another Request
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-heading">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("fullName")}
                  className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary focus:bg-white transition-all ${errors.fullName ? "border-rose-500" : "border-slate-200"
                    }`}
                />
              </div>
              {errors.fullName && (
                <p className="text-rose-500 text-xs font-sans mt-1.5">{errors.fullName.message}</p>
              )}
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-heading">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    placeholder="9876543210"
                    {...register("phone")}
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary focus:bg-white transition-all ${errors.phone ? "border-rose-500" : "border-slate-200"
                      }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-rose-500 text-xs font-sans mt-1.5">{errors.phone.message}</p>
                )}
              </div>

              {/* City Select */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-heading">
                  Select Area
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <select
                    {...register("city")}
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary focus:bg-white transition-all appearance-none ${errors.city ? "border-rose-500" : "border-slate-200"
                      }`}
                  >
                    <option value="">Select Area / Location</option>
                    {citiesList.map((city) => (
                      <option key={city} value={city} className="bg-white text-slate-900">
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.city && (
                  <p className="text-rose-500 text-xs font-sans mt-1.5">{errors.city.message}</p>
                )}
              </div>
            </div>

            {/* Service Select */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-heading">
                Service Required
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Layers className="w-5 h-5" />
                </div>
                <select
                  {...register("service")}
                  className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary focus:bg-white transition-all appearance-none ${errors.service ? "border-rose-500" : "border-slate-200"
                    }`}
                >
                  <option value="">Select Service</option>
                  {servicesData.map((service) => (
                    <option key={service.id} value={service.title} className="bg-white text-slate-900">
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              {errors.service && (
                <p className="text-rose-500 text-xs font-sans mt-1.5">{errors.service.message}</p>
              )}
            </div>

            {/* Message Comments */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-heading">
                Special Requirements / Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none text-slate-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <textarea
                  rows={3}
                  placeholder="Specify balcony dimensions, floor number, or custom net mesh size..."
                  {...register("message")}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary focus:bg-white transition-all resize-none"
                />
              </div>
            </div>

            {/* Form Submission CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Button type="submit" isLoading={isSubmitting} variant="primary" leftIcon={<Send className="w-4 h-4" />}>
                Request Free Quote
              </Button>
              <a
                href="https://wa.me/919199199976"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-heading font-semibold rounded-lg px-6 py-3 border border-emerald-500/20 hover:border-emerald-500 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-600 transition-all shadow-sm active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </div>
          </form>
        )}
      </Card>
    );
  }

  return (
    <section id="quote-form" className="py-24 relative overflow-hidden bg-slate-100/10">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text/Details Side */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-heading tracking-wider uppercase bg-primary/10 text-primary border border-secondary/20 mb-4 self-center lg:self-start">
              Free Site Survey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Get a Free <br />
              Site Inspection Today
            </h2>
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mb-8">
              Fill out the form to book your free inspection. Our certified engineer will visit your property, measure dimensions, show material samples, and provide a customized quote.
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-4 text-left border-t border-slate-200 pt-8">
              <div>
                <span className="block text-2xl font-heading font-extrabold text-primary">0 Cost</span>
                <span className="text-slate-500 text-xs font-sans mt-0.5 block">On-Site Measurement Visit</span>
              </div>
              <div>
                <span className="block text-2xl font-heading font-extrabold text-primary">Same Day</span>
                <span className="text-slate-500 text-xs font-sans mt-0.5 block">Quote Generation</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <Card glowEffect={true} className="p-8 sm:p-10 bg-white border border-slate-200/80 shadow-xl rounded-3xl relative">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mb-6 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
                    Request Received!
                  </h3>
                  <p className="text-slate-600 font-sans text-sm sm:text-base max-w-sm mb-6">
                    Thank you. We have recorded your information. A representative will contact you in the next 15 minutes. We are also redirecting you to WhatsApp.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline" size="sm">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-heading">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        placeholder="John Doe"
                        {...register("fullName")}
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary focus:bg-white transition-all ${errors.fullName ? "border-rose-500" : "border-slate-200"
                          }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-rose-500 text-xs font-sans mt-1.5">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-heading">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-5 h-5" />
                        </div>
                        <input
                          type="tel"
                          placeholder="9876543210"
                          {...register("phone")}
                          className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary focus:bg-white transition-all ${errors.phone ? "border-rose-500" : "border-slate-200"
                            }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-rose-500 text-xs font-sans mt-1.5">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* City Select */}
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-heading">
                        Select Area
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <select
                          {...register("city")}
                          className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary focus:bg-white transition-all appearance-none ${errors.city ? "border-rose-500" : "border-slate-200"
                            }`}
                        >
                          <option value="">Select Area / Location</option>
                          {citiesList.map((city) => (
                            <option key={city} value={city} className="bg-white text-slate-900">
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.city && (
                        <p className="text-rose-500 text-xs font-sans mt-1.5">{errors.city.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Select */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-heading">
                      Service Required
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Layers className="w-5 h-5" />
                      </div>
                      <select
                        {...register("service")}
                        className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary focus:bg-white transition-all appearance-none ${errors.service ? "border-rose-500" : "border-slate-200"
                          }`}
                      >
                        <option value="">Select Service</option>
                        {servicesData.map((service) => (
                          <option key={service.id} value={service.title} className="bg-white text-slate-900">
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.service && (
                      <p className="text-rose-500 text-xs font-sans mt-1.5">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Message Comments */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-heading">
                      Special Requirements / Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none text-slate-400">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea
                        rows={3}
                        placeholder="Specify balcony dimensions, floor number, or custom net mesh size..."
                        {...register("message")}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary focus:bg-white transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Form Submission CTA Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <Button type="submit" isLoading={isSubmitting} variant="primary" leftIcon={<Send className="w-4 h-4" />}>
                      Request Free Quote
                    </Button>
                    <a
                      href="https://wa.me/919199199976"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center font-heading font-semibold rounded-lg px-6 py-3 border border-emerald-500/20 hover:border-emerald-500 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-600 transition-all shadow-sm active:scale-[0.98] cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book via WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
