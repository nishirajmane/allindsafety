import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Allind Safety | Premium Safety Net Installation Experts",
  description: "Protecting families, pets, and properties with premium-grade safety net installations, invisible grills, pigeon nets, and sports nets across India. Get a free inspection today.",
  metadataBase: new URL("https://allindiaenterprises.com"),
  keywords: ["Safety Nets India", "Balcony Safety Nets", "Pigeon Nets", "Invisible Grills", "Bird Protection Nets", "Children Safety Nets", "Sports Nets"],
  openGraph: {
    title: "Allind Safety | Premium Safety Net Installation Experts",
    description: "Protecting families, pets, and properties with premium-grade safety net installations across India. Contact us for a free site inspection.",
    url: "https://allindiaenterprises.com",
    siteName: "Allind Safety",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Allind Safety Safety Net Installations",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allind Safety | Premium Safety Net Installation Experts",
    description: "Protecting families, pets, and properties with premium-grade safety net installations across India. Contact us for a free site inspection.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

