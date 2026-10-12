import { LeadForm } from "@/components/ui/LeadForm";
import { Reveal } from "@/components/system/Reveal";
import { business } from "@/data/site";

export function Cta({ id = "quote", label = "Free site visit", title, defaultService, defaultArea }: { id?: string; label?: string; title?: React.ReactNode; defaultService?: string; defaultArea?: string }) {
  return (
    <section id={id} className="cta section" data-theme="dark">
      <div className="wrap cta__grid">
        <div className="cta__head">
          <p className="mono label">{label}</p>
          <Reveal as="h2" className="h2 cta__title">
            {title ?? (
              <>
                Let&rsquo;s get you <em>held.</em>
              </>
            )}
          </Reveal>
          <ul className="cta__points">
            <li>Measurements &amp; advice — free</li>
            <li>One written quote before any drilling</li>
            <li>Most installs done in about two hours</li>
          </ul>
          <p className="cta__call mono">
            Rather talk? <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a> · {business.hours.label}
          </p>
        </div>
        <LeadForm defaultService={defaultService} defaultArea={defaultArea} />
      </div>
    </section>
  );
}
