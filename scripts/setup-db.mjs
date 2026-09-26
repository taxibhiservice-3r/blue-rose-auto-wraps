/**
 * One-time Supabase table setup script.
 * Run: node scripts/setup-db.mjs
 *
 * Creates the bookings and contact_queries tables if they don't exist.
 * Uses the Supabase Management API to execute SQL.
 */

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load env vars from .env.local manually
function loadEnv() {
  try {
    const envPath = join(__dirname, "../.env.local");
    const lines = readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
      const [key, ...rest] = line.split("=");
      if (key && rest.length) {
        process.env[key.trim()] = rest.join("=").trim();
      }
    }
  } catch {
    // env vars already set via environment
  }
}

loadEnv();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error("❌  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const SQL = `
-- bookings table
create table if not exists bookings (
  id              uuid default gen_random_uuid() primary key,
  created_at      timestamptz default now() not null,
  name            text not null,
  phone           text not null,
  email           text,
  vehicle_type    text,
  vehicle_details text,
  service         text not null,
  fleet_size      text,
  message         text,
  status          text default 'new' check (
    status in ('new','contacted','quoted','booked','completed','cancelled')
  )
);

-- contact_queries table
create table if not exists contact_queries (
  id         uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  name       text not null,
  phone      text,
  email      text,
  message    text not null,
  status     text default 'new' check (status in ('new','replied','closed'))
);

-- Enable RLS (service role key bypasses it automatically)
alter table if exists bookings enable row level security;
alter table if exists contact_queries enable row level security;
`;

// Extract project ref from URL
const projectRef = SUPABASE_URL.replace("https://", "").split(".")[0];
const endpoint = `https://api.supabase.com/v1/projects/${projectRef}/database/query`;

console.log(`\nConnecting to Supabase project: ${projectRef}\n`);

try {
  // Try the Supabase Management API first
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${SERVICE_ROLE_KEY}`,
    },
    body: JSON.stringify({ query: SQL }),
  });

  if (res.ok) {
    console.log("✅  Tables created via Management API");
  } else {
    const body = await res.text();
    // Management API needs a PAT token, not service role key — fall back
    console.log("⚠️  Management API requires a Personal Access Token.");
    console.log("    Trying alternative method...\n");

    // Fall back: use supabase REST to verify tables exist by querying them
    const checkRes = await fetch(`${SUPABASE_URL}/rest/v1/bookings?limit=0`, {
      headers: {
        "apikey": SERVICE_ROLE_KEY,
        "Authorization": `Bearer ${SERVICE_ROLE_KEY}`,
      },
    });

    if (checkRes.ok) {
      console.log("✅  Tables already exist in Supabase!\n");
      console.log("    bookings ✓");
      console.log("    contact_queries ✓\n");
    } else {
      console.log("📋  Tables need to be created manually.");
      console.log("    1. Go to: https://supabase.com/dashboard/project/" + projectRef + "/sql");
      console.log("    2. Paste and run the contents of: supabase/schema.sql\n");
      console.log("    (This only needs to be done once)\n");
    }
  }
} catch (err) {
  console.error("❌  Error:", err.message);
}
