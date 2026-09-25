"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BUSINESS } from "@/data/business";

const NAV = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Full Vehicle Wraps", href: "/services/full-vehicle-wraps" },
      { label: "Partial Wraps", href: "/services/partial-wraps" },
      { label: "Color Change Wraps", href: "/services/color-change-wraps" },
      { label: "Fleet Wraps", href: "/services/fleet-wraps" },
      { label: "Van Wraps", href: "/services/van-wraps" },
      { label: "Box Truck Wraps", href: "/services/box-truck-wraps" },
      { label: "Vehicle Graphics & Decals", href: "/services/vehicle-graphics-decals" },
      { label: "Storefront Signage", href: "/services/storefront-signage" },
      { label: "Chrome Delete", href: "/services/chrome-delete" },
      { label: "Wrap Removal", href: "/services/wrap-removal" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0B]/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="Blue Rose Wraps & Graphics — Home">
            <Image
              src="/images/Blue-Rose-Auto.webp"
              alt="Blue Rose Wraps & Graphics logo"
              width={44}
              height={44}
              className="rounded-full object-cover shrink-0"
              priority
            />
            <span className="font-display text-[#F5F5F5] text-xl font-bold leading-tight hidden sm:block">
              Blue Rose <span className="gradient-brand-text">Wraps</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {NAV.map((item) => (
              <div key={item.href} className="relative group">
                {item.children ? (
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm text-[#A0A0A8] hover:text-[#F5F5F5] transition-colors rounded-lg hover:bg-white/5"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm text-[#A0A0A8] hover:text-[#F5F5F5] transition-colors rounded-lg hover:bg-white/5 block"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      openDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    role="menu"
                  >
                    <div className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl shadow-2xl shadow-black/50 overflow-hidden min-w-[220px] p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-[#A0A0A8] hover:text-[#F5F5F5] hover:bg-white/5 rounded-lg transition-colors"
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      ))}
                      <div className="border-t border-[#2C2D31] mt-2 pt-2">
                        <Link
                          href="/services"
                          className="block px-3 py-2 text-sm text-[#E91E8C] hover:bg-white/5 rounded-lg transition-colors font-medium"
                          role="menuitem"
                        >
                          View all services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BUSINESS.phoneTel}
              className="text-sm text-[#A0A0A8] hover:text-[#F5F5F5] transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {BUSINESS.phone}
            </a>
            <Link
              href="/get-a-quote"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white gradient-brand hover:opacity-90 transition-opacity"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[#A0A0A8] hover:text-[#F5F5F5]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A0A0B]/98 backdrop-blur-md border-t border-[#2C2D31]">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {NAV.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-[#F5F5F5] font-medium rounded-lg hover:bg-white/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1 mt-1">
                    {item.children.slice(0, 6).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[#A0A0A8] hover:text-[#F5F5F5] hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-[#2C2D31] space-y-3">
              <a
                href={BUSINESS.phoneTel}
                className="flex items-center gap-3 px-4 py-3 text-[#F5F5F5] font-medium"
              >
                <svg className="w-5 h-5 text-[#E91E8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS.phone}
              </a>
              <Link
                href="/get-a-quote"
                className="block text-center px-4 py-3 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
