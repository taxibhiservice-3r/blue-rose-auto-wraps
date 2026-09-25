import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/data/business";

const SERVICES_LINKS = [
  { label: "Full Vehicle Wraps", href: "/services/full-vehicle-wraps" },
  { label: "Partial Wraps", href: "/services/partial-wraps" },
  { label: "Color Change Wraps", href: "/services/color-change-wraps" },
  { label: "Fleet Wraps", href: "/services/fleet-wraps" },
  { label: "Van & Box Truck Wraps", href: "/services/van-wraps" },
  { label: "Vehicle Graphics", href: "/services/vehicle-graphics-decals" },
  { label: "Storefront Signage", href: "/services/storefront-signage" },
  { label: "Chrome Delete", href: "/services/chrome-delete" },
  { label: "Wrap Removal", href: "/services/wrap-removal" },
  { label: "All Services →", href: "/services" },
];

const LOCATION_LINKS = [
  { label: "Eugene, OR", href: "/locations/eugene-or" },
  { label: "Springfield, OR", href: "/locations/springfield-or" },
  { label: "Cottage Grove, OR", href: "/locations/cottage-grove-or" },
  { label: "Creswell, OR", href: "/locations/creswell-or" },
  { label: "Junction City, OR", href: "/locations/junction-city-or" },
  { label: "Coburg, OR", href: "/locations/coburg-or" },
  { label: "North Springfield, OR", href: "/locations/north-springfield-or" },
  { label: "All Service Areas →", href: "/locations" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Get a Quote", href: "/get-a-quote" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0B] border-t border-[#2C2D31]">
      {/* Top CTA strip */}
      <div className="gradient-brand py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Ready to transform your vehicle?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Get a free, no-obligation quote. Springfield, OR — serving all of Lane County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-a-quote"
              className="px-8 py-4 bg-white text-[#E91E8C] font-bold rounded-xl hover:bg-gray-100 transition-colors text-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href={BUSINESS.phoneTel}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg"
            >
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/Blue-Rose-Auto.webp"
                alt="Blue Rose Wraps & Graphics"
                width={44}
                height={44}
                className="rounded-full object-cover shrink-0"
              />
              <span className="font-display text-[#F5F5F5] text-xl font-bold">
                Blue Rose <span className="gradient-brand-text">Wraps</span>
              </span>
            </Link>
            <p className="text-[#A0A0A8] text-sm leading-relaxed mb-6">
              Professional vehicle wraps, fleet graphics, and commercial signage in Springfield, OR. Serving Eugene, Springfield, and all of Lane County.
            </p>
            <div className="space-y-2 text-sm text-[#A0A0A8]">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#E91E8C] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>3436 Olympic St, Suite 300<br />Springfield, OR 97478</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#E91E8C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={BUSINESS.phoneTel} className="hover:text-[#F5F5F5] transition-colors">{BUSINESS.phone}</a>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 bg-[#1A1B1E] border border-[#2C2D31] rounded-lg flex items-center justify-center text-[#A0A0A8] hover:text-[#F5F5F5] hover:border-[#E91E8C] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 bg-[#1A1B1E] border border-[#2C2D31] rounded-lg flex items-center justify-center text-[#A0A0A8] hover:text-[#F5F5F5] hover:border-[#E91E8C] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href={BUSINESS.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 bg-[#1A1B1E] border border-[#2C2D31] rounded-lg flex items-center justify-center text-[#A0A0A8] hover:text-[#F5F5F5] hover:border-[#E91E8C] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.5C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-[#F5F5F5] font-bold text-lg mb-5 uppercase tracking-wide">Services</h3>
            <ul className="space-y-2">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#A0A0A8] hover:text-[#E91E8C] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-display text-[#F5F5F5] font-bold text-lg mb-5 uppercase tracking-wide">Service Areas</h3>
            <ul className="space-y-2">
              {LOCATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#A0A0A8] hover:text-[#E91E8C] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Hours */}
          <div>
            <h3 className="font-display text-[#F5F5F5] font-bold text-lg mb-5 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2 mb-8">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#A0A0A8] hover:text-[#E91E8C] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-display text-[#F5F5F5] font-bold text-lg mb-4 uppercase tracking-wide">Hours</h3>
            <dl className="space-y-1 text-sm text-[#A0A0A8]">
              <div className="flex justify-between gap-4">
                <dt>Mon – Fri</dt>
                <dd>8:00 AM – 5:00 PM</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Saturday</dt>
                <dd>10:00 AM – 5:00 PM</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Sunday</dt>
                <dd>Closed</dd>
              </div>
            </dl>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#22C55E] bg-[#22C55E]/10 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full inline-block" />
                Accepting new projects
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2C2D31] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B6B73]">
          <p>© {year} {BUSINESS.name}. All rights reserved. Springfield, OR 97478.</p>
          <p>
            Part of the{" "}
            <a href={BUSINESS.parentOrganization.url} className="hover:text-[#A0A0A8] transition-colors">
              {BUSINESS.parentOrganization.name}
            </a>{" "}
            family.
          </p>
        </div>
      </div>
    </footer>
  );
}
