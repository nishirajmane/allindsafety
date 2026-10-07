import { siteOrigin } from "@/data/site";
import { HeroSection } from "@/components/home/HeroSection";
import { WorkPreview } from "@/components/home/WorkPreview";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { CoverageMap } from "@/components/home/CoverageMap";
import { FAQSection } from "@/components/home/FAQSection";
import { LeadForm } from "@/components/home/LeadForm";
import { locationsData } from "@/data/locations";
import { servicesData } from "@/data/services";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "All India Safety",
    "image": `${siteOrigin}/logo.png`,
    "@id": `${siteOrigin}/#localbusiness`,
    "url": siteOrigin,
    "telephone": "+919797974476",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sangamwadi",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5362,
      "longitude": 73.8940
    },
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
    },
    "sameAs": [
      "https://www.facebook.com/share/17ZmeJT6TC/",
      "https://www.instagram.com/allindsafety?igsh=bzg3djZqZ2x0anBn"
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Pune"
      },
      ...locationsData.map((loc) => ({
        "@type": "AdministrativeArea",
        "name": `${loc.name}, Pune`
      }))
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safety Net Installation Services",
      "itemListElement": servicesData.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.shortDescription,
          "url": `${siteOrigin}/services/${service.slug}`
        }
      }))
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <MotionReveal><WhyChooseUs /></MotionReveal>
      <MotionReveal><WorkPreview /></MotionReveal>
      <MotionReveal><TestimonialCarousel /></MotionReveal>
      <MotionReveal><CoverageMap /></MotionReveal>
      <MotionReveal><FAQSection /></MotionReveal>
      <MotionReveal><LeadForm /></MotionReveal>
    </div>
  );
}
