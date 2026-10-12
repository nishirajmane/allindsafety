import Link from "next/link";
import { business, nav, whatsappLink } from "@/data/site";
import { servicesData } from "@/data/services";
import { PuneClock } from "./PuneClock";
import { Reveal } from "@/components/system/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <footer className="footer" data-theme="dark">
      <div className="wrap footer__top">
        <div className="footer__lead">
          <p className="mono label">(Say hello)</p>
          <Reveal as="p" className="footer__headline">
            Questions are free. <em>So is the site visit.</em>
          </Reveal>
          <div className="footer__contact">
            <a href={`tel:${business.phone}`} className="link-xl roll" data-text={business.phoneDisplay}>
              <span>{business.phoneDisplay}</span>
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="link-xl">
              <span className="roll" data-text="WhatsApp">
                <span>WhatsApp</span>
              </span>
              <Icon name="up-right" />
            </a>
          </div>
        </div>
        <div className="footer__cols">
          <div>
            <p className="mono label">Services</p>
            {servicesData.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <p className="mono label">Explore</p>
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
            <Link href="/#faq">FAQ</Link>
          </div>
          <div>
            <p className="mono label">Base</p>
            <p>
              {business.street}, {business.city}
              <br />
              {business.region} {business.postalCode}
            </p>
            <PuneClock />
            <a href={business.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram <Icon name="up-right" />
            </a>
            <a href={business.social.facebook} target="_blank" rel="noopener noreferrer">
              Facebook <Icon name="up-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__giant" aria-hidden="true">
        <svg viewBox="0 0 1000 210" preserveAspectRatio="xMidYMid meet">
          <text x="500" y="178" textAnchor="middle">
            allind
          </text>
        </svg>
      </div>
      <div className="wrap footer__bottom mono">
        <span>© {new Date().getFullYear()} {business.legalName}</span>
        <span>Safety nets · Invisible grills · Bird protection</span>
        <a href="#top">Back to top <Icon name="up" /></a>
      </div>
    </footer>
  );
}
