import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export async function DELETE(req: NextRequest) {
  try {
    const { table, id } = await req.json();
    const db = createServerClient();

    if (table === "bookings") {
      const { error } = await db.from("bookings").delete().eq("id", id);
      if (error) throw error;
    } else if (table === "contact_queries") {
      const { error } = await db.from("contact_queries").delete().eq("id", id);
      if (error) throw error;
    } else {
      return NextResponse.json({ error: "Invalid table" }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
