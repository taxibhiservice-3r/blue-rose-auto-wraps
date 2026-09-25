import type { Metadata } from "next";
import { BUSINESS } from "@/data/business";

const SITE_URL = "https://www.bluerosewrapsandgraphics.com";
const DEFAULT_OG_IMAGE = "/images/og-default.jpg";

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} | Vehicle Wraps & Graphics in Eugene–Springfield, OR`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description: BUSINESS.description,
  keywords: [
    "vehicle wraps Eugene OR",
    "car wrap Springfield OR",
    "fleet wraps Lane County",
    "color change wrap Eugene",
    "commercial vehicle graphics Oregon",
    "vinyl wrap near me",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Vehicle Wraps & Graphics`,
    description: BUSINESS.description,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${BUSINESS.name} — Springfield, OR` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Vehicle Wraps & Graphics`,
    description: BUSINESS.description,
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: { canonical: SITE_URL },
  verification: {
    google: "", // Add GSC verification token
  },
};

export function buildPageMetadata({
  title,
  description,
  canonical,
  ogImage,
  noIndex = false,
}: {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: ogImage ?? DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      title,
      description,
      images: [ogImage ?? DEFAULT_OG_IMAGE],
    },
  };
}
