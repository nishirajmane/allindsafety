import Link from "next/link";
import { MapPin } from "lucide-react";
import { locationsData } from "@/data/locations";
export function CoverageMap() {
 return <section className="coverage-section section-space site-container"><div className="section-heading"><div><span className="eyebrow">04 / RIGHT IN YOUR NEIGHBOURHOOD</span><h2>Pune, we’ve got you.</h2></div><p>Based in Sangamwadi. Installing safety nets and invisible grills in homes and societies across Pune.</p></div><div className="location-chips">{locationsData.map(loc=><Link key={loc.slug} href={`/locations/${loc.slug}`}><MapPin size={16}/>{loc.name}</Link>)}</div><div className="coverage-bottom"><span>Not sure if we cover your area?</span><Link href="/contact" className="text-link">Ask our local team</Link></div></section>;
}
