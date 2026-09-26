import { NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export async function GET() {
  try {
    const db = createServerClient();

    const [bookingsRes, queriesRes] = await Promise.all([
      db.from("bookings").select("*").order("created_at", { ascending: false }),
      db.from("contact_queries").select("*").order("created_at", { ascending: false }),
    ]);

    return NextResponse.json({
      bookings: bookingsRes.data ?? [],
      contactQueries: queriesRes.data ?? [],
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
