import { business, siteOrigin } from "@/data/site";
import { locationsData } from "@/data/locations";
import { servicesData } from "@/data/services";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { ServicesIndex } from "@/components/home/ServicesIndex";
import { Anatomy } from "@/components/home/Anatomy";
import { Process } from "@/components/home/Process";
import { WorkReel } from "@/components/home/WorkReel";
import { Voices } from "@/components/home/Voices";
import { Areas } from "@/components/home/Areas";
import { Faq } from "@/components/home/Faq";
import { Cta } from "@/components/home/Cta";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteOrigin}/#localbusiness`,
    name: business.legalName,
    alternateName: business.name,
    image: `${siteOrigin}/art/work/01-invisible-grill-night-1280.webp`,
    url: siteOrigin,
    telephone: business.phone,
    email: business.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
    sameAs: [business.social.facebook, business.social.instagram],
    areaServed: [{ "@type": "City", name: "Pune" }, ...locationsData.map((l) => ({ "@type": "AdministrativeArea", name: `${l.name}, Pune` }))],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Safety net installation services",
      itemListElement: servicesData.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.shortDescription, url: `${siteOrigin}/services/${s.slug}` },
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Hero />
      <Manifesto />
      <ServicesIndex />
      <Anatomy />
      <Process />
      <WorkReel />
      <Voices />
      <Areas />
      <Faq />
      <Cta label="(10) Free site visit" />
    </>
  );
}
