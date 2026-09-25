import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Quote Request Received | Blue Rose Wraps",
  description: "Thank you for requesting a quote from Blue Rose Wraps & Graphics.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-[#0A0A0B]">
      <div className="max-w-lg mx-auto text-center py-32">
        <div className="w-20 h-20 rounded-full gradient-brand flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#F5F5F5] mb-4">
          Request Received
        </h1>
        <p className="text-[#A0A0A8] text-lg mb-3 leading-relaxed">
          Thanks for reaching out. We&apos;ll review your request and get back to you within one business day with a detailed estimate.
        </p>
        <p className="text-[#6B6B73] text-sm mb-10">
          If you need to reach us sooner, call{" "}
          <a href={BUSINESS.phoneTel} className="text-[#E91E8C] hover:underline">
            {BUSINESS.phone}
          </a>{" "}
          during business hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="px-6 py-3 rounded-xl font-bold text-[#F5F5F5] border border-[#3C3D41] hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors"
          >
            Browse Services
          </Link>
        </div>
      </div>
    </section>
  );
}
