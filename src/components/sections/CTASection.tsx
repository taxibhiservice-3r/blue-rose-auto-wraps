import Link from "next/link";
import { BUSINESS } from "@/data/business";

interface Props {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  variant?: "gradient" | "dark";
}

export default function CTASection({
  heading = "Ready for a quote?",
  subheading = "Free estimates for all wrap and graphics projects. Springfield, OR — serving all of Lane County.",
  primaryLabel = "Get a Free Quote",
  primaryHref = "/get-a-quote",
  variant = "gradient",
}: Props) {
  if (variant === "dark") {
    return (
      <section className="bg-[#1A1B1E] border-y border-[#2C2D31] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5] mb-4">{heading}</h2>
          <p className="text-[#A0A0A8] text-lg mb-8">{subheading}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              className="px-8 py-4 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity text-lg"
            >
              {primaryLabel}
            </Link>
            <a
              href={BUSINESS.phoneTel}
              className="px-8 py-4 rounded-xl font-bold text-[#F5F5F5] border-2 border-[#2C2D31] hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors text-lg"
            >
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="gradient-brand py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-white/80 text-lg mb-8">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="px-8 py-4 bg-white text-[#E91E8C] font-bold rounded-xl hover:bg-gray-100 transition-colors text-lg"
          >
            {primaryLabel}
          </Link>
          <a
            href={BUSINESS.phoneTel}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg"
          >
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
