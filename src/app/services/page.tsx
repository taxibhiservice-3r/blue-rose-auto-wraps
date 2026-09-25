import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, SERVICE_CATEGORIES } from "@/data/services";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Vehicle Wrap & Graphics Services in Eugene–Springfield, OR",
  description:
    "Full vehicle wraps, partial wraps, color change wraps, fleet graphics, storefront signage, and more. Blue Rose Wraps & Graphics — Springfield, OR. Serving all of Lane County.",
  canonical: "https://blueroseauto.com/services",
});

const BREADCRUMBS = [
  { name: "Home", url: "https://blueroseauto.com" },
  { name: "Services", url: "https://blueroseauto.com/services" },
];

export default function ServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS);

  const categories = Object.entries(SERVICE_CATEGORIES) as [
    keyof typeof SERVICE_CATEGORIES,
    { label: string; description: string }
  ][];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-[#0A0A0B] border-b border-[#2C2D31]">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={BREADCRUMBS} />
          <div className="mt-6">
            <div className="text-[#E91E8C] text-sm font-semibold uppercase tracking-widest mb-3">All Services</div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#F5F5F5] mb-4">
              Wraps, Graphics &amp; Signage
            </h1>
            <p className="text-[#A0A0A8] text-lg max-w-2xl">
              Every vehicle wrap, commercial graphics, and signage service we offer — all produced and installed at our Springfield, OR shop.
            </p>
          </div>
        </div>
      </section>

      {/* Services by category */}
      <section className="py-16 px-4 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto space-y-16">
          {categories.map(([catKey, cat]) => {
            const catServices = SERVICES.filter((s) => s.category === catKey);
            if (catServices.length === 0) return null;
            return (
              <div key={catKey} id={catKey}>
                <div className="mb-8 pb-4 border-b border-[#2C2D31]">
                  <h2 className="font-display text-3xl font-bold text-[#F5F5F5] mb-1">{cat.label}</h2>
                  <p className="text-[#A0A0A8]">{cat.description}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {catServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl p-6 hover:border-[#E91E8C]/50 hover:bg-[#1E1F24] transition-all duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl shrink-0" aria-hidden="true">{service.icon}</span>
                        <div className="min-w-0">
                          <h3 className="font-display text-lg font-bold text-[#F5F5F5] mb-1 leading-snug">
                            {service.name}
                          </h3>
                          <p className="text-sm text-[#A0A0A8] leading-relaxed line-clamp-2 mb-4">
                            {service.tagline}
                          </p>
                          <div className="flex items-center gap-1.5 text-[#E91E8C] text-sm font-semibold">
                            Details
                            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection variant="gradient" />
    </>
  );
}
