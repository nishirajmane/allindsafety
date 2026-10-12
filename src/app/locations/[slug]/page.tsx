import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locationsData } from "@/data/locations";
import { servicesData } from "@/data/services";
import { business, providerSchema, siteOrigin } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal } from "@/components/system/Reveal";
import { Cta } from "@/components/home/Cta";
import { Icon } from "@/components/ui/Icon";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return locationsData.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const loc = locationsData.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `Safety Nets & Invisible Grills in ${loc.name}, Pune`,
    description: `Balcony safety nets, pigeon nets and invisible grills in ${loc.name}, Pune ${loc.postalCode}. Free site visit and a clear written quote from a local crew.`,
    alternates: { canonical: `/locations/${loc.slug}/` },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const loc = locationsData.find((l) => l.slug === slug);
  if (!loc) notFound();
  const services = servicesData.filter((s) => loc.popularServices.includes(s.slug));
  const [lat, lng] = loc.coordinates;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Safety net installation in ${loc.name}`,
      url: `${siteOrigin}/locations/${loc.slug}`,
      areaServed: { "@type": "Place", name: `${loc.name}, Pune`, address: { "@type": "PostalAddress", postalCode: loc.postalCode, addressLocality: "Pune", addressCountry: "IN" } },
      provider: providerSchema,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: loc.faq.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        crumbs={[{ label: "Areas", href: "/locations" }, { label: loc.name }]}
        title={
          <>
            Safety nets in <em>{loc.name}.</em>
          </>
        }
        lede={loc.tagline}
      >
        <Link href="#quote" className="btn btn--sky btn--lg">
          Book a visit in {loc.name}
        </Link>
        <a href={`tel:${business.phone}`} className="btn btn--ghost btn--lg">
          {business.phoneDisplay}
        </a>
      </PageHero>

      <section className="section detail" data-theme="light">
        <div className="wrap detail__grid">
          <div>
            <p className="mono label">(01) The neighbourhood</p>
            <Reveal as="p" className="detail__lead">
              {loc.description}
            </Reveal>
          </div>
          <aside className="spec-sheet" aria-label="Local details">
            <p className="mono label">(02) Local file</p>
            <dl>
              <div>
                <dt className="mono">Pin code</dt>
                <dd>{loc.postalCode}</dd>
              </div>
              <div>
                <dt className="mono">Coordinates</dt>
                <dd>
                  {lat.toFixed(3)}°N {lng.toFixed(3)}°E
                </dd>
              </div>
              <div>
                <dt className="mono">Site visit</dt>
                <dd>Free, usually within 24 hrs</dd>
              </div>
              <div>
                <dt className="mono">Hours</dt>
                <dd>{business.hours.label}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="wrap">
          <p className="mono label detail__features-label">(03) What to expect</p>
          <ol className="features">
            {loc.highlights.map((h, i) => (
              <li key={h}>
                <span className="mono">0{i + 1}</span>
                <span>{h}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="wrap detail__services">
          <p className="mono label">(04) Popular in {loc.name}</p>
          <ul className="row-list">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="row-list__link" data-cursor="Explore">
                  <span className="mono">0{i + 1}</span>
                  <span className="row-list__title">{s.title}</span>
                  <span className="row-list__meta mono">{s.specs.strength}</span>
                  <span aria-hidden="true"><Icon name="up-right" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" data-theme="dark">
        <div className="wrap faq-section__grid">
          <div className="faq-section__head">
            <p className="mono label">(05) Local questions</p>
            <h2 className="h2">
              Asked in <em>{loc.name}.</em>
            </h2>
          </div>
          <FaqList items={loc.faq} />
        </div>
      </section>

      <Cta
        defaultArea={loc.name}
        title={
          <>
            {loc.name}, <em>let&rsquo;s talk.</em>
          </>
        }
      />
    </>
  );
}
