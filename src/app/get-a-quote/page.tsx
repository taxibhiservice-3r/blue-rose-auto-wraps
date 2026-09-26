import type { Metadata } from "next";
import Breadcrumb from "@/components/sections/Breadcrumb";
import QuoteForm from "@/components/forms/QuoteForm";
import { BUSINESS } from "@/data/business";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Get a Free Vehicle Wrap Quote — Blue Rose Wraps, Springfield OR",
  description:
    "Request a free, no-obligation vehicle wrap quote from Blue Rose Wraps & Graphics in Springfield, OR. Full wraps, fleet programs, commercial graphics. Response within 1 business day.",
  canonical: "https://www.bluerosewrapsandgraphics.com/get-a-quote",
});

const BREADCRUMBS = [
  { name: "Home", url: "https://www.bluerosewrapsandgraphics.com" },
  { name: "Get a Quote", url: "https://www.bluerosewrapsandgraphics.com/get-a-quote" },
];

export default function GetAQuotePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-16 px-4 bg-[#0A0A0B] border-b border-[#2C2D31]">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb items={BREADCRUMBS} />
          <div className="mt-6">
            <div className="text-[#E91E8C] text-sm font-semibold uppercase tracking-widest mb-3">Free Quote</div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#F5F5F5] mb-4">
              Get a Free Wrap Quote
            </h1>
            <p className="text-xl text-[#A0A0A8] max-w-2xl">
              No pressure, no obligation. We respond within one business day with a detailed estimate for your specific vehicle and project.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Quote form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-[#F5F5F5] mb-4">Prefer to call?</h3>
              <a
                href={BUSINESS.phoneTel}
                className="flex items-center gap-3 text-[#E91E8C] font-semibold text-lg mb-4"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS.phone}
              </a>
              <dl className="space-y-1 text-xs text-[#6B6B73]">
                <div className="flex justify-between gap-3"><dt>Mon–Fri</dt><dd>8:00 AM – 5:00 PM</dd></div>
                <div className="flex justify-between gap-3"><dt>Saturday</dt><dd>10:00 AM – 5:00 PM</dd></div>
                <div className="flex justify-between gap-3"><dt>Sunday</dt><dd>Closed</dd></div>
              </dl>
            </div>

            <div className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl p-5 space-y-3 text-sm">
              <p className="font-semibold text-[#F5F5F5]">What to expect</p>
              {[
                "Response within 1 business day",
                "Detailed written estimate",
                "No obligation, no pressure",
                "Free design consultation included",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-[#A0A0A8]">
                  <svg className="w-4 h-4 text-[#E91E8C] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
