import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/sections/TrustBar";
import CTASection from "@/components/sections/CTASection";
import { getFeaturedServices } from "@/data/services";
import { BUSINESS } from "@/data/business";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Vehicle Wraps & Graphics in Eugene–Springfield, OR | Blue Rose Wraps",
  description:
    "Springfield's premier vehicle wrap studio. Full wraps, color changes, fleet graphics, storefront signage, and commercial branding. Serving Eugene, Springfield & all of Lane County. Free quotes.",
  canonical: "https://www.bluerosewrapsandgraphics.com",
});

const FEATURED_SERVICES = getFeaturedServices().slice(0, 6);

const SERVICE_STATS = [
  { value: "5–7", unit: "Years", label: "Wrap lifespan (cast vinyl)" },
  { value: "3–5", unit: "Days", label: "Typical full wrap turnaround" },
  { value: "11", unit: "Cities", label: "Service area coverage" },
  { value: "100%", unit: "Cast", label: "No budget calendered film" },
];

const INDUSTRIES = [
  { name: "HVAC & Plumbing", icon: "🔧" },
  { name: "Electrical Contractors", icon: "⚡" },
  { name: "Landscaping", icon: "🌿" },
  { name: "Real Estate", icon: "🏡" },
  { name: "Food & Beverage", icon: "🍽️" },
  { name: "Construction", icon: "🏗️" },
  { name: "Delivery & Logistics", icon: "📦" },
  { name: "Enthusiast Builds", icon: "🏁" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0B]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#E91E8C 1px, transparent 1px), linear-gradient(90deg, #E91E8C 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#E91E8C]/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1A1B1E] border border-[#2C2D31] rounded-full px-5 py-2 mb-8 text-sm text-[#A0A0A8]">
            <span className="w-2 h-2 bg-[#22C55E] rounded-full" aria-hidden="true" />
            <span>Springfield, OR — Serving all of Lane County</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-[#F5F5F5] leading-none mb-6">
            Vehicle Wraps
            <br />
            <span className="gradient-brand-text">That Get Noticed</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#A0A0A8] leading-relaxed mb-10">
            Springfield&apos;s precision wrap studio. Full wraps, color changes, fleet graphics, commercial branding, and storefront signage — all under one roof at 3436 Olympic St.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/get-a-quote"
              className="px-8 py-4 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity text-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-xl font-bold text-[#F5F5F5] border border-[#3C3D41] hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors text-lg"
            >
              View Portfolio
            </Link>
            <a
              href={BUSINESS.phoneTel}
              className="px-8 py-4 rounded-xl font-bold text-[#A0A0A8] hover:text-[#F5F5F5] transition-colors text-lg hidden sm:flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {BUSINESS.phone}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {SERVICE_STATS.map((stat) => (
              <div key={stat.label} className="bg-[#1A1B1E]/80 border border-[#2C2D31] rounded-2xl p-5">
                <div className="font-display text-3xl font-bold text-[#F5F5F5]">
                  {stat.value}{" "}
                  <span className="gradient-brand-text text-lg">{stat.unit}</span>
                </div>
                <div className="text-xs text-[#6B6B73] mt-1 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#E91E8C]/50" />
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────────────── */}
      <TrustBar />

      {/* ── FEATURED SERVICES ───────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#0A0A0B]" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-[#E91E8C] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</div>
              <h2 id="services-heading" className="font-display text-4xl sm:text-5xl font-bold text-[#F5F5F5]">
                Every wrap service,<br />one Springfield shop.
              </h2>
            </div>
            <Link
              href="/services"
              className="shrink-0 flex items-center gap-2 text-[#A0A0A8] hover:text-[#E91E8C] transition-colors font-medium"
            >
              All services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl p-7 hover:border-[#E91E8C]/50 hover:bg-[#1E1F24] transition-all duration-200"
              >
                <div className="text-3xl mb-4" aria-hidden="true">{service.icon}</div>
                <h3 className="font-display text-xl font-bold text-[#F5F5F5] mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-[#A0A0A8] leading-relaxed mb-5 line-clamp-3">
                  {service.intro}
                </p>
                <div className="flex items-center gap-2 text-[#E91E8C] text-sm font-semibold group-hover:gap-4 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#1A1B1E] border-y border-[#2C2D31]" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#E91E8C] text-sm font-semibold uppercase tracking-widest mb-3">Why Blue Rose</div>
              <h2 id="why-heading" className="font-display text-4xl sm:text-5xl font-bold text-[#F5F5F5] mb-6">
                We don&apos;t cut corners<br />on cast vinyl.
              </h2>
              <p className="text-[#A0A0A8] text-lg leading-relaxed mb-6">
                A lot of shops use calendered vinyl on full wraps — it&apos;s cheaper, it shrinks, and it looks rough at 3 years. We use cast vinyl on every full wrap and long-term application. It costs more, it lasts 5–7 years, and it&apos;s the only film we&apos;ll put our name on.
              </p>
              <p className="text-[#A0A0A8] text-lg leading-relaxed mb-10">
                We operate out of a temperature-controlled shop in Springfield. That matters because vinyl applied in a cold, dusty environment shows contamination, lifting edges, and inconsistent stretch. Our facility is the reason our installs look right.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#E91E8C] font-semibold"
              >
                About our shop and process
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎯", title: "Precision Installation", desc: "Certified installers. Post-heat formed edges. Every seam inspected before delivery." },
                { icon: "🏭", title: "Climate-Controlled Shop", desc: "Temperature-controlled environment year-round for consistent installation quality." },
                { icon: "🎨", title: "In-House Design", desc: "Designers who understand vehicle geometry and how vinyl behaves on curved panels." },
                { icon: "🔄", title: "You Own Your Files", desc: "Print-ready files delivered to you. No held-hostage artwork. No dependency on us for reprints." },
              ].map((item) => (
                <div key={item.title} className="bg-[#232427] border border-[#2C2D31] rounded-2xl p-6">
                  <div className="text-2xl mb-3" aria-hidden="true">{item.icon}</div>
                  <h3 className="font-display text-lg font-bold text-[#F5F5F5] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#A0A0A8] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEET / COMMERCIAL ──────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#0A0A0B]" aria-labelledby="fleet-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#E91E8C] text-sm font-semibold uppercase tracking-widest mb-3">Commercial & Fleet</div>
            <h2 id="fleet-heading" className="font-display text-4xl sm:text-5xl font-bold text-[#F5F5F5] mb-4">
              Your fleet is your biggest ad.<br />Are you running it?
            </h2>
            <p className="max-w-2xl mx-auto text-[#A0A0A8] text-lg">
              A wrapped service vehicle gets 30,000–70,000 impressions per day in the Eugene–Springfield metro. That&apos;s per vehicle, per day, for the 5–7 year life of the wrap.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-4 py-4 flex items-center gap-3 text-sm text-[#A0A0A8]"
              >
                <span className="text-xl" aria-hidden="true">{ind.icon}</span>
                {ind.name}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services/fleet-wraps"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity text-lg"
            >
              See fleet wrap programs
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#1A1B1E] border-y border-[#2C2D31]" aria-labelledby="locations-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#E91E8C] text-sm font-semibold uppercase tracking-widest mb-3">Service Area</div>
            <h2 id="locations-heading" className="font-display text-4xl sm:text-5xl font-bold text-[#F5F5F5] mb-4">
              One shop. All of Lane County.
            </h2>
            <p className="max-w-xl mx-auto text-[#A0A0A8]">
              We serve 11 communities from 3436 Olympic St, Suite 300, Springfield. Most destinations are under 30 minutes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {BUSINESS.serviceArea.map((city) => (
              <Link
                key={city}
                href={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}-or`}
                className="inline-flex items-center gap-2 bg-[#232427] border border-[#2C2D31] rounded-full px-5 py-2.5 text-sm text-[#A0A0A8] hover:text-[#E91E8C] hover:border-[#E91E8C] transition-colors font-medium"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {city}
              </Link>
            ))}
          </div>

          <p className="text-center text-sm text-[#6B6B73]">
            3436 Olympic St, Suite 300, Springfield, OR 97478 · {BUSINESS.phone}
          </p>
        </div>
      </section>

      {/* ── SIBLING BUSINESS ────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-[#0A0A0B]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5">
            <div className="w-12 h-12 bg-[#232427] rounded-xl flex items-center justify-center text-2xl shrink-0" aria-hidden="true">
              🔧
            </div>
            <div>
              <p className="text-sm text-[#6B6B73] mb-1">Operating alongside us at the same Springfield location</p>
              <h3 className="font-semibold text-[#F5F5F5] mb-1">{BUSINESS.siblingBusiness.name}</h3>
              <p className="text-sm text-[#A0A0A8] mb-3">{BUSINESS.siblingBusiness.description}</p>
              <a
                href={BUSINESS.siblingBusiness.url}
                className="text-sm text-[#E91E8C] hover:underline font-medium"
              >
                Visit Blue Rose Auto Body &amp; Collision →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#1A1B1E] border-y border-[#2C2D31]" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-[#E91E8C] text-sm font-semibold uppercase tracking-widest mb-3">Quick Answers</div>
            <h2 id="faq-heading" className="font-display text-4xl font-bold text-[#F5F5F5]">Common questions</h2>
          </div>

          <div className="space-y-4 mb-8">
            {[
              {
                q: "How much does a full vehicle wrap cost in Eugene or Springfield?",
                a: "Full vehicle wraps typically range from $2,500–$5,000+ for a standard passenger car or SUV, depending on vehicle size, vinyl type, and design complexity. Commercial vans run $3,000–$6,000+. Contact us for a free quote specific to your vehicle.",
              },
              {
                q: "How long does a vehicle wrap last?",
                a: "A professionally installed cast vinyl wrap typically lasts 5–7 years with proper care. We use cast vinyl on all full wraps — not the cheaper calendered film some shops use, which lasts 2–3 years.",
              },
              {
                q: "Will a wrap damage my factory paint?",
                a: "No. Cast vinyl wraps bond to the clear coat and release cleanly. When installed and removed correctly, they actually protect factory paint from UV fade and minor abrasion.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#232427] border border-[#2C2D31] rounded-xl p-6">
                <h3 className="font-semibold text-[#F5F5F5] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#A0A0A8] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[#E91E8C] font-semibold"
            >
              See all frequently asked questions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <CTASection
        heading="Ready to wrap your vehicle?"
        subheading="Free estimates. No pressure. Springfield, OR — serving Eugene and all of Lane County."
        primaryLabel="Get a Free Quote"
        variant="gradient"
      />
    </>
  );
}
