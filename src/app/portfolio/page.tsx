import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Vehicle Wrap Portfolio — Blue Rose Wraps & Graphics, Springfield OR",
  description:
    "Real vehicle wraps and graphics projects by Blue Rose Wraps & Graphics in Springfield, OR. Full wraps, fleet graphics, color changes, commercial signage — serving Eugene and all of Lane County.",
  canonical: "https://www.bluerosewrapsandgraphics.com/portfolio",
});

const BREADCRUMBS = [
  { name: "Home", url: "https://www.bluerosewrapsandgraphics.com" },
  { name: "Portfolio", url: "https://www.bluerosewrapsandgraphics.com/portfolio" },
];

export default function PortfolioPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-12 px-4 bg-[#0A0A0B] border-b border-[#2C2D31]">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={BREADCRUMBS} />
          <div className="mt-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="text-[#E91E8C] text-sm font-semibold uppercase tracking-widest mb-3">Our Work</div>
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#F5F5F5] mb-4">
                Portfolio
              </h1>
              <p className="text-xl text-[#A0A0A8] max-w-2xl leading-relaxed">
                Real projects. Real vehicles. Every wrap you see here was designed and installed at our Springfield, OR shop.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <div className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-5 py-3 text-center">
                <div className="font-display text-2xl font-bold text-[#F5F5F5]">20+</div>
                <div className="text-xs text-[#6B6B73]">Projects shown</div>
              </div>
              <div className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-5 py-3 text-center">
                <div className="font-display text-2xl font-bold gradient-brand-text">100%</div>
                <div className="text-xs text-[#6B6B73]">Cast vinyl</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto">
          <PortfolioGrid />
        </div>
      </section>

      <CTASection
        variant="gradient"
        heading="Ready to be our next project?"
        subheading="Free estimates. No pressure. Springfield, OR — serving Eugene and all of Lane County."
        primaryLabel="Get a Free Quote"
      />
    </>
  );
}
