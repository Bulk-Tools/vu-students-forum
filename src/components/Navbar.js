"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export default function Navbar() {
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
      <nav className="mx-auto w-full max-w-7xl rounded-xl border border-slate-200/50 bg-white/80 px-6 py-4 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-lg font-semibold text-slate-900">
            Virtual University
          </span>
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-slate-900 focus:rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/threads/new"
                className="transition-colors hover:text-slate-900 focus:rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                New Thread
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            {isSupabaseConfigured && session ? (
              <>
                <Link
                  href="/profile"
                  className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  My Profile
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:bg-indigo-700 active:scale-95"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:bg-indigo-700 active:scale-95"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
        {logoutError ? (
          <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
            {logoutError}
          </p>
        ) : null}
      </nav>
    </header>
  );
}
