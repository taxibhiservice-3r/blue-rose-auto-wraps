const TRUST_ITEMS = [
  { label: "Cast Vinyl Only", sub: "5–7 year lifespan" },
  { label: "Fleet Programs", sub: "2 to 40+ vehicles" },
  { label: "In-House Design", sub: "You own the files" },
  { label: "Springfield, OR", sub: "Serving all Lane County" },
  { label: "Mon–Sat", sub: "Open 6 days a week" },
  { label: "Cards Accepted", sub: "No cash-only hassle" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#1A1B1E] border-y border-[#2C2D31] py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E91E8C]" aria-hidden="true" />
              <div>
                <span className="text-sm font-semibold text-[#F5F5F5]">{item.label}</span>
                <span className="text-xs text-[#6B6B73] ml-2">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
