import Link from "next/link";
import type { BreadcrumbItem } from "@/types";

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#6B6B73] flex-wrap">
      {items.map((item, idx) => (
        <span key={item.url} className="flex items-center gap-2">
          {idx > 0 && (
            <svg className="w-3 h-3 text-[#3C3D41]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          )}
          {idx < items.length - 1 ? (
            <Link href={item.url} className="hover:text-[#E91E8C] transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-[#A0A0A8]" aria-current="page">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
