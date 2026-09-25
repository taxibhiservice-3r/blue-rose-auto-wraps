"use client";

import { useState } from "react";
import type { FAQ } from "@/types";

interface Props {
  faqs: FAQ[];
  className?: string;
}

export default function FAQAccordion({ faqs, className = "" }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl className={`space-y-3 ${className}`}>
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl overflow-hidden">
          <dt>
            <button
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <span className="font-semibold text-[#F5F5F5] text-base sm:text-lg leading-snug pr-2">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-[#E91E8C] shrink-0 transition-transform duration-200 ${open === idx ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </dt>
          {open === idx && (
            <dd className="px-6 pb-5 text-[#A0A0A8] leading-relaxed border-t border-[#2C2D31] pt-4">
              {faq.answer}
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}
