"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const router = useRouter();
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const supabaseClient = supabase;

    if (!supabaseClient) {
      router.replace("/login");
      return;
    }

    supabaseClient.auth
      .getSession()
      .then(({ data }) => {
        if (!isMounted) {
          return;
        }

        if (!data.session) {
          router.replace("/login");
          return;
        }

        setIsCheckingSession(false);
      })
      .catch(() => {
        if (isMounted) {
          router.replace("/login");
        }
      });

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      if (!isMounted) {
        return;
      }

      if (!session) {
        router.replace("/login");
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [router]);

  if (isCheckingSession) {
    return (
      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-16">
        <p className="text-slate-600">Loading profile...</p>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-16">
      <section className="max-w-2xl space-y-4 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>
        <p className="text-slate-600">
          You are logged in. Profile details will appear here.
        </p>
      </section>
    </main>
  );
}
