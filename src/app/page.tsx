import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ComparisonSlider } from "@/components/home/ComparisonSlider";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { CoverageMap } from "@/components/home/CoverageMap";
import { FAQSection } from "@/components/home/FAQSection";
import { LeadForm } from "@/components/home/LeadForm";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "All India Enterprises",
    "image": "https://allindiaenterprises.com/og-image.jpg",
    "@id": "https://allindiaenterprises.com/#localbusiness",
    "url": "https://allindiaenterprises.com",
    "telephone": "+919876543210",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tech Park Central, Sector 5, Koregaon Park",
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
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <WhyChooseUs />
      <ComparisonSlider />
      <TestimonialCarousel />
      <CoverageMap />
      <FAQSection />
      <LeadForm />
    </div>
  );
}
