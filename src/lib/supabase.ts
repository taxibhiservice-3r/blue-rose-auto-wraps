import { createClient } from "@supabase/supabase-js";

export type Booking = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  vehicle_type: string | null;
  vehicle_details: string | null;
  service: string;
  fleet_size: string | null;
  message: string | null;
  status: "new" | "contacted" | "quoted" | "booked" | "completed" | "cancelled";
};

export type ContactQuery = {
  id: string;
  created_at: string;
  name: string;
  phone: string | null;
  email: string | null;
  message: string;
  status: "new" | "replied" | "closed";
};

// Server-only — never call from client components
export function createServerClient() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return createClient<any>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
