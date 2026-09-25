export const BUSINESS = {
  name: "Blue Rose Wraps & Graphics",
  shortName: "Blue Rose Wraps",
  tagline: "Springfield's Premier Vehicle Wrap & Graphics Studio",
  description:
    "Blue Rose Wraps & Graphics delivers precision vehicle wraps, commercial fleet branding, custom graphics, and storefront signage throughout the Eugene–Springfield metro and surrounding Lane County communities.",
  address: {
    street: "3436 Olympic St",
    suite: "Suite 300",
    city: "Springfield",
    state: "OR",
    stateAbbr: "OR",
    zip: "97478",
    county: "Lane County",
    country: "US",
    countryName: "United States",
    full: "3436 Olympic St, Suite 300, Springfield, OR 97478",
    display: "3436 Olympic St Ste 300\nSpringfield, OR 97478",
  },
  phone: "(541) 520-3807",
  phoneRaw: "+15415203807",
  phoneTel: "tel:+15415203807",
  email: "info@blueroseauto.com",
  website: "https://blueroseauto.com",
  domain: "blueroseauto.com",

  hours: {
    monday:    { open: "08:00", close: "17:00", label: "8:00 AM – 5:00 PM" },
    tuesday:   { open: "08:00", close: "17:00", label: "8:00 AM – 5:00 PM" },
    wednesday: { open: "08:00", close: "17:00", label: "8:00 AM – 5:00 PM" },
    thursday:  { open: "08:00", close: "17:00", label: "8:00 AM – 5:00 PM" },
    friday:    { open: "08:00", close: "17:00", label: "8:00 AM – 5:00 PM" },
    saturday:  { open: "10:00", close: "17:00", label: "10:00 AM – 5:00 PM" },
    sunday:    { open: null,    close: null,    label: "Closed" },
  },

  social: {
    facebook:  "https://facebook.com/BlueRoseAuto",
    instagram: "https://instagram.com/blueroseauto",
    youtube:   "https://youtube.com/@BLUEROSEAUTO",
  },

  geo: {
    latitude:  44.0429,
    longitude: -122.9995,
  },

  serviceArea: [
    "Eugene",
    "Springfield",
    "Santa Clara",
    "Coburg",
    "Lowell",
    "Veneta",
    "Creswell",
    "Harrisburg",
    "Cottage Grove",
    "Junction City",
    "North Springfield",
  ],

  amenities: [
    "Wheelchair-accessible entrance",
    "Wheelchair-accessible parking",
    "Credit and debit cards accepted",
  ],

  founded: "2018",

  gbpUrl: "https://g.page/blueroseauto",

  siblingBusiness: {
    name:  "Blue Rose Auto Body & Collision",
    suite: "Suite 200",
    url:   "https://blueroseauto.com/collision-repair-eugene-or/",
    description:
      "Full-service auto body and collision repair, operating alongside Blue Rose Wraps & Graphics at the same Springfield location.",
  },

  parentOrganization: {
    name: "Blue Rose Auto Care & Repair Services",
    url:  "https://blueroseauto.com",
  },
} as const;

export type BusinessData = typeof BUSINESS;
