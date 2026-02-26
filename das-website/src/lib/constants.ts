// TypeScript interfaces

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

// Image asset mapping — logical names to public file paths
// Images extracted from DAS PROFILE-2025 company brochure (analyzed via Python/Pillow):
// 1: (1008x633) Company branding/logo page — landscape, mixed colors
// 2: (470x259) Workshop overview — landscape, grey/metallic
// 3: (1202x481) Workshop wide panoramic — warm/red tones, dark → HERO
// 4: (1003x765) Group photo with people — warm, skin tones → ABOUT BANNER
// 5: (587x375) Blue-dominant metallic equipment → AUTO ELECTRICAL
// 6: (1653x955) High-res workshop with people → MECHANICAL REPAIRS
// 7: (588x448) Person working on vehicle → VEHICLE SERVICING
// 8: (1653x986) High-res vehicles/fleet scene → FLEET MANAGEMENT
// 9: (1653x942) High-res workshop equipment, cool+warm → DIAGNOSTICS
// 10: (157x99) Tiny/blank — not usable
// 11: (470x285) Grey/metallic landscape — services overview graphic
// 12: (224x224) Small grey square — placeholder
// 13: (395x408) Square portrait, skin tones → TEAM MEMBER 1
// 14: (398x410) Square portrait, warm → TEAM MEMBER 2
// 15: (386x399) Square portrait, strong skin tones → TEAM MEMBER 3
// 16: (386x399) Square portrait, skin tones → TEAM MEMBER 4 / additional
// 17: (1022x852) Large dark workshop scene → BRAKES / engine bay work
// 18: (52x28) Tiny/blank — not usable
// 19: (51x26) Tiny/blank — not usable
// 20: (224x224) Small grey square — placeholder

export const IMAGE_ASSETS: Record<string, string> = {
  logo: '/images/DAS__PROFILE-2025-images-2.png',
  vehicleServicing: '/images/DAS  PROFILE-2025-images-7.jpg',
  heroBackground: '/images/DAS  PROFILE-2025-images-3.jpg',
  aboutBanner: '/images/DAS  PROFILE-2025-images-4.jpg',
  mechanicalRepairs: '/images/DAS  PROFILE-2025-images-6.jpg',
  autoElectrical: '/images/DAS  PROFILE-2025-images-5.jpg',
  diagnostics: '/images/DAS  PROFILE-2025-images-9.jpg',
  fleetManagement: '/images/DAS  PROFILE-2025-images-8.jpg',
  airConditioning: '/images/DAS  PROFILE-2025-images-2.jpg',
  brakes: '/images/DAS  PROFILE-2025-images-17.jpg',
  teamPhoto1: '/images/DAS  PROFILE-2025-images-13.jpg',
  teamPhoto2: '/images/DAS  PROFILE-2025-images-14.jpg',
  teamPhoto3: '/images/DAS  PROFILE-2025-images-15.jpg',
  teamPhoto4: '/images/DAS  PROFILE-2025-images-16.jpg',
  servicesBanner: '/images/DAS  PROFILE-2025-images-1.jpg',
  contactBanner: '/images/DAS  PROFILE-2025-images-4.jpg',
  fleetBanner: '/images/DAS  PROFILE-2025-images-8.jpg',
  gallery1: '/images/DAS  PROFILE-2025-images-6.jpg',
  gallery2: '/images/DAS  PROFILE-2025-images-9.jpg',
  gallery3: '/images/DAS  PROFILE-2025-images-17.jpg',
  gallery4: '/images/DAS  PROFILE-2025-images-7.jpg',
};

// Navigation links

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Fleet Management', href: '/fleet-management' },
  { label: 'Contact', href: '/contact' },
];

// Services data

