"use client";

import { useState } from "react";
import { BUSINESS } from "@/data/business";

const inputClass =
  "w-full bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-4 py-3 text-[#F5F5F5] placeholder-[#6B6B73] focus:border-[#E91E8C] focus:outline-none transition-colors text-sm";

export default function ContactForm() {
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
      message: fd.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong");
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try calling us.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#1A1B1E] border border-[#22C55E]/30 rounded-2xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-[#22C55E]/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-[#F5F5F5] mb-2">Message Sent!</h3>
        <p className="text-sm text-[#A0A0A8]">We&apos;ll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact message form">
      <h2 className="font-display text-2xl font-bold text-[#F5F5F5]">Send a Message</h2>
      <p className="text-sm text-[#A0A0A8]">For a free quote, use the <a href="/get-a-quote" className="text-[#E91E8C] hover:underline">Quote Request form</a>.</p>

      {status === "error" && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-xl px-4 py-3 text-sm text-red-400">
          {errorMsg}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c-name" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
            Name <span className="text-[#E91E8C]">*</span>
          </label>
          <input id="c-name" name="name" type="text" required className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="c-phone" className="block text-sm font-semibold text-[#F5F5F5] mb-2">Phone</label>
          <input id="c-phone" name="phone" type="tel" className={inputClass} placeholder="(541) 555-0100" />
        </div>
      </div>

      <div>
        <label htmlFor="c-email" className="block text-sm font-semibold text-[#F5F5F5] mb-2">Email</label>
        <input id="c-email" name="email" type="email" className={inputClass} placeholder="jane@example.com" />
      </div>

      <div>
        <label htmlFor="c-message" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
          Message <span className="text-[#E91E8C]">*</span>
        </label>
        <textarea id="c-message" name="message" rows={4} required className={inputClass + " resize-y"} placeholder="What can we help you with?" />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-[#6B6B73]">
        Or call us at <a href={BUSINESS.phoneTel} className="text-[#E91E8C]">{BUSINESS.phone}</a>
      </p>
    </form>
  );
}
