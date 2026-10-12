import type { Metadata, Viewport } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./pages.css";
import { siteOrigin } from "@/data/site";
import { SmoothScroll } from "@/components/system/SmoothScroll";
import { Preloader } from "@/components/system/Preloader";
import { Cursor } from "@/components/system/Cursor";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileDock } from "@/components/layout/MobileDock";

const sans = Inter_Tight({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400", style: ["normal", "italic"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

const title = "Allind Safety — Safety Nets & Invisible Grills in Pune";
const description =
  "Balcony safety nets, pigeon nets, invisible grills and bird spikes for Pune homes. Free site visit, one clear quote, installed in about two hours.";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: { default: title, template: "%s — Allind Safety" },
  description,
  keywords: ["Safety Nets Pune", "Balcony Safety Nets", "Pigeon Nets Pune", "Invisible Grills Pune", "Children Safety Nets", "Bird Spikes"],
  openGraph: { title, description, siteName: "Allind Safety", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
  icons: {
    icon: [{ url: "/favicon/favicon.ico" }, { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" }],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/favicon/site.webmanifest",
};

export const viewport: Viewport = { themeColor: "#0b0c0e", colorScheme: "dark light" };

// Runs before paint: marks JS as available and skips the intro for repeat visits this session.
const boot = `document.documentElement.classList.add('js');try{if(sessionStorage.getItem('allind-seen'))document.documentElement.classList.add('seen')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        <noscript>
          <style>{`.preloader{display:none}[data-reveal]{visibility:visible!important}`}</style>
        </noscript>
      </head>
      <body id="top">
        <SmoothScroll>
          <Preloader />
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MobileDock />
          <Cursor />
          <div className="grain" aria-hidden="true" />
        </SmoothScroll>
      </body>
    </html>
  );
}
