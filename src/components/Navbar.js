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
    <header className="border-b border-slate-200 bg-white/90">
      <nav className="mx-auto w-full max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Virtual University</span>
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/forums">Forums</Link>
            </li>
            <li>
              <Link href="/help">Help</Link>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            {isSupabaseConfigured && session ? (
              <>
                <Link
                  href="/profile"
                  className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  My Profile
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
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
