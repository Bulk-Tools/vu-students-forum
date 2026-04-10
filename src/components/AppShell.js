"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const FOCUS_SESSION_SECONDS = 25 * 60;

function formatFocusTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${minutes}:${seconds}`;
}

export default function AppShell({ children }) {
  const [isFocusModeActive, setIsFocusModeActive] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(FOCUS_SESSION_SECONDS);

  useEffect(() => {
    if (!isFocusModeActive) {
      return;
    }

    const timer = setInterval(() => {
      setRemainingSeconds((seconds) => Math.max(seconds - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isFocusModeActive]);

  const toggleFocusMode = () => {
    setIsFocusModeActive((current) => {
      const nextValue = !current;

      if (nextValue) {
        setRemainingSeconds(FOCUS_SESSION_SECONDS);
      }

      return nextValue;
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar
          isFocusModeActive={isFocusModeActive}
          onToggleFocusMode={toggleFocusMode}
        />
        <div
          className={`flex flex-1 transition-all duration-500 ${
            isFocusModeActive ? "justify-center px-4 py-8" : ""
          }`}
        >
          <div className={isFocusModeActive ? "w-full max-w-3xl" : "w-full"}>
            {children}
          </div>
        </div>
      </div>

      {isFocusModeActive ? (
        <div className="pointer-events-none fixed inset-0 z-[15] bg-slate-950/55" />
      ) : null}

      {isFocusModeActive ? (
        <div className="fixed right-6 bottom-6 z-20 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-[0_8px_30px_rgba(139,92,246,0.25)] backdrop-blur-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-300">
            Focus Pomodoro
          </p>
          <p className="mt-1 font-mono text-3xl font-semibold text-slate-100">
            {formatFocusTime(remainingSeconds)}
          </p>
        </div>
      ) : null}
    </div>
  );
}
