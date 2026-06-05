import { 
  Shield, 
  Bird, 
  EyeOff, 
  Smile, 
  Activity, 
  HardHat, 
  Trophy, 
  Zap, 
  Building, 
  Factory,
  CheckCircle,
  LucideIcon
} from "lucide-react";

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  specs: {
    material: string;
    durability: string;
    warranty: string;
    strength: string;
  };
  beforeAfterImage: {
    before: string;
    after: string;
  };
}

export const servicesData: ServiceDetail[] = [
  {
    id: "balcony-safety-nets",
    slug: "balcony-safety-nets",
    title: "Balcony Safety Nets",
    shortDescription: "Protect your family and pets from accidental falls without blocking your view or ventilation.",
    fullDescription: "Our premium balcony safety nets are engineered to provide an invisible but incredibly strong shield for your balconies. Fabricated from 100% copolymer nylon and UV-stabilized materials, they are built to withstand high tension and extreme weather conditions. These nets are essential for high-rise apartments to protect young children, playful pets, and elderly family members from accidental slips.",
    iconName: "Shield",
    features: [
      "High-tension capacity (up to 150kg per knot)",
      "UV resistant - will not degrade or fade in direct sun",
      "Translucent material maintains gorgeous views",
      "Non-corrosive and rust-proof stainless steel fittings",
      "Professional quick-installation in under 2 hours"
    ],
    specs: {
      material: "High-Density Polyethylene (HDPE) / Copolymer Nylon",
      durability: "8+ Years Lifespan",
      warranty: "5 Years Manufacturer Warranty",
      strength: "120 - 150 kg Breakage Load"
    },
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "pigeon-safety-nets",
    slug: "pigeon-safety-nets",
    title: "Pigeon Safety Nets",
    shortDescription: "Keep balconies hygienic and clean. Prevent pigeon roosting, nesting, and droppings permanently.",
    fullDescription: "Pigeons are major carriers of pathogens and their droppings cause corrosive damage. Our specialized pigeon safety nets provide a permanent, non-lethal solution to keep pigeons out of balconies, utility shafts, and duct areas. Made with fine mesh sizes, they block birds of all sizes while letting in 100% light and ventilation.",
    iconName: "Bird",
    features: [
      "100% bird-exclusion efficiency",
      "Humane, non-lethal, eco-friendly solution",
      "Zero maintenance requirement",
      "Aesthetically discrete mesh design",
      "Weatherproof, waterproof, and heat resistant"
    ],
    specs: {
      material: "Garware High-Strength UV Copolymer",
      durability: "10+ Years Lifespan",
      warranty: "5 Years Warranty",
      strength: "95 kg Breakage Load"
    },
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1549488344-cbb6c34cf087?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "invisible-grills",
    slug: "invisible-grills",
    title: "Invisible Grills",
    shortDescription: "Modern substitute to heavy iron grills. Seamless views combined with ultra-high-grade stainless steel safety.",
    fullDescription: "Upgrade your balcony safety with invisible grills - the modern alternative to traditional bulky iron bars. Composed of 316 marine-grade stainless steel cables wrapped in a nano-nylon membrane, our invisible grills provide robust security against intrusion and falls without compromising building aesthetics, view, or emergency escape paths.",
    iconName: "EyeOff",
    features: [
      "Ultra-thin 316 Marine Grade Stainless Steel (SS) cables",
      "Supports integration with home security/alarm systems",
      "Anti-rust, anti-corrosion, zero maintenance",
      "Meets modern architectural and fire-safety regulations",
      "Perfect structural alignment (vertical or horizontal styles)"
    ],
    specs: {
      material: "SS 316 Marine Grade Wire with Nano Nylon coating",
      durability: "15+ Years Lifespan",
      warranty: "7 Years Comprehensive Warranty",
      strength: "Up to 400 kg Tensile Strength"
    },
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "children-safety-nets",
    slug: "children-safety-nets",
    title: "Children Safety Nets",
    shortDescription: "Specialized double-anchored heavy-duty nets to protect active kids in windows and balconies.",
    fullDescription: "Kids are naturally curious and love exploring high places. Our children safety nets are designed with an extra layer of structural reinforcement and double-anchored wall joints. With a narrower mesh configuration and high-density impact absorption, these nets provide total peace of mind for parents living in high-rise buildings.",
    iconName: "Smile",
    features: [
      "Ultra-dense mesh grid to prevent small limbs or toys from slipping",
      "Double anchor points for maximum structural load distribution",
      "Child-safe soft materials - no sharp nodes or wire edges",
      "Fire-retardant and highly elastic materials",
      "Certified safe by high-rise engineering standards"
    ],
    specs: {
      material: "Nylon 6 Core / Braided Multifilament",
      durability: "7+ Years Lifespan",
      warranty: "5 Years Warranty",
      strength: "160 kg Tensile Capacity"
    },
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "monkey-safety-nets",
    slug: "monkey-safety-nets",
    title: "Monkey Safety Nets",
    shortDescription: "Extremely heavy-gauge mesh barriers to deter monkeys and wild pests from entering balconies.",
    fullDescription: "In areas with frequent monkey activity, standard nets can easily get torn or damaged. Our monkey safety nets are built with thick-gauge, reinforced copolymer wire mesh that is highly bite-resistant and claw-resistant. These nets prevent monkeys from entering balconies, damaging crops/plants, and causing safety concerns, without causing harm to the animals.",
    iconName: "Activity",
    features: [
      "Super heavy-duty 2.5mm+ wire diameter",
      "Anti-bite and claw resistant design",
      "Heavy iron/steel framework options for extra rigidity",
      "Tension lock mechanism prevents sagging or slipping",
      "Non-harmful deterrent that respects animal safety"
    ],
    specs: {
      material: "Hardened Polyethylene / SS Core options",
      durability: "10+ Years Lifespan",
      warranty: "5 Years Warranty",
      strength: "250 kg Bite & Pull resistance"
    },
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1527137341206-1d164d1f278d?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "construction-safety-nets",
    slug: "construction-safety-nets",
    title: "Construction Safety Nets",
    shortDescription: "Industrial-grade debris containment and fall arrest nets for construction sites.",
    fullDescription: "Ensuring worker and pedestrian safety on active building sites is a regulatory and moral imperative. We supply and install heavy-duty debris nets and fall arrest nets compliant with national and international occupational safety standards. These prevent heavy tool drops, loose building materials, or worker falls from height.",
    iconName: "HardHat",
    features: [
      "OSHA and EN-standard compliant manufacturing",
      "Excellent shock absorption and load distribution capacity",
      "Includes fine-debris mesh underlay to catch nails and dust",
      "Chemical resistant, acid proof, and weather durable",
      "Available for temporary hire or permanent purchase & install"
    ],
    specs: {
      material: "High-Strength Polypropylene Multifilament (PP)",
      durability: "Project-based heavy reusable lifespan",
      warranty: "Industrial Certification Approved",
      strength: "600 kg Impact Force capacity"
    },
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "sports-nets",
    slug: "sports-nets",
    title: "Sports Nets",
    shortDescription: "Premium containment boundary nets for tennis courts, football turf, and basketball arenas.",
    fullDescription: "We construct durable boundary nets for modern sports fields and backyard play arenas. Designed to withstand repetitive, high-velocity ball impacts, our nets keep sports balls contained in the court area, preventing window damage or traffic interference.",
    iconName: "Trophy",
    features: [
      "Custom mesh sizing depending on the sport",
      "High impact resistance & knot strength stability",
      "Weather-treated for outdoor sports conditions",
      "Heavy duty poles and wire rope suspensions",
      "Sleek and professional arena styling"
    ],
    specs: {
      material: "Polyester / Nylon Knotted Cord",
      durability: "6+ Years Outdoor Lifespan",
      warranty: "3 Years Structural Warranty",
      strength: "180 kg Impact Strength"
    },
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "bird-spikes",
    slug: "bird-spikes",
    title: "Bird Spikes",
    shortDescription: "Polycarbonate and stainless steel spikes that block birds from sitting on parapets, AC units, and pipes.",
    fullDescription: "For narrow ledges, pipes, air conditioning outdoor units, and signage boards, nets might not be practical. Our premium bird spikes provide a humane, mechanical barrier. They prevent pigeons, crows, and other birds from landing, nesting, or perching on horizontal architectural elements, without causing physical injury.",
    iconName: "Zap",
    features: [
      "SS-316 high-grade spikes set on UV polycarbonate base",
      "Virtually invisible from ground level",
      "Permanent solution - zero moving parts, zero rust",
      "Saves thousands in exterior window cleaning costs",
      "Glues easily to concrete, wood, metal, and glass surfaces"
    ],
    specs: {
      material: "Stainless Steel Spikes + UV Polycarbonate Base",
      durability: "12+ Years Lifespan",
      warranty: "5 Years Anti-Rust Warranty",
      strength: "Mechanical Landing Barrier"
    },
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1599809275671-b5941cabc7a5?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "bird-protection-nets",
    slug: "bird-protection-nets",
    title: "Bird Protection Nets",
    shortDescription: "Complete mesh barriers for open shafts and gardens to exclude birds of all types.",
    fullDescription: "Protect your commercial gardens, open courtyards, and window wells from birds. Our bird protection nets use durable, lightweight, translucent netting that creates a complete physical barrier to keep out crows, pigeons, sparrows, and other avian intruders.",
    iconName: "Bird",
    features: [
      "Complete exclusion of small and large birds",
      "Allows full passage of wind, light, and rain",
      "Sleek and aesthetically minor visual profile",
      "No chemical deterrents, eco-friendly design",
      "Custom installation frameworks for complex gaps"
    ],
    specs: {
      material: "Garware Copolymer Nylon",
      durability: "8+ Years Lifespan",
      warranty: "4 Years Warranty",
      strength: "90 kg Tensile Capacity"
    },
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "cricket-nets",
    slug: "cricket-nets",
    title: "Cricket Practice Nets",
    shortDescription: "Heavy-duty practice cage nets for schools, training clubs, and residential rooftops.",
    fullDescription: "We install professional-grade cricket net cages for practice and training sessions. Ideal for building rooftops, sports clubs, schools, and apartment backyards, these nets contain high-speed leather cricket ball drives, ensuring complete safety for the surrounding area.",
    iconName: "Trophy",
    features: [
      "Impact absorbent heavy-knotted nylon mesh",
      "Complete cage styling (sides + top ceiling protection)",
      "Corrosion-resistant steel poles and secure wire tensioning",
      "Durable mats and layout accessories compatible",
      "Tailored shapes for rooftop and backyard constraints"
    ],
    specs: {
      material: "Braided Nylon / HDPE 18-36ply",
      durability: "5+ Years Lifespan",
      warranty: "3 Years Warranty",
      strength: "220 kg Ball Impact rating"
    },
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "duct-area-safety-nets",
    slug: "duct-area-safety-nets",
    title: "Duct Area Safety Nets",
    shortDescription: "Complete mesh coverage for vertical duct shafts and building ventilation openings to prevent bird roosting.",
    fullDescription: "Duct areas in large residential societies are major nesting hubs for pigeons, leading to toxic air quality and heavy building maintenance costs. We install custom vertical safety nets across high-rise building ducts to close off bird access points completely, keeping the shafts pristine.",
    iconName: "Building",
    features: [
      "Prevents birds from nesting inside building ventilation areas",
      "Secured with high-strength anchors on concrete structures",
      "Rust-proof fittings designed for narrow, high-altitude installations",
      "Maintains ventilation and daylight in interior bathrooms/kitchens",
      "Provides secondary safety cover for falling tools or debris"
    ],
    specs: {
      material: "High Strength HDPE / Garware Monofilament",
      durability: "10+ Years Lifespan",
      warranty: "5 Years Warranty",
      strength: "140 kg Tensile Capacity"
    },
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "industrial-safety-nets",
    slug: "industrial-safety-nets",
    title: "Industrial Safety Nets",
    shortDescription: "Heavy safety barrier nets for industrial roofs, logistics warehouses, and factories.",
    fullDescription: "Ensure warehouse safety compliance. Our industrial safety nets block falling items from high storage racks and secure roofing areas, preventing workers from falls through fragile skylights or roof sheets during repairs.",
    iconName: "Factory",
    features: [
      "High structural load capacity for warehouses",
      "Tested to meet industrial OSHA standards",
      "Flame-retardant and chemical-resistant features",
      "Prevents falls during industrial roof maintenance",
      "Durable support ropes and dynamic steel tensioning"
    ],
    specs: {
      material: "High-Tenacity Polypropylene Multifilament (HTPP)",
      durability: "8+ Years Lifespan",
      warranty: "5 Years Certified Warranty",
      strength: "500 kg Load Support"
    },
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
    }
  }
];

// Helper function to map string names to Lucide Icon components
export const getServiceIcon = (name: string): LucideIcon => {
  const icons: { [key: string]: LucideIcon } = {
    Shield,
    Bird,
    EyeOff,
    Smile,
    Activity,
    HardHat,
    Trophy,
    Zap,
    Building,
    Factory
  };
  return icons[name] || Shield;
};
