import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const db = createServerClient();

    const { error } = await db.from("bookings").insert({
      name: body.name,
      phone: body.phone,
      email: body.email || null,
      vehicle_type: body.vehicle_type || null,
      vehicle_details: body.vehicle_details || null,
      service: body.service,
      fleet_size: body.fleet_size || null,
      message: body.message || null,
    });

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
