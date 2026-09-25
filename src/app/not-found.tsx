import Link from "next/link";
import { BUSINESS } from "@/data/business";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-[#0A0A0B]">
      <div className="max-w-lg mx-auto text-center py-32">
        <div className="font-display text-8xl font-bold gradient-brand-text mb-6" aria-hidden="true">
          404
        </div>
        <h1 className="font-display text-3xl font-bold text-[#F5F5F5] mb-4">
          Page Not Found
        </h1>
        <p className="text-[#A0A0A8] mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. Try navigating from the menu above, or contact us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
          <a
            href={BUSINESS.phoneTel}
            className="px-6 py-3 rounded-xl font-bold text-[#F5F5F5] border border-[#3C3D41] hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors"
          >
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
