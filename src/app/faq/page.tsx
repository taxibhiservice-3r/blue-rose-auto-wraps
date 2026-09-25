import type { Metadata } from "next";
import { FAQS, getFaqsByCategory } from "@/data/faqs";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Breadcrumb from "@/components/sections/Breadcrumb";
import { buildPageMetadata } from "@/lib/metadata";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Vehicle Wrap FAQ — Eugene & Springfield, OR | Blue Rose Wraps",
  description:
    "Answers to the most common vehicle wrap questions: cost, lifespan, care, fleet programs, paint safety, and more. Blue Rose Wraps & Graphics — Springfield, OR.",
  canonical: "https://www.bluerosewrapsandgraphics.com/faq",
});

const BREADCRUMBS = [
  { name: "Home", url: "https://www.bluerosewrapsandgraphics.com" },
  { name: "FAQ", url: "https://www.bluerosewrapsandgraphics.com/faq" },
];

const FAQ_SECTIONS = [
  { key: "pricing" as const, label: "Pricing & Cost" },
  { key: "process" as const, label: "Process & Turnaround" },
  { key: "materials" as const, label: "Materials & Lifespan" },
  { key: "care" as const, label: "Care & Maintenance" },
  { key: "fleet" as const, label: "Fleet & Commercial" },
  { key: "general" as const, label: "General Questions" },
];

export default function FAQPage() {
  const faqSchema = buildFaqSchema(FAQS);
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-16 px-4 bg-[#0A0A0B] border-b border-[#2C2D31]">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb items={BREADCRUMBS} />
          <div className="mt-6">
            <div className="text-[#E91E8C] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#F5F5F5] mb-4">
              Vehicle Wrap<br />Questions Answered
            </h1>
            <p className="text-[#A0A0A8] text-lg max-w-xl">
              Straight answers on cost, lifespan, care, fleet programs, and everything else you should know before committing to a wrap.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-14">
        {FAQ_SECTIONS.map((section) => {
          const sectionFaqs = getFaqsByCategory(section.key);
          if (sectionFaqs.length === 0) return null;
          return (
            <section key={section.key} id={section.key}>
              <h2 className="font-display text-2xl font-bold text-[#F5F5F5] mb-5 pb-3 border-b border-[#2C2D31]">
                {section.label}
              </h2>
              <FAQAccordion faqs={sectionFaqs} />
            </section>
          );
        })}
      </div>

      <CTASection variant="dark" heading="Still have questions?" subheading="Call us or request a free quote — we'll answer everything specific to your vehicle and project." />
    </>
  );
}
