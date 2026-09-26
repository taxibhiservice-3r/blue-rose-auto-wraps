import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const db = createServerClient();

    const { error } = await db.from("contact_queries").insert({
      name: body.name,
      phone: body.phone || null,
      email: body.email || null,
      message: body.message,
    });

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
