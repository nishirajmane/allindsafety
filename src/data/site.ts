// Static exports resolve this at build time. Vercel uses the public business domain;
// Sites builds can set SITE_ORIGIN to their own deployment origin.
export const siteOrigin = (process.env.SITE_ORIGIN || "https://www.allindsafety.com").replace(/\/$/, "");

export const business = {
  name: "Allind Safety",
  legalName: "All India Safety",
  phone: "+919797974476",
  phoneDisplay: "+91 97979 74476",
  whatsapp: "919199199976",
  email: "info@allindiaenterprises.com",
  street: "Sangamwadi",
  city: "Pune",
  region: "Maharashtra",
  postalCode: "411001",
  geo: { lat: 18.5362, lng: 73.894 },
  hours: { open: 8, close: 20, label: "Mon–Sun, 8am–8pm" },
  social: {
    instagram: "https://www.instagram.com/allindsafety?igsh=bzg3djZqZ2x0anBn",
    facebook: "https://www.facebook.com/share/17ZmeJT6TC/",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sangamwadi%2C+Pune",
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${business.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const stats = [
  { value: 10, suffix: "+", label: "Years on Pune's balconies" },
  { value: 5000, suffix: "+", label: "Homes, held" },
  { value: 150, suffix: "kg", label: "Breaking load per knot" },
  { value: 2, suffix: "hrs", label: "Typical install time" },
];

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Areas", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export const providerSchema = {
  "@type": "LocalBusiness",
  name: business.name,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: "IN",
  },
};
