"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

function GlassPanel({ children }) {
  return (
    <section className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
      {children}
    </section>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    if (!supabase) {
      setIsLoading(false);
      setErrorMessage("Supabase environment variables are not configured.");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    router.push("/");
  };

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center p-6 md:p-8">
      <GlassPanel>
        <h1 className="text-2xl font-bold text-slate-100">Log In</h1>
        <p className="mt-2 text-sm text-slate-300">
          Welcome back. Enter your account details.
        </p>
        {!isSupabaseConfigured ? (
          <p className="mt-4 rounded-md border border-amber-400/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-100">
            Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to
            enable authentication.
          </p>
        ) : null}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-200"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {errorMessage ? (
            <p className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-100">
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-300">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-violet-300 hover:text-violet-200"
          >
            Sign Up
          </Link>
        </p>
      </GlassPanel>
    </main>
  );
}
