import type { Metadata } from "next";
import Breadcrumb from "@/components/sections/Breadcrumb";
import { BUSINESS } from "@/data/business";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Blue Rose Wraps & Graphics — Springfield, OR",
  description:
    "Contact Blue Rose Wraps & Graphics at (541) 520-3807. Located at 3436 Olympic St, Suite 300, Springfield, OR 97478. Open Mon–Fri 8AM–5PM, Sat 10AM–5PM.",
  canonical: "https://www.bluerosewrapsandgraphics.com/contact",
});

const BREADCRUMBS = [
  { name: "Home", url: "https://www.bluerosewrapsandgraphics.com" },
  { name: "Contact", url: "https://www.bluerosewrapsandgraphics.com/contact" },
];

const HOURS = [
  { day: "Monday", hours: "8:00 AM – 5:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 5:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
  { day: "Friday", hours: "8:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(BREADCRUMBS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-32 pb-16 px-4 bg-[#0A0A0B] border-b border-[#2C2D31]">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={BREADCRUMBS} />
          <div className="mt-6">
            <div className="text-[#E91E8C] text-sm font-semibold uppercase tracking-widest mb-3">Contact</div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#F5F5F5] mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-[#A0A0A8] max-w-2xl">
              Call us, stop by, or request a quote online. We respond to all quote requests within one business day.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#F5F5F5] mb-5">Contact Information</h2>
              <div className="space-y-4">
                <a
                  href={BUSINESS.phoneTel}
                  className="flex items-center gap-4 p-5 bg-[#1A1B1E] border border-[#2C2D31] rounded-xl hover:border-[#E91E8C] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#6B6B73] uppercase tracking-wide mb-0.5">Phone</div>
                    <div className="font-semibold text-[#F5F5F5] group-hover:text-[#E91E8C] transition-colors">{BUSINESS.phone}</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-[#1A1B1E] border border-[#2C2D31] rounded-xl">
                  <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-[#6B6B73] uppercase tracking-wide mb-0.5">Address</div>
                    <address className="not-italic font-semibold text-[#F5F5F5]">
                      {BUSINESS.address.street}, {BUSINESS.address.suite}<br />
                      {BUSINESS.address.city}, {BUSINESS.address.stateAbbr} {BUSINESS.address.zip}
                    </address>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#E91E8C] hover:underline mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[#F5F5F5] mb-5">Business Hours</h2>
              <dl className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl overflow-hidden">
                {HOURS.map((h, idx) => (
                  <div
                    key={h.day}
                    className={`flex justify-between gap-4 px-5 py-3.5 text-sm ${idx < HOURS.length - 1 ? "border-b border-[#2C2D31]" : ""} ${h.hours === "Closed" ? "text-[#6B6B73]" : "text-[#A0A0A8]"}`}
                  >
                    <dt className={h.hours !== "Closed" ? "text-[#F5F5F5]" : ""}>{h.day}</dt>
                    <dd>{h.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Social */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[#F5F5F5] mb-4">Follow Us</h2>
              <div className="flex gap-3">
                <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-[#1A1B1E] border border-[#2C2D31] rounded-xl text-sm text-[#A0A0A8] hover:text-[#F5F5F5] hover:border-[#E91E8C] transition-colors">
                  Facebook
                </a>
                <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-[#1A1B1E] border border-[#2C2D31] rounded-xl text-sm text-[#A0A0A8] hover:text-[#F5F5F5] hover:border-[#E91E8C] transition-colors">
                  Instagram
                </a>
                <a href={BUSINESS.social.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-[#1A1B1E] border border-[#2C2D31] rounded-xl text-sm text-[#A0A0A8] hover:text-[#F5F5F5] hover:border-[#E91E8C] transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Quote shortcut */}
          <div className="bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl p-8 h-fit">
            <h2 className="font-display text-2xl font-bold text-[#F5F5F5] mb-3">
              Request a Quote
            </h2>
            <p className="text-[#A0A0A8] mb-6 leading-relaxed">
              For the fastest response, use our quote form. We respond within one business day with a detailed estimate.
            </p>
            <a
              href="/get-a-quote"
              className="block text-center w-full px-6 py-4 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity text-lg mb-4"
            >
              Get a Free Quote →
            </a>
            <p className="text-xs text-[#6B6B73] text-center">
              Or call {BUSINESS.phone} during business hours for an immediate response.
            </p>
            <div className="mt-8 pt-6 border-t border-[#2C2D31] space-y-2 text-sm text-[#6B6B73]">
              <p className="text-[#A0A0A8] font-semibold text-xs uppercase tracking-wide mb-3">What to have ready:</p>
              {["Your vehicle year, make, and model", "Which service(s) you're interested in", "Any existing artwork or brand files", "Your approximate timeline"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-[#E91E8C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
