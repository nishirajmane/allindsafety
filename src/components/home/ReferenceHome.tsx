import Link from "next/link";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import { business, whatsappLink } from "@/data/site";
import { faqs, work, workSrc } from "@/data/content";
import { LeadForm } from "@/components/ui/LeadForm";

const steps = [
  ["Get in touch", "Call or WhatsApp us and tell us about your space."],
  ["Free site visit", "We visit, measure the area and discuss suitable options."],
  ["Receive your quote", "We explain the work and give you a clear quote."],
  ["Professional installation", "Our team fits the solution to your space."],
  ["Final check", "We check the installation and answer your questions."],
];

export function ReferenceHome() {
  return <div className="ref-home">
    <section className="ref-hero"><div className="ref-wrap ref-hero__grid"><div>
      <span className="ref-badge">ALLIND SAFETY · PUNE</span>
      <h1>Safety Nets &amp; Invisible Grills <em>for Your Home</em></h1>
      <p className="ref-hero__lead">Protect your family, pets and home without losing your view.</p>
      <p>From balcony safety nets and pigeon nets to invisible grills and bird spikes, we help you find the right protection for your space in Pune.</p>
      <div className="ref-actions"><Link className="ref-btn ref-btn--gold" href="#services">Explore our services</Link><Link className="ref-btn ref-btn--outline" href="#quote">Get a free quote</Link></div>
      <a className="ref-hero__phone" href={`tel:${business.phone}`}>Call {business.phoneDisplay} for a free site visit</a>
      <div className="ref-hero__trust"><span>Free site visit</span><span>Clear quote</span><span>Professional installation</span></div>
    </div><div className="ref-hero__image"><img src="/art/work/02-curved-terrace-net-1280.webp" alt="Balcony fitted with a safety net" /></div></div></section>

    <section className="ref-section ref-white"><div className="ref-wrap"><div className="ref-heading"><span className="ref-badge">OUR INSTALLATIONS</span><h2>Protection for every corner</h2><p>Solutions for balconies, windows and spaces where your family spends time.</p></div><div className="ref-featured">{servicesData.slice(0,3).map(s=><Link className="ref-feature" href={`/services/${s.slug}`} key={s.slug}><img src={s.image} alt="" loading="lazy" /><div><h3>{s.title}</h3><p>{s.shortDescription}</p><span>View details</span></div></Link>)}</div></div></section>

    <section className="ref-section ref-cream"><div className="ref-wrap ref-story"><img src="/art/work/04-garden-view-net-1280.webp" alt="Balcony safety net installation" loading="lazy"/><div><span className="ref-badge">ABOUT ALLIND SAFETY</span><h2>Your space. Your family. Your peace of mind.</h2><p>Your balcony should be a place to enjoy the breeze, not a source of worry. Allind Safety installs safety nets, invisible grills and bird protection for homes and buildings across Pune.</p><p>We listen to your needs, measure your space and explain the options so you can choose what works for your home.</p><Link href="/about" className="ref-text-link">More about us</Link></div></div></section>

    <section id="services" className="ref-section ref-white"><div className="ref-wrap"><div className="ref-heading"><span className="ref-badge">OUR SERVICES</span><h2>Safety solutions for your home</h2><p>Choose the protection you need. We will help with measurements and installation.</p></div><div className="ref-services">{servicesData.map(s=><article className="ref-service" key={s.slug}><img src={s.image} alt="" loading="lazy"/><div><h3>{s.title}</h3><p>{s.shortDescription}</p><Link href={`/services/${s.slug}`}>Explore this service</Link></div></article>)}</div></div></section>

    <section className="ref-section ref-navy"><div className="ref-wrap"><div className="ref-heading"><span className="ref-badge">WHY ALLIND SAFETY</span><h2>Careful work, from start to finish</h2><p>Practical safety solutions for Pune homes and housing societies.</p></div><div className="ref-benefits">{[["01","Free site visit","We measure your space and discuss your requirements."],["02","A clear quote","Understand the proposed work and price before installation."],["03","Fitted to your space","We recommend a solution for your balcony, window or building."],["04","Help when you need it","Call or WhatsApp our team to discuss your questions."]].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="ref-section ref-cream"><div className="ref-wrap"><div className="ref-heading"><span className="ref-badge">HOW IT WORKS</span><h2>From your first call to installation</h2><p>Five simple steps to a safer space.</p></div><div className="ref-steps">{steps.map(([title,description],i)=><article key={title}><span>{i+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

    <section className="ref-section ref-white"><div className="ref-wrap"><div className="ref-heading"><span className="ref-badge">OUR WORK</span><h2>See our installations</h2><p>Explore examples of safety nets and invisible grills fitted in different spaces.</p></div><div className="ref-work">{work.slice(0,4).map(w=><Link href="/gallery" key={w.slug}><img src={workSrc(w,720)} alt={w.kind} loading="lazy"/><span>{w.kind}</span></Link>)}</div><div className="ref-center"><Link className="ref-btn ref-btn--navy" href="/gallery">View our gallery</Link></div></div></section>

    <section className="ref-section ref-gray"><div className="ref-wrap"><div className="ref-heading"><span className="ref-badge">AREAS WE SERVE</span><h2>Safety net installation across Pune</h2><p>Based in Sangamwadi, we serve homes and buildings throughout Pune. Contact us to check availability in your area.</p></div><div className="ref-areas">{locationsData.map(l=><Link href={`/locations/${l.slug}`} key={l.slug}>{l.name}</Link>)}</div></div></section>

    <section id="faq" className="ref-section ref-cream"><div className="ref-wrap ref-faq"><div className="ref-heading"><span className="ref-badge">COMMON QUESTIONS</span><h2>Frequently asked questions</h2><p>Helpful answers before you book a visit.</p></div>{faqs.slice(0,5).map(f=><details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></section>

    <section id="quote" className="ref-section ref-navy"><div className="ref-wrap ref-contact"><div><span className="ref-badge">CONTACT ALLIND SAFETY</span><h2>Let’s make your space safer.</h2><p>Share your requirements and we will help you arrange a free site visit. You can also call or message us directly.</p><div className="ref-actions"><a className="ref-btn ref-btn--gold" href={`tel:${business.phone}`}>Call {business.phoneDisplay}</a><a className="ref-btn ref-btn--outline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></div></div><LeadForm /></div></section>
  </div>;
}
