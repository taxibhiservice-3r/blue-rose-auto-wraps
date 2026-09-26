"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Booking, ContactQuery } from "@/lib/supabase";

type Tab = "bookings" | "contacts";

const BOOKING_STATUSES: Booking["status"][] = ["new", "contacted", "quoted", "booked", "completed", "cancelled"];
const QUERY_STATUSES: ContactQuery["status"][] = ["new", "replied", "closed"];

const STATUS_COLORS: Record<string, string> = {
  new:       "bg-[#E91E8C]/15 text-[#E91E8C] border-[#E91E8C]/30",
  contacted: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  quoted:    "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  booked:    "bg-purple-500/15 text-purple-400 border-purple-500/30",
  completed: "bg-green-500/15 text-green-400 border-green-500/30",
  cancelled: "bg-[#3C3D41]/50 text-[#6B6B73] border-[#3C3D41]",
  replied:   "bg-blue-500/15 text-blue-400 border-blue-500/30",
  closed:    "bg-[#3C3D41]/50 text-[#6B6B73] border-[#3C3D41]",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short", day: "numeric", year: "numeric",
    hour: "numeric", minute: "2-digit",
  });
}

function copyBooking(b: Booking) {
  const lines = [
    `QUOTE REQUEST — ${formatDate(b.created_at)}`,
    "─────────────────────────────────────",
    `Name:     ${b.name}`,
    `Phone:    ${b.phone}`,
    `Email:    ${b.email ?? "—"}`,
    `Vehicle:  ${b.vehicle_type ?? "—"}${b.vehicle_details ? ` (${b.vehicle_details})` : ""}`,
    `Service:  ${b.service}`,
    `Fleet:    ${b.fleet_size ?? "Single vehicle"}`,
    `Status:   ${b.status}`,
    "─────────────────────────────────────",
    b.message ? `Notes:\n${b.message}` : "No additional notes.",
  ];
  navigator.clipboard.writeText(lines.join("\n"));
}

function copyQuery(q: ContactQuery) {
  const lines = [
    `CONTACT MESSAGE — ${formatDate(q.created_at)}`,
    "─────────────────────────────────────",
    `Name:    ${q.name}`,
    `Phone:   ${q.phone ?? "—"}`,
    `Email:   ${q.email ?? "—"}`,
    `Status:  ${q.status}`,
    "─────────────────────────────────────",
    `Message:\n${q.message}`,
  ];
  navigator.clipboard.writeText(lines.join("\n"));
}

