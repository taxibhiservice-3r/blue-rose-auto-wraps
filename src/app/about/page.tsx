import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import { BUSINESS } from "@/data/business";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "About Blue Rose Wraps & Graphics — Springfield, OR",
  description:
    "Blue Rose Wraps & Graphics is Springfield, Oregon's precision vehicle wrap and graphics studio. Learn about our shop, materials, process, and the Blue Rose Auto Care family.",
  canonical: "https://www.bluerosewrapsandgraphics.com/about",
});

const BREADCRUMBS = [
  { name: "Home", url: "https://www.bluerosewrapsandgraphics.com" },
  { name: "About", url: "https://www.bluerosewrapsandgraphics.com/about" },
];

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-0 px-4 bg-[#0A0A0B] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={BREADCRUMBS} />
          <div className="mt-6 mb-10">
            <div className="text-[#E91E8C] text-sm font-semibold uppercase tracking-widest mb-3">About Us</div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#F5F5F5] mb-4">
              Built in Springfield,<br />Built on Precision.
            </h1>
            <p className="text-xl text-[#A0A0A8] max-w-2xl leading-relaxed">
              Blue Rose Wraps &amp; Graphics is Springfield&apos;s dedicated vehicle wrap and graphics studio — a specialist shop, not a print-it-and-stick-it operation.
            </p>
          </div>

          {/* Shop exterior photo — full width */}
          <div className="relative w-full aspect-[21/7] rounded-t-2xl overflow-hidden border-x border-t border-[#2C2D31]">
            <Image
              src="/images/portfolio/blue-rose-wraps-graphics-shop-exterior-springfield-or.webp"
              alt="Blue Rose Wraps & Graphics shop exterior at 3436 Olympic St Suite 300, Springfield OR"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 to-transparent" />
            <div className="absolute bottom-5 left-6">
              <span className="text-sm font-semibold text-white/90">3436 Olympic St, Suite 300 · Springfield, OR 97478</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

        {/* Who we are */}
        <section>
          <h2 className="font-display text-3xl font-bold text-[#F5F5F5] mb-6">Who We Are</h2>
          <div className="space-y-4 text-[#A0A0A8] leading-relaxed">
            <p>
              Blue Rose Wraps &amp; Graphics operates out of 3436 Olympic St, Suite 300, Springfield, OR — a dedicated wrap and graphics production facility in the heart of the Eugene–Springfield metro. We&apos;re a specialist shop: every project that comes through our doors is a wrap, a graphic, or a sign — not a sideline business alongside oil changes or detailing.
            </p>
            <p>
              We work with personal vehicle owners who want a color change or custom build, and with commercial clients — from solo contractors who need a single van lettered to fleet operators managing 20+ vehicles across the region. Both categories get the same quality of materials and installation.
            </p>
            <p>
              Blue Rose Wraps &amp; Graphics is part of the Blue Rose Auto Care &amp; Repair Services family of businesses in Springfield, operating alongside Blue Rose Auto Body &amp; Collision (Suite 200) at the same address. Two businesses, one location, a shared commitment to doing the work right.
            </p>
          </div>
        </section>

        {/* Materials */}
        <section className="bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl p-8">
          <h2 className="font-display text-3xl font-bold text-[#F5F5F5] mb-6">What We Use — and Why It Matters</h2>
          <div className="space-y-5 text-[#A0A0A8] leading-relaxed">
            <p>
              <strong className="text-[#F5F5F5]">Cast vinyl on every full wrap.</strong> There are two types of vehicle wrap vinyl: cast and calendered. Calendered is cheaper, stiffer, has memory (it tries to return to its flat shape), and lasts 2–3 years. Cast vinyl is more flexible, conforms to complex curves without memory, and lasts 5–7 years. We use cast vinyl on all full wraps and long-term applications. We don&apos;t cut corners here because the difference shows at year 3.
            </p>
            <p>
              <strong className="text-[#F5F5F5]">UV-protective laminate on printed graphics.</strong> All digitally printed graphics are over-laminated with a UV-protective film that prevents ink fade and adds scratch resistance. Without laminate, even the best print starts fading within 12–18 months of outdoor exposure. Every graphic we produce includes it.
            </p>
            <p>
              <strong className="text-[#F5F5F5]">Confirmed material brands available on request.</strong> We can confirm the specific vinyl manufacturers and product lines we use on any given project — ask us when you request a quote and we&apos;ll provide exactly that, not a vague &quot;premium vinyl&quot; non-answer.
            </p>
          </div>
        </section>

        {/* Shop — now with real photos */}
        <section>
          <h2 className="font-display text-3xl font-bold text-[#F5F5F5] mb-6">Our Shop</h2>

          {/* 3-column process photo strip */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { src: "/images/portfolio/vinyl-wrap-precision-cutting-process-springfield-or.webp", alt: "Technician precision cutting vinyl — Blue Rose Wraps Springfield OR" },
              { src: "/images/portfolio/ppf-installation-truck-blue-rose-auto-springfield-or.webp", alt: "Paint protection film installation in Blue Rose shop — Springfield OR" },
              { src: "/images/portfolio/vinyl-wrap-installation-process-blue-rose-springfield-or.webp", alt: "Vinyl being applied to hood in Blue Rose controlled shop — Springfield OR" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 33vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: "🌡️", title: "Temperature-Controlled", desc: "Vinyl application is temperature-sensitive. Cold vinyl is stiff and doesn't stretch properly. Hot vinyl is unforgiving. Our shop stays at the right temperature year-round." },
              { icon: "💡", title: "Proper Lighting", desc: "Contamination, bubbles, and lifting edges are visible under proper shop lighting. We inspect every install under full lighting before delivery — not in a dimly lit bay." },
              { icon: "🧹", title: "Dust-Controlled", desc: "Dust under vinyl creates bubbles and rough texture. Our facility is maintained to minimize airborne particulate during installation." },
              { icon: "🛠️", title: "Professional Tools", desc: "Calibrated heat guns, infrared thermometers, squeegees, and edge finishing tools — not improvised with a hair dryer and a credit card." },
            ].map((item) => (
              <div key={item.title} className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl p-6">
                <div className="text-2xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-display text-lg font-bold text-[#F5F5F5] mb-2">{item.title}</h3>
                <p className="text-sm text-[#A0A0A8] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team in action */}
        <section>
          <h2 className="font-display text-3xl font-bold text-[#F5F5F5] mb-6">The Team at Work</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden col-span-2">
              <Image
                src="/images/portfolio/carbon-fiber-wrap-cadillac-team-install-springfield-or.webp"
                alt="Blue Rose Wraps team applying carbon fiber vinyl wrap to Cadillac CTS-V — Springfield OR"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/portfolio/color-change-wrap-team-corvette-springfield-or.webp"
                alt="Blue Rose Wraps team applying color change wrap to Corvette — Springfield OR"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/portfolio/large-trailer-wrap-fleet-commercial-eugene-or.webp"
                alt="Blue Rose Wraps team installing large commercial trailer wrap — Eugene OR"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="font-display text-3xl font-bold text-[#F5F5F5] mb-6">How Every Project Works</h2>
          <ol className="space-y-4">
            {[
              { step: "Free Consultation & Quote", detail: "You describe the project, we assess your vehicle and goals, and we provide a detailed quote. No pressure, no upsell." },
              { step: "Design Development", detail: "For custom graphics, we develop artwork and present digital mockups — rendered on your actual vehicle geometry, not a generic template." },
              { step: "Material Selection", detail: "We confirm the vinyl film, finish, and laminate appropriate for your project and application." },
              { step: "Production", detail: "Printing and cutting done in-house. Large-format digital print, precision plotter cutting, and hand-finishing." },
              { step: "Vehicle Prep", detail: "Professional wash, clay bar, and surface decontamination — even on vehicles that look clean. Surface prep is where most installers cut corners. We don't." },
              { step: "Installation", detail: "Panel-by-panel application with post-heat forming at every edge, seam, and body recess. Two-person team on complex installs." },
              { step: "QC Inspection", detail: "Every seam, edge, and panel inspected under shop lighting before we call you for pickup. If we find anything, we fix it before you arrive." },
            ].map((item, idx) => (
              <li key={idx} className="flex gap-5 bg-[#1A1B1E] border border-[#2C2D31] rounded-xl p-5">
                <span className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-[#F5F5F5] mb-1">{item.step}</h3>
                  <p className="text-sm text-[#A0A0A8] leading-relaxed">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* NAP + sibling */}
        <section className="bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold text-[#F5F5F5] mb-5">Find Us</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-3 text-sm text-[#A0A0A8]">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#E91E8C] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="not-italic">
                  <strong className="text-[#F5F5F5]">Blue Rose Wraps &amp; Graphics</strong><br />
                  3436 Olympic St, Suite 300<br />
                  Springfield, OR 97478
                </address>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#E91E8C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={BUSINESS.phoneTel} className="hover:text-[#F5F5F5] transition-colors">{BUSINESS.phone}</a>
              </div>
              <dl className="text-xs space-y-1">
                <div className="flex justify-between gap-4"><dt>Mon–Fri</dt><dd>8:00 AM – 5:00 PM</dd></div>
                <div className="flex justify-between gap-4"><dt>Saturday</dt><dd>10:00 AM – 5:00 PM</dd></div>
                <div className="flex justify-between gap-4"><dt>Sunday</dt><dd>Closed</dd></div>
              </dl>
            </div>
            <div>
              <p className="text-sm text-[#6B6B73] mb-3">Sharing the building with</p>
              <div className="bg-[#232427] border border-[#2C2D31] rounded-xl p-4">
                <p className="font-semibold text-[#F5F5F5] text-sm mb-1">{BUSINESS.siblingBusiness.name}</p>
                <p className="text-xs text-[#6B6B73] mb-2">Suite 200 · Same building, separate business</p>
                <a href={BUSINESS.siblingBusiness.url} className="text-xs text-[#E91E8C] hover:underline">
                  Visit collision repair site →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CTASection variant="gradient" heading="Ready to start your project?" />
    </>
  );
}
