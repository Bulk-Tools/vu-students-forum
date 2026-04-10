"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition-colors hover:text-slate-100 focus:rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
    >
      {children}
    </Link>
  );
}

function ScholarProgress() {
  return (
    <div className="w-40 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
        Scholar Level
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-100">Level 7 • 72%</p>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-700/60">
        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
      </div>
    </div>
  );
}

export default function Navbar({ isFocusModeActive, onToggleFocusMode }) {
  const [session, setSession] = useState(null);
  const [logoutError, setLogoutError] = useState("");

  useEffect(() => {
    const supabaseClient = supabase;

    if (!supabaseClient) {
      return;
    }

    let isMounted = true;

    supabaseClient.auth
      .getSession()
      .then(({ data }) => {
        if (isMounted) {
          setSession(data.session);
        }
      })
      .catch(() => {
        if (isMounted) {
          setSession(null);
        }
      });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, nextSession) => {
      if (isMounted) {
        setSession(nextSession);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const supabaseClient = supabase;

    if (!supabaseClient) {
      return;
    }

    setLogoutError("");
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      setLogoutError(error.message);
    }
  };

  return (
    <header className="p-6">
      <nav className="mx-auto w-full max-w-7xl rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl transition-all duration-500">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-lg font-semibold text-slate-100">
            Virtual University
          </span>
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/threads/new">New Study Pod</NavLink>
            </li>
          </ul>
          <div className="flex flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              onClick={onToggleFocusMode}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
            >
              {isFocusModeActive ? "Exit Focus Mode" : "Deep Focus Mode"}
            </button>
            <ScholarProgress />
            {isSupabaseConfigured && session ? (
              <>
                <Link
                  href="/profile"
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
                >
                  My Profile
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-lg bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="rounded-lg bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
        {logoutError ? (
          <p className="mt-3 rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-100">
            {logoutError}
          </p>
        ) : null}
      </nav>
    </header>
  );
}