function CopyButton({ onCopy }: { onCopy: () => void }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#232427] border border-[#2C2D31] text-[#A0A0A8] hover:text-[#F5F5F5] hover:border-[#E91E8C] transition-all"
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

function DeleteButton({ onDelete }: { onDelete: () => Promise<void> }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!window.confirm("Delete this record? This cannot be undone.")) return;
    setLoading(true);
    await onDelete();
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-900/20 border border-red-500/20 text-red-400 hover:bg-red-900/40 hover:border-red-500/40 transition-all disabled:opacity-50"
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      {loading ? "..." : "Delete"}
    </button>
  );
}

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("bookings");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [contacts, setContacts] = useState<ContactQuery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/data");
      if (res.status === 401) { router.push("/admin/login"); return; }
      const json = await res.json();
      setBookings(json.bookings ?? []);
      setContacts(json.contactQueries ?? []);
    } catch {
      setError("Failed to load data. Check Supabase env vars.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => { fetchData(); }, [fetchData]);

  async function deleteRecord(table: "bookings" | "contact_queries", id: string) {
    await fetch("/api/admin/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ table, id }),
    });
    await fetchData();
  }

  async function logout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  const newBookings = bookings.filter((b) => b.status === "new").length;
  const newContacts = contacts.filter((c) => c.status === "new").length;

  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      {/* Header */}
      <header className="bg-[#0A0A0B] border-b border-[#2C2D31] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/Blue-Rose-Auto.webp" alt="Logo" width={32} height={32} className="rounded-full" />
            <span className="font-display font-bold text-[#F5F5F5] text-sm">Blue Rose Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="p-2 rounded-lg text-[#6B6B73] hover:text-[#F5F5F5] hover:bg-[#1A1B1E] transition-all"
              title="Refresh"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <a href="/" className="text-xs text-[#6B6B73] hover:text-[#F5F5F5] transition-colors">← Site</a>
            <button
              onClick={logout}
              className="text-xs px-3 py-1.5 rounded-lg border border-[#2C2D31] text-[#6B6B73] hover:text-red-400 hover:border-red-500/30 transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: "Total Bookings", value: bookings.length, accent: false },
            { label: "New Bookings", value: newBookings, accent: true },
            { label: "Total Queries", value: contacts.length, accent: false },
            { label: "New Queries", value: newContacts, accent: true },
          ].map((s) => (
            <div key={s.label} className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl px-5 py-4">
              <div className={`font-display text-3xl font-bold ${s.accent ? "gradient-brand-text" : "text-[#F5F5F5]"}`}>
                {loading ? "—" : s.value}
              </div>
              <div className="text-xs text-[#6B6B73] mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {error && (
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl px-4 py-3 text-sm text-red-400 mb-6">
            ⚠ {error}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(["bookings", "contacts"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                tab === t
                  ? "gradient-brand text-white shadow-lg"
                  : "bg-[#1A1B1E] border border-[#2C2D31] text-[#A0A0A8] hover:text-[#F5F5F5]"
              }`}
            >
              {t === "bookings" ? "Quote Requests" : "Contact Queries"}
              {" "}
              <span className="opacity-70 text-xs">
                ({t === "bookings" ? bookings.length : contacts.length})
              </span>
            </button>
          ))}
        </div>

        {/* Bookings Table */}
        {tab === "bookings" && (
          <div className="space-y-3">
            {loading ? (
              <div className="text-center py-16 text-[#6B6B73]">Loading...</div>
            ) : bookings.length === 0 ? (
              <div className="text-center py-16 bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl text-[#6B6B73]">
                No quote requests yet.
              </div>
            ) : (
              bookings.map((b) => (
                <div key={b.id} className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl p-5 hover:border-[#3C3D41] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    {/* Left: info */}
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-[#F5F5F5]">{b.name}</span>
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold border ${STATUS_COLORS[b.status]}`}>
                          {b.status}
                        </span>
                        <span className="text-xs text-[#6B6B73]">{formatDate(b.created_at)}</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1 text-sm">
                        <div>
                          <span className="text-[#6B6B73] text-xs">Phone</span>
                          <div>
                            <a href={`tel:${b.phone}`} className="text-[#E91E8C] hover:underline">{b.phone}</a>
                          </div>
                        </div>
                        {b.email && (
                          <div>
                            <span className="text-[#6B6B73] text-xs">Email</span>
                            <div className="text-[#A0A0A8] truncate">{b.email}</div>
                          </div>
                        )}
                        <div>
                          <span className="text-[#6B6B73] text-xs">Service</span>
                          <div className="text-[#A0A0A8]">{b.service}</div>
                        </div>
                        {b.vehicle_type && (
                          <div>
                            <span className="text-[#6B6B73] text-xs">Vehicle</span>
                            <div className="text-[#A0A0A8]">{b.vehicle_details ?? b.vehicle_type}</div>
                          </div>
                        )}
                        {b.fleet_size && b.fleet_size !== "Single vehicle / not applicable" && (
                          <div>
                            <span className="text-[#6B6B73] text-xs">Fleet</span>
                            <div className="text-[#A0A0A8]">{b.fleet_size} vehicles</div>
                          </div>
                        )}
                      </div>

                      {b.message && (
                        <p className="text-sm text-[#6B6B73] bg-[#232427] rounded-lg px-3 py-2 mt-2 leading-relaxed line-clamp-2">
                          {b.message}
                        </p>
                      )}
                    </div>

                    {/* Right: actions */}
                    <div className="flex items-center gap-2 shrink-0">
                      <CopyButton onCopy={() => copyBooking(b)} />
                      <DeleteButton onDelete={() => deleteRecord("bookings", b.id)} />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Contact Queries Table */}
        {tab === "contacts" && (
          <div className="space-y-3">
            {loading ? (
              <div className="text-center py-16 text-[#6B6B73]">Loading...</div>
            ) : contacts.length === 0 ? (
              <div className="text-center py-16 bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl text-[#6B6B73]">
                No contact queries yet.
              </div>
            ) : (
              contacts.map((q) => (
                <div key={q.id} className="bg-[#1A1B1E] border border-[#2C2D31] rounded-xl p-5 hover:border-[#3C3D41] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-[#F5F5F5]">{q.name}</span>
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold border ${STATUS_COLORS[q.status]}`}>
                          {q.status}
                        </span>
                        <span className="text-xs text-[#6B6B73]">{formatDate(q.created_at)}</span>
                      </div>

                      <div className="flex gap-6 text-sm">
                        {q.phone && (
                          <div>
                            <span className="text-[#6B6B73] text-xs">Phone</span>
                            <div><a href={`tel:${q.phone}`} className="text-[#E91E8C] hover:underline">{q.phone}</a></div>
                          </div>
                        )}
                        {q.email && (
                          <div>
                            <span className="text-[#6B6B73] text-xs">Email</span>
                            <div className="text-[#A0A0A8]">{q.email}</div>
                          </div>
                        )}
                      </div>

                      <p className="text-sm text-[#A0A0A8] bg-[#232427] rounded-lg px-3 py-2 leading-relaxed">
                        {q.message}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <CopyButton onCopy={() => copyQuery(q)} />
                      <DeleteButton onDelete={() => deleteRecord("contact_queries", q.id)} />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}
