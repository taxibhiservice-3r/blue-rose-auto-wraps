import type { Metadata } from "next";
import Breadcrumb from "@/components/sections/Breadcrumb";
import { BUSINESS } from "@/data/business";
import { SERVICES } from "@/data/services";
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

const VEHICLE_TYPES = [
  "Passenger Car (Sedan/Coupe/Hatchback)",
  "SUV / Crossover",
  "Pickup Truck",
  "Cargo Van",
  "Passenger Van",
  "Box Truck (10–24 ft)",
  "Semi / Commercial Truck",
  "RV / Motorhome",
  "Motorcycle / Powersports",
  "Other",
];

const SERVICE_OPTIONS = SERVICES.map((s) => s.name);

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
            <form
              name="quote-request"
              method="POST"
              action="/thank-you"
              className="space-y-6"
              aria-label="Quote request form"
            >
              <input type="hidden" name="form-name" value="quote-request" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
                    Your Name <span className="text-[#E91E8C]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-4 py-3 text-[#F5F5F5] placeholder-[#6B6B73] focus:border-[#E91E8C] focus:outline-none transition-colors text-sm"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
                    Phone Number <span className="text-[#E91E8C]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-4 py-3 text-[#F5F5F5] placeholder-[#6B6B73] focus:border-[#E91E8C] focus:outline-none transition-colors text-sm"
                    placeholder="(541) 555-0100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-4 py-3 text-[#F5F5F5] placeholder-[#6B6B73] focus:border-[#E91E8C] focus:outline-none transition-colors text-sm"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="vehicle" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
                  Vehicle Type <span className="text-[#E91E8C]">*</span>
                </label>
                <select
                  id="vehicle"
                  name="vehicle"
                  required
                  className="w-full bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-4 py-3 text-[#F5F5F5] focus:border-[#E91E8C] focus:outline-none transition-colors text-sm appearance-none"
                >
                  <option value="">Select vehicle type...</option>
                  {VEHICLE_TYPES.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="vehicle-details" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
                  Vehicle Year, Make, Model
                </label>
                <input
                  id="vehicle-details"
                  name="vehicle-details"
                  type="text"
                  className="w-full bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-4 py-3 text-[#F5F5F5] placeholder-[#6B6B73] focus:border-[#E91E8C] focus:outline-none transition-colors text-sm"
                  placeholder="2022 Ford Transit 250"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
                  Service Needed <span className="text-[#E91E8C]">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-4 py-3 text-[#F5F5F5] focus:border-[#E91E8C] focus:outline-none transition-colors text-sm appearance-none"
                >
                  <option value="">Select a service...</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                  <option value="Not sure — need advice">Not sure — need advice</option>
                </select>
              </div>

              <div>
                <label htmlFor="fleet-size" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
                  Fleet Size (if applicable)
                </label>
                <select
                  id="fleet-size"
                  name="fleet-size"
                  className="w-full bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-4 py-3 text-[#F5F5F5] focus:border-[#E91E8C] focus:outline-none transition-colors text-sm appearance-none"
                >
                  <option value="">Single vehicle / not applicable</option>
                  <option value="2-3">2–3 vehicles</option>
                  <option value="4-10">4–10 vehicles</option>
                  <option value="11-25">11–25 vehicles</option>
                  <option value="26+">26+ vehicles</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-4 py-3 text-[#F5F5F5] placeholder-[#6B6B73] focus:border-[#E91E8C] focus:outline-none transition-colors text-sm resize-y"
                  placeholder="Describe what you have in mind: color change, custom design, commercial lettering, fleet program, etc. The more detail you provide, the more accurate our quote will be."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity text-lg"
              >
                Request My Free Quote
              </button>

              <p className="text-xs text-[#6B6B73] text-center">
                We respond within one business day. Your information is never shared or sold.
              </p>
            </form>
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
