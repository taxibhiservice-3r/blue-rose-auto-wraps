export type ServiceCategory =
  | "vehicle-wraps"
  | "commercial-fleet"
  | "specialty"
  | "graphics-decals"
  | "signage-print"
  | "design-install";

export interface ServiceStep {
  step: string;
  detail: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: ServiceCategory;
  tagline: string;
  intro: string;
  body: string;
  benefits: string[];
  process: ServiceStep[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  featured: boolean;
  icon: string;
}

export interface LocationNeighborhood {
  name: string;
  note?: string;
}

export interface Location {
  city: string;
  slug: string;
  state: string;
  stateAbbr: string;
  county: string;
  zipCodes: string[];
  driveTime: string;
  driveMiles: number;
  intro: string;
  body: string;
  neighborhoods: LocationNeighborhood[];
  popularServiceSlugs: string[];
  landmarks: string[];
  metaTitle: string;
  metaDescription: string;
  lat?: number;
  lng?: number;
}

export interface FAQ {
  question: string;
  answer: string;
  category: "pricing" | "process" | "materials" | "care" | "fleet" | "general";
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  vehicleType: string;
  serviceSlug: string;
  city: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  featured: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}
