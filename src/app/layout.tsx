import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import { buildLocalBusinessSchema, buildWebsiteSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const SITE_URL = "https://blueroseauto.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Blue Rose Wraps & Graphics | Vehicle Wraps & Graphics in Eugene–Springfield, OR",
    template: "%s | Blue Rose Wraps",
  },
  description:
    "Springfield's premier vehicle wrap studio. Full wraps, color changes, fleet graphics, storefront signage, and commercial branding. Serving Eugene, Springfield & all of Lane County.",
  keywords: [
    "vehicle wraps Eugene OR",
    "car wrap Springfield OR",
    "fleet wraps Lane County",
    "color change wrap Eugene",
    "commercial vehicle graphics Oregon",
  ],
  authors: [{ name: "Blue Rose Wraps & Graphics" }],
  creator: "Blue Rose Wraps & Graphics",
  publisher: "Blue Rose Wraps & Graphics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Blue Rose Wraps & Graphics",
    title: "Blue Rose Wraps & Graphics | Vehicle Wraps & Graphics",
    description:
      "Springfield's premier vehicle wrap studio. Full wraps, color changes, fleet graphics, and commercial branding. Serving Eugene, Springfield & all of Lane County.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Blue Rose Wraps & Graphics — Springfield, OR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Rose Wraps & Graphics | Vehicle Wraps & Graphics",
    description:
      "Springfield's premier vehicle wrap studio. Full wraps, color changes, fleet graphics, and commercial branding.",
    images: ["/images/og-default.jpg"],
  },
  alternates: { canonical: SITE_URL },
  verification: {
    google: "", // ← paste GSC verification token here
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = buildLocalBusinessSchema();
  const websiteSchema = buildWebsiteSchema();

  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-[#0A0A0B] text-[#F5F5F5]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#E91E8C] focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
