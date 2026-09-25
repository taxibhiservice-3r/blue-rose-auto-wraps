import { BUSINESS } from "@/data/business";
import type { Service, Location, FAQ, BreadcrumbItem } from "@/types";

const SITE_URL = "https://www.bluerosewrapsandgraphics.com";

const logoImageObject = {
  "@type": "ImageObject",
  "@id": `${SITE_URL}/#logo`,
  url: `${SITE_URL}/images/Blue-Rose-Auto.webp`,
  contentUrl: `${SITE_URL}/images/Blue-Rose-Auto.webp`,
  width: 512,
  height: 512,
  caption: BUSINESS.name,
};

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveBusiness"],
    "@id": `${SITE_URL}/#wraps-business`,
    name: BUSINESS.name,
    legalName: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE_URL,
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email,
    foundingDate: BUSINESS.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS.address.street}, ${BUSINESS.address.suite}`,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.stateAbbr,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    areaServed: BUSINESS.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Lane County",
        containedInPlace: { "@type": "State", name: "Oregon" },
      },
    })),
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.youtube,
      BUSINESS.gbpUrl,
    ],
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/og-default.jpg`,
      width: 1200,
      height: 630,
    },
    logo: logoImageObject,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card, Debit Card, Cash, Check",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible Entrance", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible Parking", value: true },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vehicle Wrap & Graphics Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Vehicle Wraps" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fleet Vehicle Wraps" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Color Change Wraps" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Vehicle Graphics" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storefront & Window Graphics" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paint Protection Film" } },
      ],
    },
    parentOrganization: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#parent-org`,
      name: BUSINESS.parentOrganization.name,
      url: BUSINESS.parentOrganization.url,
    },
    department: [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#collision-business`,
        name: BUSINESS.siblingBusiness.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${BUSINESS.address.street}, ${BUSINESS.siblingBusiness.suite}`,
          addressLocality: BUSINESS.address.city,
          addressRegion: BUSINESS.address.stateAbbr,
          postalCode: BUSINESS.address.zip,
          addressCountry: BUSINESS.address.country,
        },
        url: BUSINESS.siblingBusiness.url,
      },
    ],
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: logoImageObject,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phoneRaw,
      contactType: "customer service",
      areaServed: "US-OR",
      availableLanguage: "English",
      hoursAvailable: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "10:00",
          closes: "17:00",
        },
      ],
    },
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.youtube,
      BUSINESS.gbpUrl,
    ],
  };
}

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}/#service`,
    name: service.name,
    description: service.intro,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#wraps-business`,
      name: BUSINESS.name,
      telephone: BUSINESS.phoneRaw,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      geoRadius: "80467",
    },
    serviceType: service.name,
    category: service.category,
    url: `${SITE_URL}/services/${service.slug}/`,
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/get-a-quote`,
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
      result: { "@type": "Reservation", name: "Free Quote Request" },
    },
  };
}

export function buildLocationSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/locations/${location.slug}/#location-service`,
    name: `Vehicle Wraps & Graphics in ${location.city}, ${location.stateAbbr}`,
    description: location.intro,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#wraps-business`,
      name: BUSINESS.name,
      telephone: BUSINESS.phoneRaw,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.county,
        containedInPlace: { "@type": "State", name: location.state },
      },
    },
    url: `${SITE_URL}/locations/${location.slug}/`,
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/get-a-quote`,
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
      result: { "@type": "Reservation", name: "Free Quote Request" },
    },
  };
}

export function buildFaqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS.name,
    url: SITE_URL,
    description: BUSINESS.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
