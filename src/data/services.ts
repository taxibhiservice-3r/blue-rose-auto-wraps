import type { Service } from "@/types";

export const SERVICES: Service[] = [
  // ── VEHICLE WRAPS ────────────────────────────────────────────────────────
  {
    id: "full-vehicle-wraps",
    slug: "full-vehicle-wraps",
    name: "Full Vehicle Wraps",
    shortName: "Full Wraps",
    category: "vehicle-wraps",
    featured: true,
    icon: "🚗",
    tagline: "Complete bumper-to-bumper transformation — one install, infinite impression.",
    intro:
      "A full vehicle wrap covers every painted panel of your car, truck, van, or SUV with precision-cut, cast vinyl film. The result is a factory-quality finish in any color, pattern, or custom graphic — fully reversible, fully protected.",
    body: `Full vehicle wraps are the most impactful transformation available outside of a paint job — and unlike paint, wraps are reversible. Our installers stretch and conform cast vinyl to every curve, seam, and body line of your vehicle using heat guns and squeegees, not shortcuts. The adhesive doesn't touch your factory paint; it bonds only to the clear coat. Remove the wrap years later, and the original finish is preserved underneath.

We handle everything from single-color color changes to full custom-designed graphics layouts. The process starts with an accurate vehicle measure and a design consultation (or we work from your existing art file). We print on wide-format printers, laminate for UV protection and durability, and then install in our temperature-controlled Springfield shop.

Most full wraps take 3–5 business days from approved artwork to vehicle delivery — longer for complex designs or specialty materials. We'll give you a realistic timeline before you commit.`,
    benefits: [
      "Completely reversible — original factory paint preserved underneath",
      "Protects paint from UV fade, minor abrasions, and stone chips",
      "Available in matte, satin, gloss, metallic, chrome, brushed, and custom-print finishes",
      "Significantly less expensive than a quality repaint for color changes",
      "Instant brand billboard for business vehicles",
      "Can wrap over minor imperfections (deep scratches or dents must be repaired first for best results)",
    ],
    process: [
      { step: "Consultation & Measurement", detail: "We assess the vehicle, confirm your goals, and take accurate measurements for pricing and design." },
      { step: "Design & Art Approval", detail: "We create or refine your graphic layout. You approve a proof before any material is cut." },
      { step: "Print & Laminate", detail: "We print on cast vinyl, then apply UV-protective laminate for longevity and scratch resistance." },
      { step: "Surface Prep", detail: "Your vehicle is professionally washed and decontaminated. Any panel gaps and edges are cleaned." },
      { step: "Precision Installation", detail: "Our certified installers apply the wrap using professional tools, post-heating every edge and recess for a factory-level finish." },
      { step: "Final QC & Delivery", detail: "We inspect every seam and edge before you pick up. A care guide is included with every wrap." },
    ],
    faqs: [
      {
        q: "How long does a full vehicle wrap last?",
        a: "A professionally installed cast vinyl wrap typically lasts 5–7 years with proper care. Calendered vinyl (budget grade) used by some shops lasts 2–3 years. We use cast vinyl for all full wraps.",
      },
      {
        q: "Will a wrap damage my factory paint?",
        a: "No — when installed and removed correctly, cast vinyl wraps do not damage factory paint. In fact, they protect it from UV and light abrasion. The adhesive bonds to clear coat, not the paint itself.",
      },
      {
        q: "Can I wash my wrapped vehicle?",
        a: "Yes. Hand washing is recommended. Touchless automatic washes are generally safe. Brush-style car washes and high-pressure wand washers can lift edges — avoid those.",
      },
    ],
    relatedSlugs: ["color-change-wraps", "partial-wraps", "satin-matte-wraps", "professional-installation"],
    keywords: ["full vehicle wrap Eugene OR", "car wrap Springfield OR", "full wrap Lane County", "vehicle wrap near me"],
    metaTitle: "Full Vehicle Wraps in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Professional full vehicle wraps in Eugene and Springfield, OR. Cast vinyl, bumper-to-bumper installation, 5–7 year lifespan. Free design consultation. Call (541) 520-3807.",
  },

  {
    id: "partial-wraps",
    slug: "partial-wraps",
    name: "Partial Wraps",
    shortName: "Partial Wraps",
    category: "vehicle-wraps",
    featured: true,
    icon: "🎨",
    tagline: "Maximum visual impact at a fraction of the full-wrap investment.",
    intro:
      "A partial wrap covers the highest-visibility panels of your vehicle — hood, doors, rear, or any combination — leaving the rest in factory paint or complementary color. It's the most cost-effective way to achieve a bold, custom look or brand your business vehicle.",
    body: `Partial wraps work by targeting the panels that get the most attention: the rear third (including tailgate, bumper, and quarter panels), the hood and roof, both door panels, or any custom section. The graphic or color change is designed to blend with or contrast against the remaining factory paint.

For commercial vehicles, partial wraps typically cover the cargo box sides, rear doors, and sometimes the hood — the panels visible from the most angles in traffic. For personal vehicles, popular partial configurations include a contrasting hood-and-roof, a rear-panel graphic, or racing stripes with side accents.

We design partial wraps to look intentional and finished, not like a budget compromise. The wrap edges are always tucked into panel seams, door jambs, or logical break points so there's never a visible floating edge.`,
    benefits: [
      "30–60% less than a comparable full wrap",
      "Designed to integrate cleanly with existing paint color",
      "Ideal for brand messaging on fleet vehicles at lower per-unit cost",
      "Faster turnaround than full wraps — often 1–2 business days",
      "Same cast vinyl durability as full wraps",
    ],
    process: [
      { step: "Panel Selection", detail: "We help identify which panels give you the best ROI for brand visibility or personal style." },
      { step: "Design Integration", detail: "Artwork is designed around your existing paint color so the partial looks deliberate and finished." },
      { step: "Installation", detail: "Edges are tucked into seams — no floating edges, no visible cutlines in the middle of a panel." },
    ],
    faqs: [
      {
        q: "Will a partial wrap look unfinished?",
        a: "Not when designed properly. We always terminate edges in panel seams, door jambs, or where paint naturally breaks. The key is designing the graphic around the factory color, not ignoring it.",
      },
      {
        q: "What's the typical cost difference between partial and full wrap?",
        a: "Partial wraps typically run 40–60% of a comparable full wrap, depending on coverage. Contact us for a quote specific to your vehicle and desired coverage.",
      },
    ],
    relatedSlugs: ["full-vehicle-wraps", "vehicle-graphics-decals", "fleet-wraps"],
    keywords: ["partial wrap Eugene OR", "partial vehicle wrap Springfield", "partial car wrap Lane County"],
    metaTitle: "Partial Vehicle Wraps in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Partial vehicle wraps that look professionally finished, not budget. Eugene & Springfield, OR. Bold visuals at 40–60% the cost of a full wrap. Call (541) 520-3807.",
  },

  {
    id: "color-change-wraps",
    slug: "color-change-wraps",
    name: "Color Change Wraps",
    shortName: "Color Change",
    category: "vehicle-wraps",
    featured: true,
    icon: "🎭",
    tagline: "Reinvent your vehicle's look — without the permanence or cost of paint.",
    intro:
      "Color change wraps replace your vehicle's visible color with a solid, satin, matte, metallic, or specialty finish vinyl — delivering a showroom-quality transformation that's fully reversible when you're ready to sell or change it again.",
    body: `Color change wraps are the fastest-growing segment of the wrap market, and for good reason: a quality cast vinyl in a flat black, satin gray, gloss white, or any of hundreds of standard colors can be applied in 3–5 days and reversed without a trace. No rattle cans, no messy prep, no diminished resale value.

The finish options available in vinyl now rival or surpass what's available in paint. True matte black (not flat), satin wrap film, brushed metallic, color-shift chameleon, gloss candy colors, and carbon-fiber textures all exist in high-quality cast vinyl — most of them simply cannot be replicated in an affordable spray-paint application.

Color change wraps are popular for leased vehicles (lease terms typically allow wraps as long as the original paint is undamaged at turn-in), enthusiast builds, daily drivers with paint fade, and fleet vehicles that need a consistent branded color without the cost and downtime of painting.`,
    benefits: [
      "Hundreds of colors and finishes unavailable in standard automotive paint",
      "Fully reversible — ideal for leased vehicles",
      "Protects original paint, maintaining resale value",
      "No color-match waiting, no fumes, dramatically less shop time than a paint job",
      "Matte and satin finishes especially difficult to achieve in paint — trivial in vinyl",
    ],
    process: [
      { step: "Color & Finish Selection", detail: "We provide samples of available films. You approve a specific film before we order material." },
      { step: "Full Vehicle Prep", detail: "Complete wash, clay bar, and surface decontamination before any vinyl is applied." },
      { step: "Panel-by-Panel Installation", detail: "Every panel installed in sequence, edges heat-formed into door jambs and wheel arches for a seamless appearance." },
      { step: "Post-Install Inspection", detail: "Every seam, edge, and recess inspected under shop lighting before delivery." },
    ],
    faqs: [
      {
        q: "Can I wrap a leased vehicle?",
        a: "Yes, in most cases. Most lease agreements do not prohibit vinyl wraps as long as the factory paint is undamaged at turn-in. Cast vinyl, properly installed and removed, does not damage factory paint. Verify with your lease terms.",
      },
      {
        q: "Is a color change wrap cheaper than a paint job?",
        a: "For most vehicles, a quality color change wrap is significantly less expensive than a comparable quality paint job — especially for exotic finishes like matte or metallic. A budget rattle-can paint job will be cheaper, but the quality difference is significant.",
      },
    ],
    relatedSlugs: ["full-vehicle-wraps", "satin-matte-wraps", "chrome-delete"],
    keywords: ["color change wrap Eugene OR", "matte wrap Springfield", "vinyl color change Lane County"],
    metaTitle: "Color Change Wraps in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Color change vehicle wraps in Eugene & Springfield, OR. Matte, satin, gloss, metallic — fully reversible. Free color consultation. Call (541) 520-3807.",
  },

  {
    id: "chrome-delete",
    slug: "chrome-delete",
    name: "Chrome Delete",
    shortName: "Chrome Delete",
    category: "vehicle-wraps",
    featured: false,
    icon: "⚫",
    tagline: "Blackout or satin-delete every chrome trim piece for a cohesive custom look.",
    intro:
      "Chrome delete replaces factory chrome trim — grilles, window surrounds, door handles, mirror caps, badges, and accents — with gloss black, matte black, satin, or body-color vinyl for a cleaner, more aggressive, modern appearance.",
    body: `Factory chrome trim dates quickly and doesn't suit every build aesthetic. Chrome delete wraps these pieces with precisely cut vinyl films, achieving a blacked-out or custom-color look without painting or replacing the trim. The vinyl is removable if you ever want to return to stock — important for leased vehicles.

Popular chrome delete combinations: gloss black window trim on a white vehicle, satin black grille on a red truck, body-color door handles on a dark gray sedan. We handle every chrome-able piece: grille slats, mirror caps, window moldings, door handles, trunk trim, badging, and roof rails.`,
    benefits: [
      "Dramatically cleaner, more modern look",
      "Costs a fraction of painting or replacing trim",
      "Fully reversible",
      "Can match or contrast any body color",
      "Available in gloss, satin, matte, and brushed finishes",
    ],
    process: [
      { step: "Piece Identification", detail: "We map every chrome piece to be deleted and confirm desired finish." },
      { step: "Precision Cut Wrap", detail: "Film is precisely cut to each trim piece and applied without gaps or visible edges." },
    ],
    faqs: [
      {
        q: "Does chrome delete work on plastic chrome or real chrome?",
        a: "Both. Plastic chrome (common on most modern vehicles) and real plated chrome both accept vinyl wrap film. Adhesion is excellent on both surfaces with proper prep.",
      },
    ],
    relatedSlugs: ["color-change-wraps", "full-vehicle-wraps", "racing-stripes-accents"],
    keywords: ["chrome delete Eugene OR", "blackout trim Springfield", "chrome delete Lane County"],
    metaTitle: "Chrome Delete Wraps in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Chrome delete wraps for grilles, window trim, mirrors & more. Gloss black, matte, satin finishes. Eugene & Springfield, OR. Call (541) 520-3807.",
  },

  {
    id: "satin-matte-wraps",
    slug: "satin-matte-wraps",
    name: "Satin & Matte Wraps",
    shortName: "Matte / Satin",
    category: "vehicle-wraps",
    featured: false,
    icon: "🖤",
    tagline: "The finish that stops traffic — understated and impossible to replicate in paint.",
    intro:
      "Satin and matte vinyl wraps deliver a non-reflective, velvety finish that simply cannot be achieved in standard automotive paint at comparable cost. The result is a quietly aggressive, head-turning look that photographs beautifully and wears exceptionally well.",
    body: `Matte and satin finishes are among the most requested wrap options — and for good reason. True matte (zero gloss) is the most dramatic finish available in vinyl, while satin sits between matte and gloss with a subtle sheen that changes in different lighting. Both finishes require the same installation skill as gloss wraps, but the surface texture means fingerprints and minor abrasions are more visible — regular light cleaning keeps them looking sharp.

We carry matte and satin in the full color spectrum: black, white, gray, navy, forest green, burgundy, and more. We'll provide samples before you commit to a film.`,
    benefits: [
      "Unique, non-reflective finish not achievable with standard paint",
      "Available in black, white, gray, navy, and many other colors",
      "Hides surface imperfections better than gloss wraps",
      "Sophisticated, premium appearance on any vehicle class",
    ],
    process: [
      { step: "Finish Selection", detail: "We provide matte and satin sample swatches across all available colors." },
      { step: "Full Prep + Install", detail: "Same precision process as any full or partial wrap — proper prep is critical for non-gloss finishes." },
    ],
    faqs: [
      {
        q: "Are matte wraps harder to keep clean?",
        a: "Matte and satin finishes require hand washing — no wax, no polishing compound, no automatic car washes with brushes. Use a matte-safe spray detailer for regular maintenance. They're not harder to maintain, just different.",
      },
    ],
    relatedSlugs: ["full-vehicle-wraps", "color-change-wraps"],
    keywords: ["matte wrap Eugene OR", "satin wrap Springfield", "matte car wrap Lane County"],
    metaTitle: "Matte & Satin Vehicle Wraps in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Matte and satin vinyl wraps in Eugene & Springfield, OR. True non-reflective finish — unavailable in standard paint. Free color samples. Call (541) 520-3807.",
  },

  // ── COMMERCIAL / FLEET ────────────────────────────────────────────────────
  {
    id: "fleet-wraps",
    slug: "fleet-wraps",
    name: "Fleet Wraps",
    shortName: "Fleet Wraps",
    category: "commercial-fleet",
    featured: true,
    icon: "🚛",
    tagline: "Turn your fleet into a rolling billboard — consistent branding, measurable reach.",
    intro:
      "Fleet wraps transform commercial vehicles into full-time brand ambassadors. Whether you operate two company trucks or a 40-vehicle service fleet, we handle multi-unit programs with consistent color matching, design, and installation.",
    body: `Fleet wraps are the highest-ROI advertising spend most local businesses never properly evaluate. A wrapped service vehicle in Springfield or Eugene gets 30,000–70,000 impressions per day based on traffic counts alone — that's per vehicle, per day, for the life of the wrap. Compared to recurring ad spend, the cost-per-impression is exceptional.

The challenge with fleet programs is consistency. Every truck needs to look identical — same colors, same logo placement, same finish — even if vehicles are wrapped months apart. We maintain your brand standards file and can match existing wraps on existing fleet vehicles.

We work with HVAC contractors, plumbers, electricians, landscapers, real estate teams, food & beverage companies, delivery fleets, and property management companies throughout the Eugene–Springfield area. The first step is a fleet audit: we inventory your vehicles, identify which need full vs. partial wraps for your messaging goals, and build a phased program that fits your budget timeline.`,
    benefits: [
      "30,000–70,000+ brand impressions per vehicle per day",
      "Lower cost-per-impression than any other local advertising medium",
      "Consistent brand identity across every vehicle in your fleet",
      "Tax-deductible as a business advertising expense (consult your accountant)",
      "Protects vehicle paint, maintaining fleet resale value",
      "Multi-vehicle programs include volume pricing",
    ],
    process: [
      { step: "Fleet Audit", detail: "We inventory your vehicles, assess condition, and recommend full vs. partial coverage per vehicle type." },
      { step: "Brand Standards Review", detail: "We work from your existing brand guidelines or develop a fleet-specific graphic system." },
      { step: "Template Development", detail: "Templates built to your exact vehicle makes/models ensure consistent placement across every unit." },
      { step: "Phased Installation", detail: "We schedule installations to minimize fleet downtime — you never lose your whole fleet at once." },
      { step: "Ongoing Support", detail: "We maintain your brand file for future replacements, additions, or repairs." },
    ],
    faqs: [
      {
        q: "What's the minimum fleet size for a program?",
        a: "We work with fleets of any size — from 2 vehicles to 40+. Volume pricing typically starts at 3+ vehicles.",
      },
      {
        q: "Can you match an existing wrap on a vehicle already in our fleet?",
        a: "Yes. As long as we have your brand standards (color codes, logo files), we can match existing wraps precisely.",
      },
      {
        q: "How do fleet wraps hold up on commercial vehicles?",
        a: "Cast vinyl on commercial vehicles typically lasts 4–6 years, depending on use, storage conditions, and how often the vehicle is washed. Fleet vehicles that sit outside in direct sun 24/7 will see somewhat shorter lifespans than vehicles stored in a covered lot.",
      },
    ],
    relatedSlugs: ["van-wraps", "box-truck-wraps", "commercial-vehicle-lettering", "graphic-design-services"],
    keywords: ["fleet wraps Eugene OR", "commercial vehicle wraps Springfield", "fleet graphics Lane County", "business vehicle wraps"],
    metaTitle: "Fleet Vehicle Wraps in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Commercial fleet wraps in Eugene & Springfield, OR. Multi-vehicle programs, consistent branding, volume pricing. Turn your fleet into a rolling billboard. Call (541) 520-3807.",
  },

  {
    id: "van-wraps",
    slug: "van-wraps",
    name: "Van Wraps",
    shortName: "Van Wraps",
    category: "commercial-fleet",
    featured: false,
    icon: "🚐",
    tagline: "Full-surface van wraps for maximum brand real estate on your biggest mobile canvas.",
    intro:
      "Cargo and passenger vans offer the largest flat panel surface of any commercial vehicle — making them the ideal canvas for full-coverage fleet wraps. We wrap Sprinters, Transits, ProMasters, full-size cargo vans, and passenger vans for service companies throughout the Eugene–Springfield area.",
    body: `A Transit or Sprinter van's long, flat cargo box sides are pure advertising real estate. A well-designed van wrap can feature your company name, phone number, services, and a bold visual — all visible at 60 mph. We design for maximum legibility at speed, not just parking-lot aesthetics.

Popular van wrap clients in our service area: HVAC and plumbing companies, electrical contractors, carpet cleaning services, pest control companies, catering and food service businesses, delivery services, and healthcare home-visit companies.`,
    benefits: [
      "Maximum surface area for messaging and brand imagery",
      "Highly visible at highway speeds — designed for legibility in motion",
      "Covers minor cargo box dings and scratches while protecting against new ones",
    ],
    process: [
      { step: "Van Measurement", detail: "Accurate measurement for your exact make/model/year ensures graphic placement is precise." },
      { step: "Design for Legibility", detail: "We design for 60-mph readability, not just static display." },
      { step: "Full Install", detail: "All panels, wheel arches, handles, and custom cutouts handled by our installers." },
    ],
    faqs: [
      {
        q: "Do you wrap the roof of the van?",
        a: "Roof wraps are available but are typically not included in standard van wrap quotes. They add cost and are only visible from elevated positions. We'll discuss whether it makes sense for your specific use case.",
      },
    ],
    relatedSlugs: ["fleet-wraps", "box-truck-wraps", "commercial-vehicle-lettering"],
    keywords: ["van wrap Eugene OR", "cargo van wrap Springfield", "Sprinter wrap Lane County"],
    metaTitle: "Van Wraps in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Cargo and passenger van wraps in Eugene & Springfield, OR. Sprinter, Transit, ProMaster. Designed for visibility at speed. Call (541) 520-3807.",
  },

  {
    id: "box-truck-wraps",
    slug: "box-truck-wraps",
    name: "Box Truck Wraps",
    shortName: "Box Truck Wraps",
    category: "commercial-fleet",
    featured: false,
    icon: "📦",
    tagline: "Large-format branding for large-format vehicles — seen from a block away.",
    intro:
      "Box trucks are moving billboards in the truest sense — at 10–24 feet long with flat, uninterrupted panel surfaces, a wrapped box truck is visible from a city block away. We wrap all box truck sizes and configurations throughout the Eugene–Springfield area.",
    body: `Box truck wraps are particularly impactful for moving companies, rental companies, delivery services, food distributors, equipment rental firms, and any business that operates a visible presence in commercial and residential neighborhoods.

We work with 10-ft, 14-ft, 16-ft, 20-ft, and 24-ft box configurations. Cab wraps are handled separately from the box and can be matched to create a single unified look across the full vehicle.`,
    benefits: [
      "Largest mobile advertising surface available",
      "Dramatically increases perceived business size and professionalism",
      "Visible from 100+ feet in traffic",
    ],
    process: [
      { step: "Box + Cab Measurement", detail: "Measured and templated separately; matched in design for a unified visual." },
      { step: "Print at Scale", detail: "Wide-format printing at full resolution for crisp graphics at viewing distances of 20–100 feet." },
      { step: "Install", detail: "Box truck wraps installed on-site or in our Springfield shop depending on vehicle size." },
    ],
    faqs: [
      {
        q: "Can you wrap a box truck at our location rather than your shop?",
        a: "For larger trucks that can't easily fit in our shop, we can arrange an on-site installation. Contact us to discuss logistics.",
      },
    ],
    relatedSlugs: ["fleet-wraps", "van-wraps", "trailer-wraps"],
    keywords: ["box truck wrap Eugene OR", "box truck graphics Springfield", "truck wrap Lane County"],
    metaTitle: "Box Truck Wraps in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Professional box truck wraps in Eugene & Springfield, OR. All sizes from 10–24 ft. Large-format printing, precision installation. Call (541) 520-3807.",
  },

  {
    id: "commercial-vehicle-lettering",
    slug: "commercial-vehicle-lettering",
    name: "Commercial Vehicle Lettering",
    shortName: "Vehicle Lettering",
    category: "commercial-fleet",
    featured: false,
    icon: "🔤",
    tagline: "Cut vinyl lettering — the fastest, most affordable way to brand a business vehicle.",
    intro:
      "Precision-cut vinyl lettering and logo decals are the budget-friendly alternative to full wraps for commercial vehicles. Your company name, phone number, website, license number, and DOT compliance markings professionally applied to any fleet vehicle.",
    body: `Not every business vehicle needs a full wrap. For companies that need professional-looking branding at a lower investment, cut vinyl lettering delivers a clean, readable result. We handle company name, tagline, phone number, website URL, license number, USDOT number, GVWR rating (where legally required), and custom logo shapes.

DOT-compliant lettering follows FMCSA regulations for commercial vehicles operating in interstate commerce — we can verify requirements for your vehicle class and ensure compliant application.`,
    benefits: [
      "Most affordable commercial vehicle branding option",
      "Installed in hours, not days",
      "Available in hundreds of colors",
      "Fully removable without paint damage",
      "DOT-compliant lettering available",
    ],
    process: [
      { step: "Copy & Compliance Review", detail: "We review required text and any applicable FMCSA/DOT compliance requirements." },
      { step: "Layout & Approval", detail: "Digital proof provided before cutting any vinyl." },
      { step: "Same-Day or Next-Day Install", detail: "Most lettering jobs are completed the same day." },
    ],
    faqs: [
      {
        q: "What's required for DOT compliance lettering?",
        a: "FMCSA requires USDOT number, motor carrier number (if applicable), company name, and GVWR on commercial vehicles over 10,001 lbs operating in interstate commerce. Requirements vary — we can review your specific situation.",
      },
    ],
    relatedSlugs: ["fleet-wraps", "van-wraps", "vehicle-graphics-decals"],
    keywords: ["vehicle lettering Eugene OR", "truck lettering Springfield", "commercial vehicle decals Lane County"],
    metaTitle: "Commercial Vehicle Lettering in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Cut vinyl vehicle lettering and DOT-compliant fleet lettering in Eugene & Springfield, OR. Fast turnaround, professional finish. Call (541) 520-3807.",
  },

  // ── GRAPHICS & DECALS ────────────────────────────────────────────────────
  {
    id: "vehicle-graphics-decals",
    slug: "vehicle-graphics-decals",
    name: "Vehicle Graphics & Decals",
    shortName: "Decals & Graphics",
    category: "graphics-decals",
    featured: true,
    icon: "✨",
    tagline: "Custom-designed graphics that make any vehicle unmistakable.",
    intro:
      "Custom vehicle graphics and decals cover everything from a single logo decal on a door panel to a complex multi-panel design that wraps the entire body. We handle design, print, and precise installation for personal and commercial applications.",
    body: `Vehicle graphics are the broadest category in the wrap niche — everything from a small tail-gate logo to a race car livery to a complex business graphic that uses both cut vinyl text and digitally printed graphic panels.

We produce graphics on cast and calendered vinyl depending on application size and lifespan requirements, digitally printed and cut with precision plotters. Short-run graphics for a single vehicle, multi-vehicle fleet deployments, seasonal or promotional overlays — we handle all of it.

Custom design is available in-house. Bring your brand guidelines or a rough sketch and we'll develop a professional vehicle graphic that works for your specific vehicle geometry.`,
    benefits: [
      "Custom-designed in-house or from your provided files",
      "Short-run capable — no minimum quantity for custom graphics",
      "Available in cut vinyl, digitally printed, or combination",
      "Installed to your vehicle, not handed over as a sticker sheet",
    ],
    process: [
      { step: "Design or File Review", detail: "We develop original artwork or review your provided files for print-readiness." },
      { step: "Print + Cut", detail: "Produced on our wide-format print-and-cut system for accuracy." },
      { step: "Application", detail: "Applied to your vehicle using transfer tape and squeegee technique for bubble-free results." },
    ],
    faqs: [
      {
        q: "Can I supply my own design file?",
        a: "Yes. We prefer vector files (AI, EPS, PDF) at full size, but we can work with high-resolution raster files for photographic graphics. Contact us to confirm file requirements before sending artwork.",
      },
    ],
    relatedSlugs: ["partial-wraps", "vehicle-lettering", "window-graphics-perforated-vinyl"],
    keywords: ["vehicle graphics Eugene OR", "car decals Springfield", "custom decals Lane County"],
    metaTitle: "Custom Vehicle Graphics & Decals in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Custom vehicle graphics and decals designed and installed in Eugene & Springfield, OR. Personal and commercial. In-house design available. Call (541) 520-3807.",
  },

  {
    id: "window-graphics-perforated-vinyl",
    slug: "window-graphics-perforated-vinyl",
    name: "Window Graphics & Perforated Vinyl",
    shortName: "Window Graphics",
    category: "graphics-decals",
    featured: false,
    icon: "🪟",
    tagline: "Full-coverage window graphics with unobstructed outward visibility.",
    intro:
      "Perforated window vinyl lets you display a full-coverage graphic on vehicle windows while maintaining normal visibility from inside. It's the standard for rear-window vehicle advertising and commercial storefront window graphics.",
    body: `Perforated vinyl (also called one-way vision vinyl) contains thousands of tiny holes — typically 50% open — that allow light and visibility to pass from inside out, while the printed graphic is visible from outside. It's used on rear windows, rear side windows, and commercial storefront windows.

For vehicles: rear window graphics are the most common application, turning a plain rear window into a high-visibility brand placement. For storefronts: full window coverage with graphics while maintaining customer visibility in and out of the space.

We apply perforated vinyl on rear windows and side windows (where legal and appropriate). For driver/passenger windows, we work only with applicable local vehicle code requirements.`,
    benefits: [
      "Full graphic coverage on windows without blocking interior visibility",
      "Rear window branding is one of the most viewed surfaces on any vehicle",
      "Storefront applications: privacy + branding without blacking out the window",
      "Removable without damaging glass",
    ],
    process: [
      { step: "Window Measurement", detail: "Precise measurement ensures the graphic fits without trimming at installation." },
      { step: "Print on Perforated Vinyl", detail: "Printed on quality 50/50 perforated vinyl for optimal visibility balance." },
      { step: "Application", detail: "Applied to the exterior surface with proper squeegee technique; edges finished cleanly." },
    ],
    faqs: [
      {
        q: "Does perforated window vinyl reduce visibility much?",
        a: "Standard 50/50 perforated vinyl reduces outward visibility somewhat, similar to looking through a screen. It's legal for rear windows and side windows in Oregon. We don't apply it to front or driver/passenger windows.",
      },
    ],
    relatedSlugs: ["vehicle-graphics-decals", "storefront-signage"],
    keywords: ["window graphics Eugene OR", "perforated vinyl Springfield", "rear window wrap Lane County"],
    metaTitle: "Window Graphics & Perforated Vinyl in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Vehicle and storefront window graphics using perforated vinyl. Full coverage, inside visibility maintained. Eugene & Springfield, OR. Call (541) 520-3807.",
  },

  {
    id: "racing-stripes-accents",
    slug: "racing-stripes-accents",
    name: "Racing Stripes & Accent Graphics",
    shortName: "Stripes & Accents",
    category: "graphics-decals",
    featured: false,
    icon: "⚡",
    tagline: "Precision-cut stripes, hood accents, and body graphics that stay on.",
    intro:
      "Cut vinyl racing stripes, hood scoops, hash marks, roof accents, and body pinstripes — professionally applied with precision alignment tools, not applied by eye.",
    body: `Racing stripes and accent graphics are deceptively technical. Misaligned stripes or stripes that drift off-center ruin an otherwise well-done build. We use laser alignment guides, digital templates for popular vehicle models, and two-person installation teams on all multi-panel stripe jobs to ensure straight, consistent results.

Popular applications: dual racing stripes (hood to trunk), cowl-induction hood accents, roof stripes on muscle cars and sport compacts, door hash marks, lower side stripes, and factory-replica graphic packages for specific model trims.`,
    benefits: [
      "Precise alignment using laser guides and vehicle-specific templates",
      "Available in any color, gloss, matte, or metallic finish",
      "Significantly less expensive than painted stripes",
      "Fully removable",
    ],
    process: [
      { step: "Alignment Planning", detail: "We identify centerline, body lines, and reference points before any vinyl is cut." },
      { step: "Template or Custom Cut", detail: "We use pre-made templates for popular models or custom-cut for unique configurations." },
      { step: "Two-Person Application", detail: "All multi-panel stripe jobs use two installers for perfect alignment through transitions." },
    ],
    faqs: [
      {
        q: "Can you replicate factory OEM stripe packages?",
        a: "In most cases, yes. We have templates for many popular OEM stripe configurations and can produce accurate replicas in any color.",
      },
    ],
    relatedSlugs: ["full-vehicle-wraps", "chrome-delete", "vehicle-graphics-decals"],
    keywords: ["racing stripes Eugene OR", "vinyl stripes Springfield", "hood stripes Lane County"],
    metaTitle: "Racing Stripes & Accent Graphics in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Precision-cut racing stripes and vinyl accent graphics in Eugene & Springfield, OR. Laser-aligned, perfect symmetry. All colors and finishes. Call (541) 520-3807.",
  },

  // ── SIGNAGE & PRINT ──────────────────────────────────────────────────────
  {
    id: "storefront-signage",
    slug: "storefront-signage",
    name: "Storefront Signage",
    shortName: "Storefront Signs",
    category: "signage-print",
    featured: true,
    icon: "🏪",
    tagline: "Your storefront is your first sales pitch — make it say something worth reading.",
    intro:
      "We design and produce storefront signage for businesses throughout the Eugene–Springfield area: window graphics, door lettering, hanging signs, mounted panels, and full exterior vinyl applications that make your location undeniable.",
    body: `Storefront signage is as much a local SEO signal as it is a visibility tool — a clearly labeled, well-branded physical location builds real-world trust that no amount of online reviews can replicate. We work with retail shops, service businesses, restaurants, medical offices, and professional services companies to brand their physical spaces.

Our storefront signage work includes: window graphics (full and partial coverage), door lettering, mounted aluminum or PVC sign panels, vinyl applications on concrete or brick, and promotional window displays.`,
    benefits: [
      "First impression for walk-in customers",
      "Professional appearance builds immediate trust",
      "Window graphics double as privacy and branding",
      "Changeable promotional displays without repainting",
    ],
    process: [
      { step: "Site Visit or Photos", detail: "We assess the storefront geometry, substrate, and signage regulations." },
      { step: "Design", detail: "Layout designed for legibility at street viewing distance." },
      { step: "Production + Installation", detail: "Produced and installed by our team — not handed off to a general contractor." },
    ],
    faqs: [
      {
        q: "Do you need a permit for storefront signage in Springfield?",
        a: "Permit requirements vary by sign type, size, and City of Springfield zoning. We can advise on typical requirements and what's generally permit-exempt, but final permitting responsibility rests with the property owner or tenant.",
      },
    ],
    relatedSlugs: ["wall-murals-interior-branding", "banners-promotional-materials", "window-graphics-perforated-vinyl"],
    keywords: ["storefront signage Eugene OR", "business signage Springfield", "window signs Lane County"],
    metaTitle: "Storefront Signage in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Storefront signage, window graphics, and door lettering in Eugene & Springfield, OR. Design, production, and installation by Blue Rose Wraps. Call (541) 520-3807.",
  },

  {
    id: "banners-promotional-materials",
    slug: "banners-promotional-materials",
    name: "Banners & Promotional Materials",
    shortName: "Banners",
    category: "signage-print",
    featured: false,
    icon: "🎌",
    tagline: "Event banners, trade show graphics, and promotional print — from design to delivery.",
    intro:
      "Wide-format banners, event backdrops, step-and-repeat displays, feather flags, and A-frame inserts for businesses and organizations throughout the Eugene–Springfield area.",
    body: `From a 3×8 ft vinyl banner for a grand opening to a full trade show booth backdrop, we produce high-quality wide-format print for any promotional use. All banners are printed on heavy-duty vinyl with reinforced hems and grommet finishing. We handle design, print, and delivery — you pick them up ready to hang.`,
    benefits: [
      "Same-day or next-day turnaround on standard sizes",
      "Outdoor-rated, UV-resistant inks",
      "Reinforced hems and grommets standard",
      "Full design service available",
    ],
    process: [
      { step: "Size + Finish Selection", detail: "We confirm size, substrate (vinyl, mesh, fabric), and finishing (grommets, pole pockets, velcro)." },
      { step: "Design or File Review", detail: "We design or review your art for print-readiness at the correct resolution." },
      { step: "Print + Finish", detail: "Produced on wide-format printers; hemmed and grommeted in-house." },
    ],
    faqs: [
      {
        q: "What's the typical turnaround on a banner?",
        a: "Standard vinyl banners on approved artwork typically ship within 1–2 business days. Larger or more complex jobs may take longer.",
      },
    ],
    relatedSlugs: ["storefront-signage", "trade-show-event-graphics", "vehicle-graphics-decals"],
    keywords: ["banners Eugene OR", "vinyl banner Springfield", "event graphics Lane County"],
    metaTitle: "Custom Banners & Promotional Materials in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Custom vinyl banners, event graphics, and promotional materials in Eugene & Springfield, OR. Design, print, and finishing in-house. Call (541) 520-3807.",
  },

  // ── DESIGN + INSTALL ────────────────────────────────────────────────────
  {
    id: "graphic-design-services",
    slug: "graphic-design-services",
    name: "Graphic Design Services",
    shortName: "Design",
    category: "design-install",
    featured: true,
    icon: "🖥️",
    tagline: "In-house design that's built for vinyl — not adapted from a logo that was never intended for a vehicle.",
    intro:
      "Our in-house designers develop vehicle wrap layouts, fleet graphic systems, storefront signage designs, and print graphics from scratch — or adapt your existing brand assets for optimal appearance on vehicle surfaces.",
    body: `A vehicle wrap designed by someone who doesn't understand how vinyl behaves on curved surfaces will always look off — the logo placement will fight the body lines, the typography won't read at speed, and the color will render differently than expected on a high-gloss vehicle surface.

Our design process starts with accurate vehicle templates and a real understanding of how print color, vinyl finish, and vehicle geometry interact. We develop 3D rendered mockups for approval before any material is produced.

We deliver print-ready production files, which means if you take your project to a different printer in the future, you won't start from scratch. We also maintain your brand files for future fleet additions.`,
    benefits: [
      "Vehicle-specific templates ensure accurate design representation",
      "3D rendered mockups for approval before production",
      "Files delivered print-ready and in your ownership",
      "Designers with vehicle wrap production experience — not general graphic designers",
      "Brand standards compliance for fleet programs",
    ],
    process: [
      { step: "Brief + Brand Review", detail: "We review your brand guidelines, goals, and vehicle(s) before starting any design work." },
      { step: "Concept Development", detail: "One to two concepts developed and presented as 3D vehicle mockups." },
      { step: "Revisions", detail: "Included revision rounds based on scope agreed at the outset." },
      { step: "File Delivery", detail: "Print-ready files delivered in standard formats. You own the final files." },
    ],
    faqs: [
      {
        q: "Can I use the design files at another printer?",
        a: "Yes. We deliver production-ready files that belong to you. We hope you'll continue working with us, but we don't hold your artwork hostage.",
      },
    ],
    relatedSlugs: ["fleet-wraps", "full-vehicle-wraps", "storefront-signage"],
    keywords: ["vehicle wrap design Eugene OR", "graphic design Springfield", "wrap design Lane County"],
    metaTitle: "Vehicle Wrap Graphic Design in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "In-house vehicle wrap and fleet graphic design in Eugene & Springfield, OR. 3D mockups, print-ready files, brand-compliant fleet systems. Call (541) 520-3807.",
  },

  {
    id: "wrap-removal",
    slug: "wrap-removal",
    name: "Wrap Removal",
    shortName: "Removal",
    category: "design-install",
    featured: false,
    icon: "🔧",
    tagline: "Safe, clean wrap removal — no heat damage, no adhesive residue, no paint surprises.",
    intro:
      "When a wrap reaches end of life, it's time to remove, not neglect. Properly removing an aged wrap requires careful heat application and adhesive residue cleaning to ensure the factory paint beneath is undamaged.",
    body: `Wrap removal is a job that looks simple and isn't. Vinyl that's been on a vehicle for 5–7 years becomes brittle and can shred rather than peel, leaving adhesive residue embedded in paint texture. Heat guns used incorrectly burn clear coat. Scrapers used incorrectly scratch paint.

We remove wraps using professional-grade heat guns at calibrated temperatures and purpose-made plastic scrapers, followed by an adhesive residue treatment that leaves the surface clean and ready for a new wrap, wax, or sealant.

If you're considering a new wrap after removal, we can assess the paint condition and advise on what, if any, prep work is needed before the new installation.`,
    benefits: [
      "No paint damage when performed by trained installers",
      "Adhesive residue fully cleaned",
      "Paint condition assessment included",
      "Prepares surface for immediate re-wrap or paint protection",
    ],
    process: [
      { step: "Heat + Peel", detail: "Controlled heat application softens adhesive; vinyl removed in large panels to avoid shredding." },
      { step: "Adhesive Cleanup", detail: "Residue removed using purpose-formulated adhesive remover; no solvents that damage clear coat." },
      { step: "Surface Assessment", detail: "We inspect the revealed paint for any wear, UV damage, or issues to address before re-wrap." },
    ],
    faqs: [
      {
        q: "Will wrap removal damage my paint?",
        a: "Not when performed by trained professionals on intact factory paint. If the paint was already compromised before the wrap was applied, wrap removal may reveal that damage.",
      },
    ],
    relatedSlugs: ["full-vehicle-wraps", "color-change-wraps", "professional-installation"],
    keywords: ["wrap removal Eugene OR", "vinyl removal Springfield", "remove car wrap Lane County"],
    metaTitle: "Vehicle Wrap Removal in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Safe vinyl wrap removal in Eugene & Springfield, OR. No paint damage, full adhesive cleanup, paint condition assessment. Call (541) 520-3807.",
  },

  {
    id: "professional-installation",
    slug: "professional-installation",
    name: "Professional Installation",
    shortName: "Installation",
    category: "design-install",
    featured: false,
    icon: "🛠️",
    tagline: "The install is where the design lives or dies — we don't cut corners.",
    intro:
      "Supply your own printed vinyl and our certified installers will apply it with the same precision we bring to every in-house project. We also re-install wraps removed during body repairs or when a wrap needs a single-panel replacement.",
    body: `Professional wrap installation is a skilled trade. The difference between a novice install and a professional one is visible from 10 feet: air bubbles trapped under the film, lifted edges at seams, wrinkles at recesses, fish-tailing at door jambs, and misaligned panels.

Our installers use professional squeegees, heat guns with adjustable airflow, infrared thermometers, and installation gloves on every job. We work in our temperature-controlled Springfield shop for consistent results year-round — cold vinyl is stiff, hot vinyl is unforgiving, and the shop temperature directly affects the quality of the install.`,
    benefits: [
      "Certified installers with hands-on experience on hundreds of vehicles",
      "Temperature-controlled shop environment for year-round quality",
      "Supply-your-own-film option available",
      "Single-panel replacements and repairs accepted",
    ],
    process: [
      { step: "Film Verification", detail: "We inspect supplied film for print quality and correct dimensions before beginning install." },
      { step: "Surface Prep", detail: "Vehicle washed, clayed, and decontaminated regardless of its apparent condition." },
      { step: "Precision Install", detail: "Panel-by-panel application with post-heat forming at every edge, recess, and seam." },
    ],
    faqs: [
      {
        q: "Can I provide my own printed vinyl for installation?",
        a: "Yes. We accept customer-supplied films for installation. The film must meet our specifications for format, laminate, and dimensional accuracy. Contact us before ordering film from another supplier to confirm compatibility.",
      },
    ],
    relatedSlugs: ["full-vehicle-wraps", "fleet-wraps", "wrap-removal"],
    keywords: ["wrap installation Eugene OR", "vinyl installer Springfield", "professional wrap installer Lane County"],
    metaTitle: "Professional Vehicle Wrap Installation in Eugene & Springfield, OR | Blue Rose Wraps",
    metaDescription: "Certified wrap installation in Eugene & Springfield, OR. Bring your own film or use ours. Temperature-controlled shop, precision technique. Call (541) 520-3807.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: Service["category"]): Service[] {
  return SERVICES.filter((s) => s.category === category);
}

export function getFeaturedServices(): Service[] {
  return SERVICES.filter((s) => s.featured);
}

export const SERVICE_CATEGORIES: Record<
  Service["category"],
  { label: string; description: string }
> = {
  "vehicle-wraps": {
    label: "Vehicle Wraps",
    description: "Full wraps, partial wraps, color changes, and specialty finishes",
  },
  "commercial-fleet": {
    label: "Fleet & Commercial",
    description: "Multi-vehicle fleet programs, van wraps, box trucks, DOT lettering",
  },
  specialty: {
    label: "Specialty Vehicles",
    description: "RVs, boats, motorcycles, and powersports",
  },
  "graphics-decals": {
    label: "Graphics & Decals",
    description: "Custom vehicle graphics, window vinyl, racing stripes",
  },
  "signage-print": {
    label: "Signage & Print",
    description: "Storefront signs, banners, and promotional materials",
  },
  "design-install": {
    label: "Design & Installation",
    description: "In-house graphic design, professional installation, wrap removal",
  },
};
