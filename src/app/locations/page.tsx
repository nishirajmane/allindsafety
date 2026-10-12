import Link from "next/link";
import type { Metadata } from "next";
import { locationsData } from "@/data/locations";
import { PageHero } from "@/components/ui/PageHero";
import { Cta } from "@/components/home/Cta";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Service Areas Across Pune",
  description: "Safety nets and invisible grills across Pune — Kothrud, Baner, Wakad, Hinjewadi, Kharadi, Viman Nagar and more. Local crews, free site visits.",
  alternates: { canonical: "/locations/" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Areas" }]}
        title={
          <>
            Your neighbourhood. <em>Our next stop.</em>
          </>
        }
        lede="Local crews across Pune, usually on site within 24 hours. Pick your area for local details — or just call, we probably cover it."
      />
      <section className="section" data-theme="light">
        <div className="wrap">
          <ul className="row-list row-list--xl">
            {locationsData.map((l, i) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="row-list__link" data-cursor="Open">
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="row-list__title">{l.name}</span>
                  <span className="row-list__meta mono">
                    {l.postalCode} · {l.coordinates[0].toFixed(2)}°N {l.coordinates[1].toFixed(2)}°E
                  </span>
                  <span aria-hidden="true"><Icon name="up-right" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Cta
        title={
          <>
            Not on the list? <em>Ask anyway.</em>
          </>
        }
      />
    </>
  );
}
