import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import { business, providerSchema, siteOrigin } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/system/Reveal";
import { Cta } from "@/components/home/Cta";
import { Icon } from "@/components/ui/Icon";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Pune`,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: { title: `${service.title} in Pune — Allind Safety`, description: service.shortDescription, images: [{ url: service.image }] },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const index = servicesData.findIndex((s) => s.slug === slug);
  if (index < 0) notFound();
  const service = servicesData[index];
  const next = servicesData[(index + 1) % servicesData.length];
  const words = service.title.split(" ");
  const last = words.pop();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.fullDescription,
    url: `${siteOrigin}/services/${service.slug}`,
    image: `${siteOrigin}${service.image}`,
    areaServed: { "@type": "City", name: "Pune" },
    provider: providerSchema,
  };

  const specs = [
    ["Material", service.specs.material],
    ["Strength", service.specs.strength],
    ["Expected life", service.specs.durability],
    ["Warranty", service.specs.warranty],
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        crumbs={[{ label: "Services", href: "/#services" }, { label: `0${index + 1}` }]}
        title={
          <>
            {words.join(" ")} <em>{last}.</em>
          </>
        }
        lede={service.shortDescription}
      >
        <Link href="#quote" className="btn btn--sky btn--lg">
          Get a free quote
        </Link>
        <a href={`tel:${business.phone}`} className="btn btn--ghost btn--lg">
          Talk to an installer
        </a>
      </PageHero>

      <div data-theme="dark" className="bleed">
        <ParallaxImage src={service.image} alt={`${service.title} installed on a Pune balcony`} width={960} height={523} className="bleed__img" priority />
      </div>

      <section className="section detail" data-theme="light">
        <div className="wrap detail__grid">
          <div>
            <p className="mono label">(01) Why it works</p>
            <Reveal as="p" className="detail__lead">
              {service.fullDescription}
            </Reveal>
          </div>
          <aside className="spec-sheet" aria-label="Specifications">
            <p className="mono label">(02) Spec sheet</p>
            <dl>
              {specs.map(([k, v]) => (
                <div key={k}>
                  <dt className="mono">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="spec-sheet__note">Final material and warranty terms are confirmed in writing with your quote.</p>
          </aside>
        </div>

        <div className="wrap">
          <p className="mono label detail__features-label">(03) What you get</p>
          <ol className="features">
            {service.features.map((f, i) => (
              <li key={f}>
                <span className="mono">0{i + 1}</span>
                <span>{f}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="wrap detail__areas">
          <p className="mono label">(04) Installed across Pune</p>
          <div className="chips-row">
            {locationsData.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="chip">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Link href={`/services/${next.slug}`} className="next-link" data-theme="dark" data-cursor="Next">
        <span className="wrap">
          <span className="mono label">Next service</span>
          <span className="next-link__title">
            {next.title} <span aria-hidden="true"><Icon name="right" /></span>
          </span>
        </span>
      </Link>

      <Cta
        defaultService={service.title}
        title={
          <>
            A free visit. <em>A clear quote.</em>
          </>
        }
      />
    </>
  );
}
