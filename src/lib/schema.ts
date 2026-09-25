import { BUSINESS } from "@/data/business";
import type { Service, Location, FAQ, BreadcrumbItem } from "@/types";

const SITE_URL = "https://blueroseauto.com";

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
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "17:00" },
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
    ],
    image: `${SITE_URL}/images/og-default.jpg`,
    logo: `${SITE_URL}/images/logo.svg`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card, Debit Card",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible Entrance", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible Parking", value: true },
    ],
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
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      geoRadius: "50000",
    },
    serviceType: service.name,
    url: `${SITE_URL}/services/${service.slug}/`,
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
