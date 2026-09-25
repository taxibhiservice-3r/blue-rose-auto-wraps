import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/data/locations";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import { BUSINESS } from "@/data/business";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Vehicle Wrap Service Areas in Lane County, OR | Blue Rose Wraps",
  description:
    "Blue Rose Wraps & Graphics serves Eugene, Springfield, Cottage Grove, Creswell, Junction City, Coburg, Veneta, and 4 more Lane County communities from our Springfield shop.",
  canonical: "https://blueroseauto.com/locations",
});

const BREADCRUMBS = [
  { name: "Home", url: "https://blueroseauto.com" },
  { name: "Service Areas", url: "https://blueroseauto.com/locations" },
];

export default function LocationsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-16 px-4 bg-[#0A0A0B] border-b border-[#2C2D31]">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={BREADCRUMBS} />
          <div className="mt-6">
            <div className="text-[#E91E8C] text-sm font-semibold uppercase tracking-widest mb-3">Service Areas</div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#F5F5F5] mb-4">
              Serving All of Lane County
            </h1>
            <p className="text-[#A0A0A8] text-lg max-w-2xl">
              One Springfield shop serving 11 communities. Most clients are under 30 minutes from our door at 3436 Olympic St, Suite 300.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl p-7 hover:border-[#E91E8C]/50 hover:bg-[#1E1F24] transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-[#F5F5F5]">
                      {loc.city}
                    </h2>
                    <p className="text-sm text-[#6B6B73]">{loc.county}, {loc.stateAbbr}</p>
                  </div>
                  {loc.driveMiles === 0 ? (
                    <span className="shrink-0 inline-flex items-center gap-1.5 text-xs text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-1 rounded-full font-semibold">
                      <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" aria-hidden="true" />
                      Our Shop
                    </span>
                  ) : (
                    <span className="shrink-0 text-xs text-[#6B6B73] bg-[#232427] px-2.5 py-1 rounded-full">
                      {loc.driveTime}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#A0A0A8] leading-relaxed line-clamp-3 mb-5">
                  {loc.intro}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {loc.zipCodes.slice(0, 3).map((zip) => (
                    <span key={zip} className="text-xs bg-[#232427] text-[#6B6B73] px-2.5 py-1 rounded-full">
                      {zip}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[#E91E8C] text-sm font-semibold group-hover:gap-4 transition-all">
                  Wraps in {loc.city}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop address */}
      <section className="py-12 px-4 bg-[#1A1B1E] border-y border-[#2C2D31]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-[#F5F5F5] mb-3">Our Shop</h2>
          <address className="not-italic text-[#A0A0A8] mb-4">
            {BUSINESS.address.street}, {BUSINESS.address.suite}<br />
            {BUSINESS.address.city}, {BUSINESS.address.stateAbbr} {BUSINESS.address.zip}
          </address>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BUSINESS.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[#F5F5F5] border border-[#2C2D31] hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {BUSINESS.phone}
            </a>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white gradient-brand hover:opacity-90 transition-opacity text-sm font-bold"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
