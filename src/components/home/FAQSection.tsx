const faqs = [
 {question:"What should I choose: safety nets or invisible grills?",answer:"Safety nets suit balconies, pets, and bird protection. Invisible grills use slim steel cables for a more permanent barrier. We’ll look at your space and help you choose during the free site visit."},
 {question:"How long does installation take?",answer:"Most standard balconies can be completed in a few hours. Larger spaces or special fittings may take longer. We’ll confirm the timing after measuring your site."},
 {question:"Can the nets handle sunshine and rain?",answer:"We use UV-resistant netting designed for outdoor use. The best material and expected lifespan depend on exposure and the type of installation."},
 {question:"What does it cost?",answer:"Pricing depends on the area, material, and fittings. Your site visit and measurements are free, and you get a quote before installation."},
 {question:"Is there a warranty?",answer:"Warranty terms vary by material and service. Our team will explain the coverage and provide the details with your quote."}
];
export function FAQSection() {
 const schema = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
 return <section id="faq" className="faq-section section-space site-container"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><div><span className="eyebrow">05 / GOOD QUESTIONS</span><h2>Let’s clear<br/>things up.</h2><p>No guesswork. Just a little useful advice.</p></div><div className="faq-list">{faqs.map((faq,i)=><details key={faq.question} open={i===0}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></section>;
}
