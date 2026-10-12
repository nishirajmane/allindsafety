import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Cta } from "@/components/home/Cta";
import { work } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Work — Safety Net & Invisible Grill Installations",
  description: "Real Allind Safety installations across Pune: balcony safety nets, invisible grills, children nets, sports nets and bird spikes.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Work" }]}
        title={
          <>
            Real balconies. <em>Really held.</em>
          </>
        }
        lede={`${work.length} recent installs from across Pune — unfiltered, straight from our crews' phones. Tap any photo to look closer.`}
      />
      <GalleryGrid />
      <Cta
        title={
          <>
            Yours could be <em>next.</em>
          </>
        }
      />
    </>
  );
}
