import Link from "next/link";
import { BUSINESS } from "@/data/business";

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0A0A0B]/95 backdrop-blur-md border-t border-[#2C2D31] safe-area-pb">
      <div className="flex h-16 items-stretch">
        <a
          href={BUSINESS.phoneTel}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-[#A0A0A8] hover:text-[#F5F5F5] transition-colors border-r border-[#2C2D31]"
          aria-label={`Call Blue Rose Wraps at ${BUSINESS.phone}`}
        >
          <svg className="w-5 h-5 text-[#E91E8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[10px] font-semibold tracking-wide">CALL NOW</span>
        </a>

        <Link
          href="/get-a-quote"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 gradient-brand text-white"
          aria-label="Get a free wrap quote"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-[10px] font-bold tracking-wide">FREE QUOTE</span>
        </Link>

        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-[#A0A0A8] hover:text-[#F5F5F5] transition-colors border-l border-[#2C2D31]"
          aria-label="Get directions to Blue Rose Wraps"
        >
          <svg className="w-5 h-5 text-[#E91E8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-[10px] font-semibold tracking-wide">DIRECTIONS</span>
        </a>
      </div>
    </div>
  );
}
