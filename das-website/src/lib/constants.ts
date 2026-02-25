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

export const IMAGE_ASSETS: Record<string, string> = {
  logo: '/images/DAS  PROFILE-2025-images-1.jpg',
  vehicleServicing: '/images/DAS  PROFILE-2025-images-2.jpg',
  heroBackground: '/images/DAS  PROFILE-2025-images-3.jpg',
  aboutBanner: '/images/DAS  PROFILE-2025-images-4.jpg',
  mechanicalRepairs: '/images/DAS  PROFILE-2025-images-5.jpg',
  autoElectrical: '/images/DAS  PROFILE-2025-images-6.jpg',
  diagnostics: '/images/DAS  PROFILE-2025-images-7.jpg',
  fleetManagement: '/images/DAS  PROFILE-2025-images-8.jpg',
  airConditioning: '/images/DAS  PROFILE-2025-images-9.jpg',
  brakes: '/images/DAS  PROFILE-2025-images-10.jpg',
  teamPhoto1: '/images/DAS  PROFILE-2025-images-11.jpg',
  teamPhoto2: '/images/DAS  PROFILE-2025-images-12.jpg',
  teamPhoto3: '/images/DAS  PROFILE-2025-images-13.jpg',
  servicesBanner: '/images/DAS  PROFILE-2025-images-14.jpg',
  contactBanner: '/images/DAS  PROFILE-2025-images-15.jpg',
  fleetBanner: '/images/DAS  PROFILE-2025-images-16.jpg',
  gallery1: '/images/DAS  PROFILE-2025-images-17.jpg',
  gallery2: '/images/DAS  PROFILE-2025-images-18.jpg',
  gallery3: '/images/DAS  PROFILE-2025-images-19.jpg',
  gallery4: '/images/DAS  PROFILE-2025-images-20.jpg',
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
    name: 'David Smith',
    role: 'Master Technician & Founder',
    image: IMAGE_ASSETS.teamPhoto1,
    bio: 'With over 25 years of experience in the automotive industry, David founded DAS to deliver honest, high-quality vehicle care to the community.',
  },
  {
    id: 'team-member-2',
    name: 'Andrew Mitchell',
    role: 'Senior Auto Electrician',
    image: IMAGE_ASSETS.teamPhoto2,
    bio: 'Andrew brings 20+ years of auto electrical expertise, specialising in modern vehicle electronics and diagnostic systems.',
  },
  {
    id: 'team-member-3',
    name: 'Steven Clarke',
    role: 'Fleet Manager & Senior Mechanic',
    image: IMAGE_ASSETS.teamPhoto3,
    bio: 'Steven manages our fleet operations and brings 30 years of mechanical experience, ensuring business clients receive dedicated, reliable service.',
  },
];
