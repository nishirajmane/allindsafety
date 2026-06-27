import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://allindiaenterprises.com";

  // Base routes
  const routes = ["", "/about", "/gallery", "/contact", "/locations"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic service paths
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic location paths
  const locationRoutes = locationsData.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes, ...locationRoutes];
}
