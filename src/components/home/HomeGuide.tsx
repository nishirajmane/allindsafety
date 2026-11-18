import Link from "next/link";
import { servicesData } from "@/data/services";

export function HomeGuide() {
  return (
    <section className="home-guide section" aria-labelledby="guide-heading">
      <div className="wrap">
        <p className="mono label">Safety solutions for homes across Pune</p>
        <h2 id="guide-heading" className="h2">Find the right protection for your home.</h2>
        <p className="home-guide__intro">Every home is different. Whether you want a safer balcony for your children, a cleaner space without pigeons, or a clear view with invisible grills, we can help you choose a suitable solution.</p>
        <div className="home-guide__grid">
          {servicesData.map((service) => (
            <article className="home-guide__card" key={service.slug}>
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
              <Link href={`/services/${service.slug}`}>View service details</Link>
            </article>
          ))}
        </div>
        <div className="home-guide__help">
          <h2>Not sure which option you need?</h2>
          <p>Tell us about your balcony, window or other space. We can discuss your needs, arrange a site visit, take measurements and explain the available options before providing a quote.</p>
          <Link className="btn btn--sky" href="/contact">Talk to our team</Link>
        </div>
      </div>
    </section>
  );
}
