import { 
  Shield, 
  Bird, 
  EyeOff, 
  Smile, 
  Activity, 
  Zap, 
  LucideIcon
} from "lucide-react";

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
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
    image: "/services/balcony-safety-nets.png",
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
      before: "/services/balcony-safety-nets.png",
      after: "/services/balcony-safety-nets.png"
    }
  },
  {
    id: "pigeon-safety-nets",
    slug: "pigeon-safety-nets",
    title: "Pigeon Safety Nets",
    shortDescription: "Keep balconies hygienic and clean. Prevent pigeon roosting, nesting, and droppings permanently.",
    fullDescription: "Pigeons are major carriers of pathogens and their droppings cause corrosive damage. Our specialized pigeon safety nets provide a permanent, non-lethal solution to keep pigeons out of balconies, utility shafts, and duct areas. Made with fine mesh sizes, they block birds of all sizes while letting in 100% light and ventilation.",
    iconName: "Bird",
    image: "/services/pigeon-safety-nets.png",
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
      before: "/services/pigeon-safety-nets.png",
      after: "/services/pigeon-safety-nets.png"
    }
  },
  {
    id: "invisible-grills",
    slug: "invisible-grills",
    title: "Invisible Grills",
    shortDescription: "Modern substitute to heavy iron grills. Seamless views combined with ultra-high-grade stainless steel safety.",
    fullDescription: "Upgrade your balcony safety with invisible grills - the modern alternative to traditional bulky iron bars. Composed of 316 marine-grade stainless steel cables wrapped in a nano-nylon membrane, our invisible grills provide robust security against intrusion and falls without compromising building aesthetics, view, or emergency escape paths.",
    iconName: "EyeOff",
    image: "/services/invisible-grills.png",
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
      before: "/services/invisible-grills.png",
      after: "/services/invisible-grills.png"
    }
  },
  {
    id: "children-safety-nets",
    slug: "children-safety-nets",
    title: "Children Safety Nets",
    shortDescription: "Specialized double-anchored heavy-duty nets to protect active kids in windows and balconies.",
    fullDescription: "Kids are naturally curious and love exploring high places. Our children safety nets are designed with an extra layer of structural reinforcement and double-anchored wall joints. With a narrower mesh configuration and high-density impact absorption, these nets provide total peace of mind for parents living in high-rise buildings.",
    iconName: "Smile",
    image: "/services/children-safety-net.png",
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
      before: "/services/children-safety-net.png",
      after: "/services/children-safety-net.png"
    }
  },
  {
    id: "monkey-safety-nets",
    slug: "monkey-safety-nets",
    title: "Monkey Safety Nets",
    shortDescription: "Extremely heavy-gauge mesh barriers to deter monkeys and wild pests from entering balconies.",
    fullDescription: "In areas with frequent monkey activity, standard nets can easily get torn or damaged. Our monkey safety nets are built with thick-gauge, reinforced copolymer wire mesh that is highly bite-resistant and claw-resistant. These nets prevent monkeys from entering balconies, damaging crops/plants, and causing safety concerns, without causing harm to the animals.",
    iconName: "Activity",
    image: "/services/monkey-safety-nets.png",
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
      before: "/services/monkey-safety-nets.png",
      after: "/services/monkey-safety-nets.png"
    }
  },
  {
    id: "bird-spikes",
    slug: "bird-spikes",
    title: "Bird Spikes",
    shortDescription: "Polycarbonate and stainless steel spikes that block birds from sitting on parapets, AC units, and pipes.",
    fullDescription: "For narrow ledges, pipes, air conditioning outdoor units, and signage boards, nets might not be practical. Our premium bird spikes provide a humane, mechanical barrier. They prevent pigeons, crows, and other birds from landing, nesting, or perching on horizontal architectural elements, without causing physical injury.",
    iconName: "Zap",
    image: "/services/bird-spikes.png",
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
      before: "/services/bird-spikes.png",
      after: "/services/bird-spikes.png"
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
    Zap
  };
  return icons[name] || Shield;
};