export const SERVICES: Service[] = [
  {
    id: 'mechanical-repairs',
    title: 'Mechanical Repairs',
    shortDescription: 'Comprehensive mechanical repair services for all vehicle makes and models.',
    fullDescription:
      'Our experienced technicians provide full mechanical repair services, from engine overhauls to suspension work. We use the latest diagnostic equipment and genuine parts to ensure your vehicle runs at peak performance.',
    features: [
      'Engine diagnostics and repair',
      'Suspension and steering',
      'Clutch and gearbox repairs',
      'Cooling system service',
      'Exhaust system repairs',
    ],
    image: IMAGE_ASSETS.mechanicalRepairs,
    icon: 'wrench',
  },
  {
    id: 'auto-electrical',
    title: 'Auto Electrical',
    shortDescription: 'Expert auto electrical diagnostics and repairs for modern vehicles.',
    fullDescription:
      'From starter motors to complex wiring harnesses, our auto electricians handle all electrical issues. We specialise in modern vehicle electronics, including ECU diagnostics and programming.',
    features: [
      'Starter motor and alternator repair',
      'Battery testing and replacement',
      'Wiring and harness repairs',
      'Lighting systems',
      'ECU diagnostics and programming',
    ],
    image: IMAGE_ASSETS.autoElectrical,
    icon: 'zap',
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics',
    shortDescription: 'Advanced vehicle diagnostics using state-of-the-art equipment.',
    fullDescription:
      'Our diagnostic services use the latest scan tools and software to accurately identify issues across all vehicle systems. We provide detailed reports and transparent recommendations for every diagnosis.',
    features: [
      'Full vehicle health checks',
      'Engine fault code reading',
      'Transmission diagnostics',
      'ABS and airbag system checks',
      'Performance tuning diagnostics',
    ],
    image: IMAGE_ASSETS.diagnostics,
    icon: 'search',
  },
  {
    id: 'air-conditioning',
    title: 'Air Conditioning',
    shortDescription: 'Complete automotive air conditioning service, repair, and re-gas.',
    fullDescription:
      'Keep cool with our full air conditioning services. We handle re-gassing, leak detection, compressor repairs, and complete system overhauls to keep your cabin comfortable year-round.',
    features: [
      'Air conditioning re-gas',
      'Leak detection and repair',
      'Compressor replacement',
      'Evaporator and condenser service',
      'Cabin air filter replacement',
    ],
    image: IMAGE_ASSETS.airConditioning,
    icon: 'thermometer',
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management',
    shortDescription: 'Dedicated fleet management solutions for businesses of all sizes.',
    fullDescription:
      'Our fleet management service helps businesses reduce costs and downtime. We provide scheduled maintenance, priority repairs, detailed reporting, and dedicated account management for your entire vehicle fleet.',
    features: [
      'Scheduled maintenance programs',
      'Priority breakdown response',
      'Cost tracking and reporting',
      'Fleet diagnostics',
      'Dedicated account management',
    ],
    image: IMAGE_ASSETS.fleetManagement,
    icon: 'truck',
  },
  {
    id: 'vehicle-servicing',
    title: 'Vehicle Servicing',
    shortDescription: 'Regular vehicle servicing to keep your car running smoothly and safely.',
    fullDescription:
      'Stay on top of your vehicle maintenance with our comprehensive servicing packages. From minor services to major overhauls, we follow manufacturer guidelines and use quality parts to maintain your warranty.',
    features: [
      'Minor and major services',
      'Oil and filter changes',
      'Brake fluid and coolant flush',
      'Manufacturer logbook servicing',
      'Pre-purchase inspections',
    ],
    image: IMAGE_ASSETS.vehicleServicing,
    icon: 'settings',
  },
  {
    id: 'brake-systems',
    title: 'Brake Systems',
    shortDescription: 'Professional brake inspection, repair, and replacement services.',
    fullDescription:
      'Your safety is our priority. We provide thorough brake inspections, pad and rotor replacements, brake fluid flushes, and ABS system repairs to ensure your vehicle stops safely every time.',
    features: [
      'Brake pad and rotor replacement',
      'Brake fluid flush',
      'ABS system diagnostics and repair',
      'Handbrake adjustment',
      'Brake line inspection and repair',
    ],
    image: IMAGE_ASSETS.brakes,
    icon: 'shield',
  },
];

// Team members data

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-member-1',
    name: 'Jermaine Nathanson',
    role: 'Aftersales Manager',
    image: IMAGE_ASSETS.teamPhoto3,
    bio: 'Jermaine remains dedicated and is an asset to the company. He works well with every person he comes into contact with and takes your personal needs seriously.',
  },
  {
    id: 'team-member-2',
    name: 'Shadreck Mwiza Simfukwe',
    role: 'Workshop Manager',
    image: IMAGE_ASSETS.teamPhoto2,
    bio: 'Shadreck oversees all workshop operations, ensuring every vehicle receives the highest standard of care and that turnaround times remain the fastest in the industry.',
  },
  {
    id: 'team-member-3',
    name: 'Michael Katebe',
    role: 'Workshop Foreman',
    image: IMAGE_ASSETS.teamPhoto1,
    bio: 'Michael leads our team of technicians on the workshop floor, bringing hands-on expertise and attention to detail to every repair and service job.',
  },
  {
    id: 'team-member-4',
    name: 'Jaydon Nathanson',
    role: 'Administration Manager',
    image: IMAGE_ASSETS.teamPhoto4,
    bio: 'Jaydon manages the administrative side of operations, ensuring seamless communication with clients and smooth day-to-day business processes.',
  },
];
