import type { FAQ } from "@/types";

export const FAQS: FAQ[] = [
  // ── PRICING ──────────────────────────────────────────────────────────────
  {
    question: "How much does a full vehicle wrap cost in Eugene or Springfield, OR?",
    answer:
      "A full vehicle wrap in the Eugene–Springfield area typically ranges from $2,500–$5,000+ for a standard passenger car or SUV, depending on vehicle size, vinyl type, and design complexity. Commercial vans run $3,000–$6,000+. Box trucks and larger vehicles are quoted individually. Contact us for a free quote specific to your vehicle — prices vary enough by vehicle geometry that general ranges are rough guides, not firm numbers.",
    category: "pricing",
  },
  {
    question: "How much does a partial wrap cost?",
    answer:
      "Partial wraps typically run 40–60% of a comparable full wrap. The exact cost depends on how many panels are covered and whether the design includes digitally printed graphics or just solid vinyl. Contact us with your vehicle info and desired coverage for an accurate quote.",
    category: "pricing",
  },
  {
    question: "How much does commercial vehicle lettering cost?",
    answer:
      "Basic cut vinyl lettering (name, phone, website) on a single vehicle typically runs $150–$400 depending on quantity and complexity. Logo applications and multi-panel lettering packages run higher. Same-day turnaround is often available for straightforward lettering jobs.",
    category: "pricing",
  },
  {
    question: "Is a vehicle wrap cheaper than a paint job?",
    answer:
      "For most applications — especially color changes and custom finishes — a quality wrap is significantly less expensive than a comparable quality paint job. A budget spray-and-pray paint job will cost less than a wrap, but the quality, finish options, and reversibility of a cast vinyl wrap make it the better value for most owners.",
    category: "pricing",
  },
  {
    question: "Do you offer discounts for fleet wrap programs?",
    answer:
      "Yes. Fleet programs (3+ vehicles) receive volume pricing. The discount structure depends on fleet size, consistency of vehicle type, and program timeline. Contact us to discuss your fleet size and we'll put together a program quote.",
    category: "pricing",
  },

  // ── PROCESS ──────────────────────────────────────────────────────────────
  {
    question: "How long does a full vehicle wrap take?",
    answer:
      "Most full vehicle wraps take 3–5 business days from approved artwork to vehicle pickup. Complex designs or specialty materials may take longer. Simple color-change wraps on smaller vehicles can sometimes be completed in 2 days. We'll give you a realistic timeline before you commit.",
    category: "process",
  },
  {
    question: "How long does a partial wrap take?",
    answer:
      "Partial wraps typically take 1–2 business days, depending on coverage area and design complexity.",
    category: "process",
  },
  {
    question: "How long does a wrap removal take?",
    answer:
      "Most single-vehicle wrap removals take 4–8 hours in shop, plus adhesive cleanup time. Older wraps that have become brittle take longer. We'll assess your specific wrap and give you a timing estimate.",
    category: "process",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Yes — wrap installations, removals, and significant graphics work are scheduled appointments. Stop by or call us to schedule, and we'll confirm timing based on current shop availability.",
    category: "process",
  },
  {
    question: "Do I need to do anything to my vehicle before bringing it in?",
    answer:
      "Clean your vehicle before drop-off, but we perform our own professional wash and surface decontamination before any vinyl is applied. If you have any known paint issues (deep scratches, rust, previous body work), let us know in advance — surface condition directly affects wrap quality and longevity.",
    category: "process",
  },

  // ── MATERIALS ────────────────────────────────────────────────────────────
  {
    question: "What type of vinyl do you use for vehicle wraps?",
    answer:
      "We use cast vinyl for all full vehicle wraps and long-term applications. Cast vinyl is the industry standard for quality installations — it's more flexible than calendered vinyl, conforms to complex curves without memory, and maintains color stability for 5–7 years. We use calendered vinyl for short-term applications like seasonal promotions or temporary graphics.",
    category: "materials",
  },
  {
    question: "What finish options are available for vehicle wraps?",
    answer:
      "We offer gloss, satin, matte, metallic, brushed metallic, carbon fiber texture, color-shift/chameleon, and custom-printed digital finishes. For color-change wraps, we provide physical samples before you commit. Not every finish is available in every color — we'll walk you through what's available for your preferred look.",
    category: "materials",
  },
  {
    question: "How long does a vehicle wrap last?",
    answer:
      "A professionally installed cast vinyl wrap typically lasts 5–7 years with proper care. Calendered vinyl wraps last 2–3 years. Vehicles stored outdoors in direct sun full-time will see lifespan toward the lower end of the range. Proper washing and avoiding harsh chemicals extend wrap life significantly.",
    category: "materials",
  },

  // ── CARE ─────────────────────────────────────────────────────────────────
  {
    question: "How do I wash a wrapped vehicle?",
    answer:
      "Hand washing is always best. Use a mild soap and a soft cloth or microfiber mitt. Rinse thoroughly. Touchless automatic car washes are generally safe. Avoid brush-style automatic washes — the brushes can lift wrap edges. Avoid high-pressure wand washers directed at wrap edges. Don't use wax, polishing compound, or abrasive cleaners on matte or satin wraps.",
    category: "care",
  },
  {
    question: "Can I wax a wrapped vehicle?",
    answer:
      "Gloss vinyl wraps can be waxed with a silicone-free wax or a synthetic spray sealant. Do NOT wax matte or satin wraps — wax fills the texture and creates a patchy, uneven sheen. Use a matte-specific spray detailer for those finishes.",
    category: "care",
  },
  {
    question: "What should I avoid with a new wrap?",
    answer:
      "For the first 48 hours after installation: avoid washing, avoid parking in direct sun for extended periods, and avoid anything that puts lateral stress on wrap edges (gas cap areas, door handles). After 48 hours: normal use resumes. Avoid fuel and oil spills on the wrap surface — clean them off immediately if they occur.",
    category: "care",
  },

  // ── FLEET ────────────────────────────────────────────────────────────────
  {
    question: "Can you match a wrap on an existing vehicle in my fleet?",
    answer:
      "Yes. As long as we have your original brand standards file (logo, color codes, design specs), we can produce a matching wrap for new fleet additions. We maintain client brand files for exactly this purpose.",
    category: "fleet",
  },
  {
    question: "How do you handle large fleet programs — can you wrap multiple vehicles at once?",
    answer:
      "We schedule multi-vehicle fleet programs in batches to minimize your downtime. We don't park your whole fleet at once — we work through vehicles in a sequence that lets you keep operating. Exact batch scheduling depends on fleet size and vehicle type.",
    category: "fleet",
  },

  // ── GENERAL ──────────────────────────────────────────────────────────────
  {
    question: "Will a wrap damage my factory paint?",
    answer:
      "No — when installed and removed correctly, cast vinyl wraps do not damage factory paint. The adhesive bonds to the clear coat and releases cleanly. Wraps actually protect factory paint from UV fade and light abrasion. If the factory paint was already compromised before wrapping, removal may reveal that pre-existing damage.",
    category: "general",
  },
  {
    question: "Can I wrap a leased vehicle?",
    answer:
      "In most cases, yes. Most lease agreements do not prohibit vinyl wraps as long as the original paint is undamaged at turn-in — which a properly installed and removed cast vinyl wrap will leave intact. Verify with your specific lease agreement to be sure.",
    category: "general",
  },
  {
    question: "Do you serve the whole Eugene–Springfield area?",
    answer:
      "Yes. We serve Eugene, Springfield, Santa Clara, Coburg, Lowell, Veneta, Creswell, Harrisburg, Cottage Grove, Junction City, and North Springfield — all from our shop at 3436 Olympic St, Suite 300, Springfield, OR. Most clients drive to us; for large fleet programs, we can arrange on-site lettering in some cases.",
    category: "general",
  },
  {
    question: "Do you do custom design work, or do I need to supply my own files?",
    answer:
      "Both. We have in-house designers who specialize in vehicle wrap layouts and fleet graphic systems. If you have existing brand files, we can adapt them. If you're starting from scratch, we'll develop original artwork. Design fees are quoted separately from production/installation.",
    category: "general",
  },
];

export function getFaqsByCategory(category: FAQ["category"]): FAQ[] {
  return FAQS.filter((f) => f.category === category);
}
