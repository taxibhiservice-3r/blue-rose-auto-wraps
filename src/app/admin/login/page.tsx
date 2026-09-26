"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Incorrect password.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-3 justify-center mb-8">
          <Image src="/images/Blue-Rose-Auto.webp" alt="Blue Rose Wraps logo" width={40} height={40} className="rounded-full" />
          <div>
            <div className="font-display font-bold text-[#F5F5F5] leading-tight">Blue Rose Wraps</div>
            <div className="text-xs text-[#6B6B73]">Admin Dashboard</div>
          </div>
        </div>

        <form onSubmit={handleLogin} className="bg-[#1A1B1E] border border-[#2C2D31] rounded-2xl p-8 space-y-5">
          <h1 className="font-display text-2xl font-bold text-[#F5F5F5] text-center">Sign In</h1>

          {error && (
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl px-4 py-3 text-sm text-red-400 text-center">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-[#F5F5F5] mb-2">
              Admin Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              className="w-full bg-[#232427] border border-[#2C2D31] rounded-xl px-4 py-3 text-[#F5F5F5] placeholder-[#6B6B73] focus:border-[#E91E8C] focus:outline-none transition-colors"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-white gradient-brand hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-xs text-[#6B6B73] mt-6">
          Default password: <code className="text-[#A0A0A8]">bluerose2024</code>
          <br />Set <code className="text-[#A0A0A8]">ADMIN_PASSWORD</code> in your Vercel env vars to change it.
        </p>
      </div>
    </div>
  );
}
