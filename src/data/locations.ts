export interface LocationDetail {
  id: string;
  name: string;
  slug: string;
  postalCode: string;
  tagline: string;
  description: string;
  coordinates: [number, number];
  popularServices: string[];
  highlights: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const locationsData: LocationDetail[] = [
  {
    id: "kothrud",
    name: "Kothrud",
    slug: "kothrud",
    postalCode: "411038",
    tagline: "Top-Rated Safety Net Installation in Kothrud, Pune",
    description: "Kothrud is one of Pune's most established and densely populated residential areas. With a mix of older apartment societies and new high-rises, pigeon roosting and safety at heights are major concerns for residents. Allind Safety provides premium, heavy-duty safety net installations and invisible grills in Kothrud to protect families and pets from accidental falls.",
    coordinates: [18.5074, 73.8077],
    popularServices: ["balcony-safety-nets", "pigeon-safety-nets", "invisible-grills", "children-safety-nets"],
    highlights: [
      "Serving Kothrud area for 8+ years",
      "Over 450+ residential installations completed near DP Road & Ideal Colony",
      "Same-day inspection & measurement services",
      "UV-resistant copolymer nylon nets suitable for extreme weather"
    ],
    faq: [
      {
        question: "Do you offer balcony safety net installations near DP Road and Karve Road in Kothrud?",
        answer: "Yes, we cover all areas in Kothrud, including DP Road, Karve Road, Ideal Colony, Mayur Colony, and Mahatma Society. Our local installation crew is based nearby and can reach your site within 2 hours."
      },
      {
        question: "What is the price of pigeon safety nets in Kothrud?",
        answer: "The price varies based on the mesh size and the square footage. We offer free on-site measurements in Kothrud and provide an instant, transparent quote with no hidden fees."
      }
    ]
  },
  {
    id: "baner",
    name: "Baner",
    slug: "baner",
    postalCode: "411045",
    tagline: "Premium Balcony Safety Nets & Invisible Grills in Baner",
    description: "Baner has emerged as a premium residential hub populated by IT professionals and families living in high-rise towers. Modern apartments require safety solutions that are not only robust but also maintain the premium aesthetic of the buildings. Our invisible grills and translucent balcony safety nets in Baner offer maximum security without blocking the gorgeous views.",
    coordinates: [18.5590, 73.7797],
    popularServices: ["invisible-grills", "balcony-safety-nets", "pigeon-safety-nets", "bird-spikes"],
    highlights: [
      "Specialized in high-rise tower installations up to 30+ floors",
      "100% rust-proof 316 Marine Grade stainless steel cables for invisible grills",
      "Trusted by residents in major societies near Balewadi High Street & Baner-Pashan Link Road",
      "Certified and experienced high-rise installers"
    ],
    faq: [
      {
        question: "Why should I choose invisible grills over traditional iron grills for my Baner apartment?",
        answer: "Invisible grills do not block your scenic views of the Baner hills, do not rust in rain, meet fire safety rules (can be cut during emergencies), and provide high structural strength using 316 Marine Grade stainless steel."
      },
      {
        question: "Can you install pigeon spikes in commercial offices in Baner?",
        answer: "Yes, we install polycarbonate and stainless steel bird spikes for commercial buildings, cafes, and offices around Baner to prevent bird nesting hygienically."
      }
    ]
  },
  {
    id: "wakad",
    name: "Wakad",
    slug: "wakad",
    postalCode: "411057",
    tagline: "Professional Safety Net Solutions in Wakad, PCMC",
    description: "Located in the Pimpri-Chinchwad area, Wakad is home to hundreds of multi-story housing societies. The height of these buildings creates safety risks for young children and pets, while balconies are frequently targeted by pigeons. We offer highly durable safety nets and bird exclusion systems tailored for high-rise buildings in Wakad.",
    coordinates: [18.5987, 73.7493],
    popularServices: ["balcony-safety-nets", "pigeon-safety-nets", "children-safety-nets", "duct-area-safety-nets"],
    highlights: [
      "Over 600+ apartments secured across Wakad",
      "Dedicated installation team for PCMC area",
      "Garware copolymer nets with 5 years warranty",
      "Expertise in complex duct area installations"
    ],
    faq: [
      {
        question: "How long does the installation take for a standard balcony in Wakad?",
        answer: "A standard balcony installation for safety nets or pigeon nets takes approximately 1.5 to 2.5 hours. Our technicians work cleanly and efficiently."
      },
      {
        question: "Is the site visit and measurement in Wakad free?",
        answer: "Yes, we offer 100% free site inspections, catalog demonstrations, and measurements across all locations in Wakad."
      }
    ]
  },
  {
    id: "hinjewadi",
    name: "Hinjewadi",
    slug: "hinjewadi",
    postalCode: "411057",
    tagline: "Industrial & Balcony Safety Net Experts in Hinjewadi",
    description: "Hinjewadi is Pune's premier IT hub, hosting thousands of tech professionals. From IT parks to PG accommodations and high-density apartments, there is a high demand for reliable bird control, balcony safety, and sports nets. Allind Safety provides customized net installations for both residential and commercial complexes in Hinjewadi.",
    coordinates: [18.5913, 73.7386],
    popularServices: ["balcony-safety-nets", "pigeon-safety-nets", "sports-nets", "industrial-safety-nets"],
    highlights: [
      "Providing industrial safety nets for IT parks and warehouses in Hinjewadi Phase 1, 2, and 3",
      "Highly durable, flame-retardant net options",
      "Rapid support for corporate and commercial client setups",
      "Sports net installations for turf and company recreation grounds"
    ],
    faq: [
      {
        question: "Do you supply sports nets and cricket nets for corporate offices in Hinjewadi?",
        answer: "Yes, we install premium sports nets, cricket practice nets, and turf enclosure nets for offices, IT parks, and clubs in Hinjewadi."
      },
      {
        question: "Are your balcony nets strong enough to protect pets like cats?",
        answer: "Absolutely. We use high-tensile, double-knotted copolymer nets that can withstand scratches and weight up to 150 kg, keeping cats and dogs completely safe."
      }
    ]
  },
  {
    id: "hadapsar",
    name: "Hadapsar",
    slug: "hadapsar",
    postalCode: "411028",
    tagline: "Premium Safety Nets in Hadapsar, Magarpatta & Amanora",
    description: "Hadapsar is characterized by major integrated townships like Magarpatta City and Amanora Park Town. These ultra-high-rise residential towers require high-performance, high-tension safety nets that conform to township rules. Allind Safety is the trusted partner for premium invisible grills and bird protection nets in Hadapsar.",
    coordinates: [18.5089, 73.9259],
    popularServices: ["balcony-safety-nets", "pigeon-safety-nets", "invisible-grills", "cricket-nets"],
    highlights: [
      "Approved installer for high-rise societies in Magarpatta & Amanora",
      "Clean, drilling-free installation methods where requested",
      "5+ years written warranty on materials and workmanship",
      "Strict compliance with community design regulations"
    ],
    faq: [
      {
        question: "Are safety net installations allowed in Magarpatta/Amanora societies?",
        answer: "Yes, our installation methods comply with township rules. We use translucent and aesthetic nets that don't spoil the building design, and clean mounting frames."
      },
      {
        question: "Do you provide bird spikes for commercial units in Hadapsar?",
        answer: "Yes, we install heavy-duty polycarbonate and stainless steel bird spikes on ledges, AC units, and signs to keep pigeons away cleanly."
      }
    ]
  },
  {
    id: "kharadi",
    name: "Kharadi",
    slug: "kharadi",
    postalCode: "411014",
    tagline: "Top Balcony Safety Nets & Invisible Grills in Kharadi",
    description: "Kharadi has experienced rapid high-rise growth, making residential balcony safety and pigeon control critical. Allind Safety offers customized solutions for balconies, open terraces, window ducts, and galleries in Kharadi, using premium-grade materials designed for long-term outdoor exposure.",
    coordinates: [18.5442, 73.9389],
    popularServices: ["balcony-safety-nets", "pigeon-safety-nets", "invisible-grills", "duct-area-safety-nets"],
    highlights: [
      "Over 400+ homes secured in Kharadi IT corridor",
      "Weather-resistant fixtures that prevent rust during heavy monsoons",
      "Professional technicians trained in safety protocols at high elevations",
      "Comprehensive warranty coverage on all nets"
    ],
    faq: [
      {
        question: "How do you secure safety nets in high-rise balconies in Kharadi?",
        answer: "We use high-tensile stainless steel hooks and anchor bolts, securely mounted into the concrete ceiling and walls, ensuring the net stays tight and safe."
      },
      {
        question: "Do you install bird control nets for open ducts in Kharadi residential societies?",
        answer: "Yes, we specialize in duct-area safety nets, sealing off internal building shafts where birds usually nest and create noise or unhygienic conditions."
      }
    ]
  },
  {
    id: "viman-nagar",
    name: "Viman Nagar",
    slug: "viman-nagar",
    postalCode: "411014",
    tagline: "Safety Net Installation & Bird Control in Viman Nagar",
    description: "Viman Nagar is a premium commercial and residential area with high density. Balconies, AC outdoor units, and windows are frequently nested on by pigeons, creating sanitation issues. We provide high-quality bird protection nets, child safety nets, and spikes in Viman Nagar with swift and clean installations.",
    coordinates: [18.5679, 73.9143],
    popularServices: ["pigeon-safety-nets", "balcony-safety-nets", "bird-spikes", "children-safety-nets"],
    highlights: [
      "Serving high-density societies near Datta Mandir Chowk & Symbiosis road",
      "Hygienic and non-toxic bird prevention methods",
      "Strong nylon nets that block birds of all sizes without obstructing ventilation",
      "Prompt response with local teams based nearby"
    ],
    faq: [
      {
        question: "Can your pigeon nets block smaller birds like sparrows as well?",
        answer: "Yes, we have varying mesh sizes (including 25mm and 40mm) that effectively block sparrows and smaller birds, not just pigeons."
      },
      {
        question: "What happens if a net gets damaged in the wind in Viman Nagar?",
        answer: "Our nets are high-tension and UV-stabilized, designed to withstand heavy wind. If any physical damage occurs under warranty, our service team will inspect and replace/repair it."
      }
    ]
  },
  {
    id: "koregaon-park",
    name: "Koregaon Park",
    slug: "koregaon-park",
    postalCode: "411001",
    tagline: "Luxury Safety Netting & Invisible Grills in Koregaon Park",
    description: "Known for its green lanes, bungalows, and high-end apartments, Koregaon Park residents place a high premium on visual aesthetics. Allind Safety specializes in installing premium invisible grills and ultra-fine, translucent balcony nets in Koregaon Park, maintaining the beauty of properties while providing absolute safety.",
    coordinates: [18.5362, 73.8940],
    popularServices: ["invisible-grills", "balcony-safety-nets", "bird-protection-nets", "bird-spikes"],
    highlights: [
      "Premium aesthetic setups matching high-end residential interiors",
      "Sleek and highly durable invisible grills that look incredibly premium",
      "Eco-friendly, humane bird deterrents (spikes and nets)",
      "Strict cleaning protocols post-installation"
    ],
    faq: [
      {
        question: "Are invisible grills suitable for villas and low-rise bungalows in Koregaon Park?",
        answer: "Yes, they are excellent for bungalows as they act as a secure burglar deterrent without looking like a prison, keeping the architectural elegance intact."
      },
      {
        question: "Will the net block air flow or natural light in my balcony?",
        answer: "Not at all. Our premium safety nets have a 98% transparency rate, allowing 100% natural light and fresh air to flow through freely."
      }
    ]
  },
  {
    id: "aundh",
    name: "Aundh",
    slug: "aundh",
    postalCode: "411007",
    tagline: "Expert Safety Net Installations in Aundh, Pune",
    description: "Aundh is a developed residential suburb with a large density of apartment buildings. Protecting families, children, and household pets is top-of-mind for residents here. Allind Safety provides top-quality child safety nets, pigeon safety nets, and window nets across Aundh to ensure peace of mind.",
    coordinates: [18.5580, 73.8075],
    popularServices: ["balcony-safety-nets", "pigeon-safety-nets", "children-safety-nets", "cricket-nets"],
    highlights: [
      "Reliable and trusted team with 7+ years service in Aundh",
      "Using branded materials (Garware & premium copolymer nylon)",
      "Highly competitive rates and long-lasting durability",
      "Same-day inspection visits"
    ],
    faq: [
      {
        question: "Do you offer warranty on safety net installations in Aundh?",
        answer: "Yes, all our premium installations come with a 3 to 5-year warranty card covering manufacturing defects and UV degradation."
      },
      {
        question: "Do you supply nets for open backyard or terrace areas in Aundh?",
        answer: "Yes, we install customized overhead nets for terraces, open courts, and backyards to protect against pigeons or facilitate sports."
      }
    ]
  },
  {
    id: "pimple-saudagar",
    name: "Pimple Saudagar",
    slug: "pimple-saudagar",
    postalCode: "411027",
    tagline: "Professional Pigeon & Balcony Nets in Pimple Saudagar",
    description: "Pimple Saudagar is a highly organized residential locality with large gated communities. Pigeon infestations on balconies and plumbing ducts are a recurring issue. We deliver custom-fitted, highly durable pigeon safety nets and balcony nets in Pimple Saudagar, keeping homes secure, clean, and hygienic.",
    coordinates: [18.5986, 73.8005],
    popularServices: ["pigeon-safety-nets", "balcony-safety-nets", "invisible-grills", "duct-area-safety-nets"],
    highlights: [
      "Over 500+ successful installations in premium societies of Pimple Saudagar",
      "Clean installation that prevents damage to building exteriors",
      "Highly experienced team using safety harnesses for exterior walls",
      "Quick response time and flexible scheduling"
    ],
    faq: [
      {
        question: "How do you mount nets in double-height balconies in Pimple Saudagar?",
        answer: "Our crew is equipped with specialized high-rise safety equipment and scaffolding/ladders to safely mount nets in double-height balconies and utility ducts."
      },
      {
        question: "Can I easily remove the safety net if I want to paint the balcony later?",
        answer: "Our nets are installed using a hook-and-rope framework. While they are highly secure, they can be unhooked and re-installed by our technicians when you need maintenance like painting."
      }
    ]
  },
  {
    id: "wagholi",
    name: "Wagholi",
    slug: "wagholi",
    postalCode: "412207",
    tagline: "Affordable & Durable Safety Netting in Wagholi, Pune",
    description: "Wagholi is a rapidly expanding suburb on the Nagar Highway with numerous high-rise developments. Due to open spaces, wind and bird problems are common. Allind Safety provides budget-friendly yet highly durable safety nets, sports nets, and invisible grills in Wagholi, ensuring that safety is accessible to every household.",
    coordinates: [18.5793, 73.9822],
    popularServices: ["balcony-safety-nets", "pigeon-safety-nets", "sports-nets", "construction-safety-nets"],
    highlights: [
      "Specialized teams serving the eastern corridor (Wagholi, Lonikand)",
      "High wind-resistant netting structures",
      "Affordable pricing models for large apartments and societies",
      "Heavy duty sports net construction for school playgrounds and residential clubs"
    ],
    faq: [
      {
        question: "Is Wagholi covered under your Pune service area for home inspections?",
        answer: "Yes, Wagholi is fully covered. We send our survey teams to Wagholi daily for free measurements and samples display."
      },
      {
        question: "What materials do you use for sports and cricket netting in Wagholi?",
        answer: "We use high-density HDPE nets, UV-stabilized, with varying mesh sizes and twine thicknesses depending on the sport (cricket, football, tennis)."
      }
    ]
  },
  {
    id: "kalyani-nagar",
    name: "Kalyani Nagar",
    slug: "kalyani-nagar",
    postalCode: "411006",
    tagline: "Premium Safety Nets & Invisible Grills in Kalyani Nagar",
    description: "Kalyani Nagar is a highly upscale residential and commercial area in Pune. The premium buildings demand safety fittings that merge seamlessly with modern aesthetics. Our stainless steel invisible grills and high-translucency balcony safety nets are the perfect choices for homes in Kalyani Nagar, offering uncompromised security.",
    coordinates: [18.5463, 73.9033],
    popularServices: ["invisible-grills", "pigeon-safety-nets", "balcony-safety-nets", "bird-spikes"],
    highlights: [
      "Premium-grade safety installations for luxury penthouses and commercial spaces",
      "Use of high-grade 316 stainless steel and Garware safety nets",
      "Experienced professionals who ensure pristine finishing",
      "2-hour local dispatch service"
    ],
    faq: [
      {
        question: "Are invisible grills safe for young kids in Kalyani Nagar apartments?",
        answer: "Yes, the cables are spaced at 2 to 3-inch gaps, which is narrow enough to prevent children, pets, or toys from passing through, yet strong enough to withstand high impact."
      },
      {
        question: "Do you offer bird control solutions for retail storefronts in Kalyani Nagar?",
        answer: "Yes, we install discreet bird spikes and nets to protect retail storefronts, showrooms, and commercial entrance gates from birds roosting."
      }
    ]
  }
];
