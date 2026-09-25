import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LOCATIONS, getLocationBySlug } from "@/data/locations";
import { SERVICES } from "@/data/services";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/sections/Breadcrumb";
import { BUSINESS } from "@/data/business";
import { buildLocationSchema, buildBreadcrumbSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `https://blueroseauto.com/locations/${slug}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://blueroseauto.com/locations/${slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const popularServices = location.popularServiceSlugs
    .map((s) => SERVICES.find((sv) => sv.slug === s))
    .filter(Boolean);

  const breadcrumbs = [
    { name: "Home", url: "https://blueroseauto.com" },
    { name: "Service Areas", url: "https://blueroseauto.com/locations" },
    { name: `${location.city}, ${location.stateAbbr}`, url: `https://blueroseauto.com/locations/${slug}` },
  ];

  const locationSchema = buildLocationSchema(location);
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-[#0A0A0B] border-b border-[#2C2D31]">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs} />
          <div className="mt-6">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-5 h-5 text-[#E91E8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-semibold text-[#E91E8C] uppercase tracking-widest">
                {location.county} · {location.state}
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#F5F5F5] mb-4">
              Vehicle Wraps &amp; Graphics in {location.city}, {location.stateAbbr}
            </h1>
            <p className="text-xl text-[#A0A0A8] mb-6 max-w-2xl leading-relaxed">
              {location.intro}
            </p>
            {location.driveMiles > 0 && (
              <p className="text-sm text-[#6B6B73] mb-6">
                📍 {location.driveTime} from our shop · {location.driveMiles} miles to 3436 Olympic St, Suite 300, Springfield
              </p>
            )}
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
            {/* Body content */}
            <section>
              <div className="text-[#A0A0A8] leading-relaxed space-y-4">
                {location.body.split("\n\n").map((para, idx) => {
                  if (para.startsWith("**") && para.endsWith("**")) {
                    return <h3 key={idx} className="font-display text-xl font-bold text-[#F5F5F5] mt-6 mb-2">{para.replace(/\*\*/g, "")}</h3>;
                  }
                  return <p key={idx}>{para}</p>;
                })}
              </div>
            </section>

            {/* Popular services */}
            {popularServices.length > 0 && (
              <section>
                <h2 className="font-display text-3xl font-bold text-[#F5F5F5] mb-6">
                  Popular Services for {location.city} Clients
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {popularServices.map((svc) => svc && (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="group bg-[#1A1B1E] border border-[#2C2D31] rounded-xl p-5 hover:border-[#E91E8C]/50 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl" aria-hidden="true">{svc.icon}</span>
                        <h3 className="font-semibold text-[#F5F5F5]">{svc.name}</h3>
                      </div>
                      <p className="text-xs text-[#A0A0A8] line-clamp-2">{svc.tagline}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Neighborhoods */}
            {location.neighborhoods.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-bold text-[#F5F5F5] mb-4">
                  {location.city} Areas We Serve
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {location.neighborhoods.map((hood) => (
                    <div key={hood.name} className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl p-4">
                      <h3 className="font-semibold text-[#F5F5F5] text-sm mb-1">{hood.name}</h3>
                      {hood.note && <p className="text-xs text-[#6B6B73]">{hood.note}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Landmarks */}
            {location.landmarks.length > 0 && (
              <section className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl p-6">
                <h2 className="font-semibold text-[#F5F5F5] mb-3 text-sm uppercase tracking-wide">
                  Landmarks &amp; reference points in {location.city}
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {location.landmarks.map((lm) => (
                    <li key={lm} className="text-xs bg-[#232427] text-[#A0A0A8] px-3 py-1.5 rounded-full">{lm}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl p-7 sticky top-24">
              <h3 className="font-display text-2xl font-bold text-[#F5F5F5] mb-2">
                Serving {location.city}
              </h3>
              {location.driveMiles > 0 ? (
                <p className="text-sm text-[#A0A0A8] mb-1">
                  {location.driveTime} · {location.driveMiles} mi from our shop
                </p>
              ) : (
                <p className="text-sm text-[#22C55E] mb-1 font-semibold">Our home location</p>
              )}
              <p className="text-xs text-[#6B6B73] mb-6">
                ZIP: {location.zipCodes.join(", ")}
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
                <address className="not-italic">
                  3436 Olympic St, Suite 300<br />Springfield, OR 97478
                </address>
                <div>Mon–Fri 8AM–5PM · Sat 10AM–5PM</div>
              </div>
            </div>

            {/* Other nearby cities */}
            <div className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl p-5">
              <p className="font-semibold text-[#F5F5F5] text-sm mb-3">Also serving nearby:</p>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.filter((l) => l.slug !== slug).slice(0, 6).map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    className="text-xs text-[#A0A0A8] bg-[#232427] hover:text-[#E91E8C] hover:bg-[#2C2D31] px-3 py-1.5 rounded-full transition-colors"
                  >
                    {l.city}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <CTASection
        variant="gradient"
        heading={`Vehicle wraps in ${location.city}, ${location.stateAbbr}`}
        subheading={`Free quote. ${location.driveMiles > 0 ? `${location.driveTime} from our Springfield shop.` : "You're already at our door."}`}
      />
    </>
  );
}
