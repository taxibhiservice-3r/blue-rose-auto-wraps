"use client";

import { useState } from "react";
import { SERVICES } from "@/data/services";
import { BUSINESS } from "@/data/business";

const VEHICLE_TYPES = [
  "Passenger Car (Sedan/Coupe/Hatchback)",
  "SUV / Crossover",
  "Pickup Truck",
  "Cargo Van",
  "Passenger Van",
  "Box Truck (10–24 ft)",
  "Semi / Commercial Truck",
  "RV / Motorhome",
  "Motorcycle / Powersports",
  "Other",
];

const inputClass =
  "w-full bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-4 py-3 text-[#F5F5F5] placeholder-[#6B6B73] focus:border-[#E91E8C] focus:outline-none transition-colors text-sm";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      email: fd.get("email") as string,
      vehicle_type: fd.get("vehicle") as string,
      vehicle_details: fd.get("vehicle-details") as string,
      service: fd.get("service") as string,
      fleet_size: fd.get("fleet-size") as string,
      message: fd.get("message") as string,
    };

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong");
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try calling us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#1A1B1E] border border-[#22C55E]/30 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-[#F5F5F5] mb-3">Quote Request Received!</h3>
        <p className="text-[#A0A0A8] leading-relaxed mb-6">
          We got your request and will reach out within one business day with a detailed estimate. Questions in the meantime?
        </p>
        <a href={BUSINESS.phoneTel} className="inline-flex items-center gap-2 text-[#E91E8C] font-semibold">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call {BUSINESS.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Quote request form">
      {status === "error" && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-xl px-4 py-3 text-sm text-red-400">
          {errorMsg}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
            Your Name <span className="text-[#E91E8C]">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
            Phone Number <span className="text-[#E91E8C]">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="(541) 555-0100" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[#F5F5F5] mb-2">Email Address</label>
        <input id="email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="jane@example.com" />
      </div>

      <div>
        <label htmlFor="vehicle" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
          Vehicle Type <span className="text-[#E91E8C]">*</span>
        </label>
        <select id="vehicle" name="vehicle" required className={inputClass + " appearance-none"}>
          <option value="">Select vehicle type...</option>
          {VEHICLE_TYPES.map((v) => <option key={v} value={v}>{v}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="vehicle-details" className="block text-sm font-semibold text-[#F5F5F5] mb-2">Vehicle Year, Make, Model</label>
        <input id="vehicle-details" name="vehicle-details" type="text" className={inputClass} placeholder="2022 Ford Transit 250" />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
          Service Needed <span className="text-[#E91E8C]">*</span>
        </label>
        <select id="service" name="service" required className={inputClass + " appearance-none"}>
          <option value="">Select a service...</option>
          {SERVICES.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
          <option value="Not sure — need advice">Not sure — need advice</option>
        </select>
      </div>

      <div>
        <label htmlFor="fleet-size" className="block text-sm font-semibold text-[#F5F5F5] mb-2">Fleet Size (if applicable)</label>
        <select id="fleet-size" name="fleet-size" className={inputClass + " appearance-none"}>
          <option value="">Single vehicle / not applicable</option>
          <option value="2-3">2–3 vehicles</option>
          <option value="4-10">4–10 vehicles</option>
          <option value="11-25">11–25 vehicles</option>
          <option value="26+">26+ vehicles</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#F5F5F5] mb-2">Project Details</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClass + " resize-y"}
          placeholder="Color change, custom design, fleet lettering... the more detail, the more accurate our quote."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-8 py-4 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity text-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Request My Free Quote"}
      </button>

      <p className="text-xs text-[#6B6B73] text-center">
        We respond within one business day. Your information is never shared or sold.
      </p>
    </form>
  );
}
