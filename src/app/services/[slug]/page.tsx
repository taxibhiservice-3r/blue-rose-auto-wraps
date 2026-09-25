import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, getServiceBySlug, SERVICE_CATEGORIES } from "@/data/services";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Breadcrumb from "@/components/sections/Breadcrumb";
import { BUSINESS } from "@/data/business";
import { buildServiceSchema, buildFaqSchema, buildBreadcrumbSchema } from "@/lib/schema";
import type { FAQ } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://blueroseauto.com/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://blueroseauto.com/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((s) => SERVICES.find((sv) => sv.slug === s))
    .filter(Boolean);

  const categoryLabel = SERVICE_CATEGORIES[service.category]?.label ?? "";

  const breadcrumbs = [
    { name: "Home", url: "https://blueroseauto.com" },
    { name: "Services", url: "https://blueroseauto.com/services" },
    { name: service.name, url: `https://blueroseauto.com/services/${slug}` },
  ];

  const serviceSchema = buildServiceSchema(service);
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);
  const faqItems: FAQ[] = service.faqs.map((f) => ({ question: f.q, answer: f.a, category: "general" as const }));
  const faqSchema = faqItems.length > 0 ? buildFaqSchema(faqItems) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-[#0A0A0B] border-b border-[#2C2D31]">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs} />
          <div className="mt-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl" aria-hidden="true">{service.icon}</span>
              <span className="text-sm font-semibold text-[#E91E8C] uppercase tracking-widest">{categoryLabel}</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#F5F5F5] mb-4">
              {service.name}
            </h1>
            <p className="text-xl text-[#A0A0A8] mb-6 max-w-2xl leading-relaxed">
              {service.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity"
              >
                Get a Free Quote
              </Link>
              <a
                href={BUSINESS.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[#F5F5F5] border border-[#3C3D41] hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Intro */}
            <section>
              <p className="text-lg text-[#A0A0A8] leading-relaxed mb-6 font-medium">{service.intro}</p>
              <div className="text-[#A0A0A8] leading-relaxed space-y-4">
                {service.body.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            {/* Benefits */}
            {service.benefits.length > 0 && (
              <section>
                <h2 className="font-display text-3xl font-bold text-[#F5F5F5] mb-6">Key Benefits</h2>
                <ul className="space-y-3">
                  {service.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#A0A0A8]">
                      <span className="w-5 h-5 rounded-full bg-[#E91E8C]/15 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                        <svg className="w-3 h-3 text-[#E91E8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Process */}
            {service.process.length > 0 && (
              <section>
                <h2 className="font-display text-3xl font-bold text-[#F5F5F5] mb-6">Our Process</h2>
                <ol className="space-y-4">
                  {service.process.map((step, idx) => (
                    <li key={idx} className="flex gap-5 bg-[#1A1B1E] border border-[#2C2D31] rounded-xl p-5">
                      <span className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center text-white text-sm font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-[#F5F5F5] mb-1">{step.step}</h3>
                        <p className="text-sm text-[#A0A0A8] leading-relaxed">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* FAQs */}
            {faqItems.length > 0 && (
              <section>
                <h2 className="font-display text-3xl font-bold text-[#F5F5F5] mb-6">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={faqItems} />
              </section>
            )}

            {/* Related services */}
            {relatedServices.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-bold text-[#F5F5F5] mb-5">Related Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedServices.map((rel) => rel && (
                    <Link
                      key={rel.slug}
                      href={`/services/${rel.slug}`}
                      className="group bg-[#1A1B1E] border border-[#2C2D31] rounded-xl p-5 hover:border-[#E91E8C]/50 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl" aria-hidden="true">{rel.icon}</span>
                        <h3 className="font-semibold text-[#F5F5F5]">{rel.name}</h3>
                      </div>
                      <p className="text-xs text-[#A0A0A8] line-clamp-2">{rel.tagline}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* CTA card */}
            <div className="bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl p-7 sticky top-24">
              <h3 className="font-display text-2xl font-bold text-[#F5F5F5] mb-2">
                Ready to start?
              </h3>
              <p className="text-sm text-[#A0A0A8] mb-6">
                Free quote on any {service.shortName.toLowerCase()} project. Springfield, OR.
              </p>
              <Link
                href="/get-a-quote"
                className="block text-center w-full px-6 py-3.5 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity mb-3"
              >
                Get a Free Quote
              </Link>
              <a
                href={BUSINESS.phoneTel}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-[#A0A0A8] border border-[#2C2D31] hover:text-[#F5F5F5] hover:border-[#3C3D41] transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS.phone}
              </a>

              <div className="mt-6 pt-6 border-t border-[#2C2D31] space-y-2 text-sm text-[#6B6B73]">
                <div className="flex gap-2">
                  <svg className="w-4 h-4 text-[#E91E8C] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>3436 Olympic St, Suite 300<br />Springfield, OR 97478</span>
                </div>
                <div>Mon–Fri 8AM–5PM · Sat 10AM–5PM</div>
              </div>
            </div>

            {/* Service area note */}
            <div className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl p-5 text-sm text-[#A0A0A8]">
              <p className="font-semibold text-[#F5F5F5] mb-2">Serving all of Lane County</p>
              <p>Eugene, Springfield, Cottage Grove, Creswell, Junction City, Coburg, Veneta, and more.</p>
              <Link href="/locations" className="text-[#E91E8C] text-xs mt-2 inline-block hover:underline">
                See all service areas →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <CTASection variant="dark" heading={`Get a quote on ${service.name.toLowerCase()}`} />
    </>
  );
}
