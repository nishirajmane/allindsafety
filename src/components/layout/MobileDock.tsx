import { business, whatsappLink } from "@/data/site";
import Link from "next/link";

/** Always reachable mobile actions, inspired by the reference site's compact action bar. */
export function MobileDock() {
  return (
    <nav className="dock" aria-label="Quick contact">
      <a href={`tel:${business.phone}`}>
        <span aria-hidden="true">↗</span> Call
      </a>
      <a
        href={whatsappLink("Hi Allind Safety! I'd like a free site visit.")}
        target="_blank"
        rel="noopener noreferrer"
        className="dock__whatsapp"
      >
        <span aria-hidden="true">◉</span> WhatsApp
      </a>
      <Link href="/contact" className="dock__primary"><span aria-hidden="true">＋</span> Free quote</Link>
    </nav>
  );
}
