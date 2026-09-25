import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = buildPageMetadata({
  title: "Vehicle Wrap Portfolio — Blue Rose Wraps & Graphics, Springfield OR",
  description:
    "Real vehicle wraps and graphics projects by Blue Rose Wraps & Graphics in Springfield, OR. Full wraps, fleet graphics, color changes, and commercial signage serving Eugene and Lane County.",
  canonical: "https://blueroseauto.com/portfolio",
});

const BREADCRUMBS = [
  { name: "Home", url: "https://blueroseauto.com" },
  { name: "Portfolio", url: "https://blueroseauto.com/portfolio" },
];

const SERVICE_FILTERS = SERVICES.filter((s) => s.featured).map((s) => ({
  label: s.shortName,
  slug: s.slug,
}));

export default function PortfolioPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-16 px-4 bg-[#0A0A0B] border-b border-[#2C2D31]">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={BREADCRUMBS} />
          <div className="mt-6">
            <div className="text-[#E91E8C] text-sm font-semibold uppercase tracking-widest mb-3">Our Work</div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#F5F5F5] mb-4">
              Portfolio
            </h1>
            <p className="text-xl text-[#A0A0A8] max-w-2xl leading-relaxed">
              Real projects. Real vehicles. Real results. Every wrap you see here was designed and installed at our Springfield shop.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio placeholder */}
      <section className="py-20 px-4 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button className="px-4 py-2 rounded-full text-sm font-semibold text-white gradient-brand">
              All
            </button>
            {SERVICE_FILTERS.map((f) => (
              <button
                key={f.slug}
                className="px-4 py-2 rounded-full text-sm font-medium text-[#A0A0A8] bg-[#1A1B1E] border border-[#2C2D31] hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors"
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Portfolio coming soon state */}
          <div className="text-center py-24 bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl">
            <div className="text-5xl mb-6" aria-hidden="true">📸</div>
            <h2 className="font-display text-3xl font-bold text-[#F5F5F5] mb-4">
              Portfolio Loading Soon
            </h2>
            <p className="text-[#A0A0A8] max-w-md mx-auto mb-6 leading-relaxed">
              We&apos;re photographing our completed projects and will have them published here shortly. In the meantime, check our Instagram for real completed work — or call us and we&apos;ll walk you through recent jobs directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/blueroseauto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity"
              >
                See Work on Instagram
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-[#F5F5F5] border border-[#3C3D41] hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* What to expect */}
          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-[#F5F5F5] mb-8 text-center">
              What We&apos;ll Show You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.filter((s) => s.featured).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-[#1A1B1E] border border-[#2C2D31] rounded-xl p-5 hover:border-[#E91E8C]/50 transition-all"
                >
                  <div className="text-2xl mb-3" aria-hidden="true">{s.icon}</div>
                  <h3 className="font-semibold text-[#F5F5F5] mb-1">{s.name}</h3>
                  <p className="text-xs text-[#A0A0A8]">{s.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="gradient" heading="Don't wait for the portfolio." subheading="Call or request a quote — we'll describe recent projects specific to your vehicle type and needs." />
    </>
  );
}
