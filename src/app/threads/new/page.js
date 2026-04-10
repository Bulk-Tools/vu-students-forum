"use client";

import { useState } from "react";

const smartTags = [
  "[⚡ Urgent Help]",
  "[📚 Midterm Prep]",
  "[💻 Code Review]",
  "[🧠 Concept Debate]",
];

const exampleCode = `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`;

function GlassCard({ children, className }) {
  return (
    <section
      className={`rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </section>
  );
}

export default function NewThreadPage() {
  const [selectedTag, setSelectedTag] = useState(smartTags[0]);
  const [bounty, setBounty] = useState("50");
  const [copyMessage, setCopyMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(exampleCode);
      setCopyMessage("Copied");
    } catch {
      setCopyMessage("Copy failed");
    }

    setTimeout(() => setCopyMessage(""), 1200);
  };

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 p-6 md:p-8">
      <section className="w-full space-y-6">
        <GlassCard>
          <h1 className="text-2xl font-bold text-slate-100">
            Create a New Study Pod
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            Launch a focused discussion with smart tags and a mentorship bounty.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="title" className="text-sm font-medium text-slate-200">
                Study Pod Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="What concept should we solve together?"
                required
                aria-required="true"
                className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-200">Smart Tag</p>
              <div className="flex flex-wrap gap-2">
                {smartTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-500 ${
                      selectedTag === tag
                        ? "border-violet-300/40 bg-violet-500/20 text-violet-100"
                        : "border-white/10 bg-slate-900/60 text-slate-300"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="content" className="text-sm font-medium text-slate-200">
                Study Prompt
              </label>
              <textarea
                id="content"
                name="content"
                rows={6}
                placeholder="Explain your challenge, context, and what you've already tried."
                required
                aria-required="true"
                className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="bounty" className="text-sm font-medium text-slate-200">
                Reputation Bounty
              </label>
              <input
                id="bounty"
                name="bounty"
                type="number"
                min="0"
                value={bounty}
                onChange={(event) => setBounty(event.target.value)}
                className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <p className="text-sm text-violet-200">
                💰 {bounty || 0} Rep Points for the best detailed explanation
              </p>
            </div>

            <input type="hidden" name="smartTag" value={selectedTag} />
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
            >
              Publish Study Pod
            </button>
          </form>
        </GlassCard>

        <GlassCard className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-100">
            Pro-Grade Content Rendering Preview
          </h2>

          <div className="rounded-xl border border-white/10 bg-slate-950 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Code Snippet
              </p>
              <button
                type="button"
                onClick={handleCopyCode}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
              >
                {copyMessage || "Copy"}
              </button>
            </div>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs text-cyan-200">
              <code>{exampleCode}</code>
            </pre>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Math Equation
            </p>
            <p className="mt-2 font-mono text-lg text-emerald-200">
              P(A ∩ B) = P(A) · P(B | A)
            </p>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
