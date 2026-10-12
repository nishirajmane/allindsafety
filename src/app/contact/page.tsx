import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { LeadForm } from "@/components/ui/LeadForm";
import { PuneClock } from "@/components/layout/PuneClock";
import { business, whatsappLink } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contact & Free Site Visit",
  description: "Call, WhatsApp or email Allind Safety in Pune. Book free measurements and get one clear quote for safety nets or invisible grills.",
  alternates: { canonical: "/contact/" },
};

const methods = [
  { label: "Call", value: business.phoneDisplay, href: `tel:${business.phone}`, note: business.hours.label },
  { label: "WhatsApp", value: "Send photos", href: whatsappLink("Hi Allind Safety! I'd like a free site visit."), note: "Fastest — share photos of your balcony", external: true },
  { label: "Email", value: "Write to us", href: `mailto:${business.email}`, note: business.email },
  { label: "Visit", value: "Sangamwadi", href: business.mapsUrl, note: `${business.city}, ${business.region} ${business.postalCode}`, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        title={
          <>
            Say <em>hello.</em>
          </>
        }
        lede="A balcony to protect? A pigeon problem to end? Tell us what you need — we'll take it from there."
      >
        <PuneClock />
      </PageHero>

      <section className="contact" data-theme="dark">
        <div className="wrap">
          <ul className="contact__methods">
            {methods.map((m) => (
              <li key={m.label}>
                <a href={m.href} {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} data-cursor={m.label}>
                  <span className="mono">{m.label}</span>
                  <span className="contact__value">{m.value}</span>
                  <span className="contact__note">{m.note}</span>
                  <span className="contact__arrow" aria-hidden="true">
                    <Icon name="up-right" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="quote" className="section" data-theme="dark">
        <div className="wrap cta__grid">
          <div className="cta__head">
            <p className="mono label">Request a free site visit</p>
            <h2 className="h2">
              Two minutes. <em>That&rsquo;s it.</em>
            </h2>
            <ul className="cta__points">
              <li>We call back to fix a time that suits you</li>
              <li>Measurements, samples and advice — free</li>
              <li>A written quote before any work begins</li>
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
