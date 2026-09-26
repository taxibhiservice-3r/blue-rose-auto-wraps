"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "fleet", label: "Fleet & Commercial" },
  { id: "color-change", label: "Color Change" },
  { id: "custom", label: "Custom Graphics" },
  { id: "process", label: "Installation" },
];

const PORTFOLIO = [
  {
    src: "/images/portfolio/fleet-wrap-teal-tundra-pest-control-springfield-or.webp",
    alt: "Teal commercial fleet wrap on Toyota Tundra for Mint Pest Control — Blue Rose Wraps, Springfield OR",
    title: "Fleet Wrap — Mint Pest Control",
    vehicle: "Toyota Tundra",
    category: "fleet",
    featured: true,
  },
  {
    src: "/images/portfolio/carbon-fiber-wrap-cadillac-team-install-springfield-or.webp",
    alt: "Two-person team applying carbon fiber vinyl wrap to Cadillac CTS-V — Blue Rose Wraps Springfield OR",
    title: "Carbon Fiber Wrap Install",
    vehicle: "Cadillac CTS-V",
    category: "process",
    featured: true,
  },
  {
    src: "/images/portfolio/full-truck-wrap-bliss-roofing-ford-f150-springfield-or.webp",
    alt: "Full truck wrap on Ford F-150 for Bliss Roofing with sky graphics — Powered by Blue Rose Auto Springfield OR",
    title: "Full Wrap — Bliss Roofing",
    vehicle: "Ford F-150",
    category: "fleet",
    featured: true,
  },
  {
    src: "/images/portfolio/color-change-wrap-blue-porsche-911-eugene-or.webp",
    alt: "Striking blue color change wrap on Porsche 911 Cabriolet — Blue Rose Wraps Eugene OR",
    title: "Color Change Wrap",
    vehicle: "Porsche 911",
    category: "color-change",
    featured: true,
  },
  {
    src: "/images/portfolio/food-truck-full-wrap-commercial-eugene-or.webp",
    alt: "Full colorful wrap on Raymundo's Taqueria food truck — Blue Rose Wraps Eugene OR",
    title: "Food Truck Full Wrap",
    vehicle: "Step Van",
    category: "fleet",
    featured: true,
  },
  {
    src: "/images/portfolio/large-trailer-wrap-fleet-commercial-eugene-or.webp",
    alt: "Team installing large commercial trailer wrap for McDonald's Wholesale — Blue Rose Wraps Eugene OR",
    title: "Large Trailer Fleet Wrap",
    vehicle: "Commercial Trailer",
    category: "fleet",
    featured: true,
  },
  {
    src: "/images/portfolio/color-change-wrap-team-corvette-springfield-or.webp",
    alt: "Two-person team applying white color change wrap to Corvette — Blue Rose Wraps Springfield OR",
    title: "Color Change — Corvette",
    vehicle: "Chevrolet Corvette",
    category: "color-change",
    featured: true,
  },
  {
    src: "/images/portfolio/camo-wrap-racing-stripes-ford-maverick-eugene-or.webp",
    alt: "Custom camo vinyl wrap with neon green racing stripes on Ford Maverick — Blue Rose Wraps Eugene OR",
    title: "Custom Camo + Racing Stripes",
    vehicle: "Ford Maverick",
    category: "custom",
    featured: true,
  },
  {
    src: "/images/portfolio/van-wrap-commercial-branding-springfield-or.webp",
    alt: "Commercial van wrap for Kitchen Tune-Up franchise — Blue Rose Wraps Springfield OR",
    title: "Commercial Van Wrap",
    vehicle: "Ram ProMaster Van",
    category: "fleet",
    featured: true,
  },
  {
    src: "/images/portfolio/vinyl-wrap-installation-process-blue-rose-springfield-or.webp",
    alt: "Technician applying dark chrome vinyl to hood in controlled shop — Blue Rose Wraps Springfield OR",
    title: "Precision Vinyl Application",
    vehicle: "Sports Car",
    category: "process",
    featured: true,
  },
  {
    src: "/images/portfolio/fleet-wrap-box-truck-commercial-eugene-or.webp",
    alt: "Full fleet wrap on Roto-Rooter plumbing box truck — Blue Rose Wraps Eugene OR",
    title: "Box Truck Fleet Wrap",
    vehicle: "GMC Box Truck",
    category: "fleet",
    featured: false,
  },
  {
    src: "/images/portfolio/racing-stripes-graphics-dodge-charger-springfield-or.webp",
    alt: "Custom racing stripes and graphics on white Dodge Charger SXT — Blue Rose Wraps Springfield OR",
    title: "Racing Stripes + Graphics",
    vehicle: "Dodge Charger SXT",
    category: "custom",
    featured: false,
  },
  {
    src: "/images/portfolio/commercial-truck-lettering-vehicle-graphics-springfield-or.webp",
    alt: "Commercial vehicle lettering on Ram pickup for local business — Blue Rose Wraps Springfield OR",
    title: "Commercial Truck Lettering",
    vehicle: "Ram Pickup",
    category: "fleet",
    featured: false,
  },
  {
    src: "/images/portfolio/chrome-delete-carbon-hood-subaru-wrx-springfield-or.webp",
    alt: "Chrome delete and carbon fiber hood wrap on red Subaru WRX — Blue Rose Wraps Springfield OR",
    title: "Chrome Delete + Carbon Hood",
    vehicle: "Subaru WRX",
    category: "custom",
    featured: false,
  },
  {
    src: "/images/portfolio/ppf-installation-truck-blue-rose-auto-springfield-or.webp",
    alt: "Paint protection film installation on pickup truck at Blue Rose Auto — Springfield OR",
    title: "PPF Installation",
    vehicle: "Pickup Truck",
    category: "process",
    featured: false,
  },
  {
    src: "/images/portfolio/color-change-wrap-red-vinyl-install-springfield-or.webp",
    alt: "Red color change vinyl wrap being applied to panel van — Blue Rose Wraps Springfield OR",
    title: "Red Color Change Wrap",
    vehicle: "Panel Van",
    category: "color-change",
    featured: false,
  },
  {
    src: "/images/portfolio/ppf-windshield-protection-film-installation-springfield-or.webp",
    alt: "Windshield paint protection film installation process — Blue Rose Wraps Springfield OR",
    title: "Windshield PPF",
    vehicle: "Mercedes-Benz",
    category: "process",
    featured: false,
  },
  {
    src: "/images/portfolio/vinyl-wrap-precision-cutting-process-springfield-or.webp",
    alt: "Technician precision cutting black vinyl wrap material — Blue Rose Wraps Springfield OR",
    title: "Precision Vinyl Cutting",
    vehicle: "In-Shop Process",
    category: "process",
    featured: false,
  },
  {
    src: "/images/portfolio/window-tint-film-installation-springfield-or.webp",
    alt: "Window tint film application process on windshield — Blue Rose Wraps Springfield OR",
    title: "Window Film Installation",
    vehicle: "Windshield",
    category: "process",
    featured: false,
  },
  {
    src: "/images/portfolio/blue-rose-wraps-graphics-shop-exterior-springfield-or.webp",
    alt: "Blue Rose Wraps & Graphics shop exterior at 3436 Olympic St Suite 300, Springfield OR",
    title: "Our Springfield Shop",
    vehicle: "Suite 300 — Olympic St",
    category: "fleet",
    featured: false,
  },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === active);

  const counts: Record<string, number> = { all: PORTFOLIO.length };
  for (const item of PORTFOLIO) {
    counts[item.category] = (counts[item.category] ?? 0) + 1;
  }

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              active === cat.id
                ? "text-white gradient-brand shadow-lg"
                : "text-[#A0A0A8] bg-[#1A1B1E] border border-[#2C2D31] hover:border-[#E91E8C] hover:text-[#E91E8C]"
            }`}
          >
            {cat.label}
            <span className="ml-1.5 opacity-60 text-xs">
              {counts[cat.id] ?? 0}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {filtered.map((item) => (
          <div
            key={item.src}
            className="break-inside-avoid group relative overflow-hidden rounded-xl bg-[#1A1B1E] border border-[#2C2D31] hover:border-[#E91E8C]/40 transition-all duration-300"
          >
            <div className="overflow-hidden w-full aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={600}
                unoptimized
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {item.featured && (
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold text-white gradient-brand">
                    Featured
                  </span>
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="font-semibold text-[#F5F5F5] text-sm leading-tight mb-0.5">{item.title}</p>
              <p className="text-xs text-[#6B6B73]">{item.vehicle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-[#A0A0A8] mb-5">
          See more live from the shop — we post finished projects daily.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://instagram.com/blueroseauto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow on Instagram
          </a>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-[#F5F5F5] border border-[#3C3D41] hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}
