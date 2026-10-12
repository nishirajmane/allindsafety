import { faqs } from "@/data/content";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal } from "@/components/system/Reveal";

export function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };
  return (
    <section id="faq" className="faq-section section" data-theme="light">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="wrap faq-section__grid">
        <div className="faq-section__head">
          <p className="mono label">(09) Good questions</p>
          <Reveal as="h2" className="h2">
            Asked <em>often.</em>
          </Reveal>
          <p>Anything else? Ask us on WhatsApp — a real installer answers, usually within the hour.</p>
        </div>
        <FaqList items={faqs} />
      </div>
    </section>
  );
}
