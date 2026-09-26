-- Blue Rose Wraps & Graphics — Supabase Schema
-- Run this in the Supabase SQL Editor: https://supabase.com/dashboard/project/lzwhyztrnbueqnbmcfog/sql

-- ── BOOKINGS (from Get-a-Quote form) ───────────────────────────────────────
create table if not exists bookings (
  id            uuid default gen_random_uuid() primary key,
  created_at    timestamptz default now() not null,
  name          text not null,
  phone         text not null,
  email         text,
  vehicle_type  text,
  vehicle_details text,
  service       text not null,
  fleet_size    text,
  message       text,
  status        text default 'new' check (
    status in ('new', 'contacted', 'quoted', 'booked', 'completed', 'cancelled')
  )
);

-- ── CONTACT QUERIES (from Contact form) ────────────────────────────────────
create table if not exists contact_queries (
  id         uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  name       text not null,
  phone      text,
  email      text,
  message    text not null,
  status     text default 'new' check (status in ('new', 'replied', 'closed'))
);

-- ── ROW LEVEL SECURITY ─────────────────────────────────────────────────────
alter table bookings enable row level security;
alter table contact_queries enable row level security;

-- Service role bypasses RLS automatically.
-- No anon policies needed since all Supabase access goes through server API routes.
