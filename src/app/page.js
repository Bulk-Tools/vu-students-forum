import Link from "next/link";

const trendingPods = [
  {
    id: "urgent-help-data-structures",
    title: "Need help with AVL tree rotations before quiz",
    category: "⚡ Urgent Help",
    summary:
      "Looking for a step-by-step walkthrough with edge cases for insertion and deletion balancing.",
  },
  {
    id: "midterm-prep-ai",
    title: "Midterm prep sprint: Intro to AI weekly plan",
    category: "📚 Midterm Prep",
    summary:
      "Share your two-week revision sequence, mock-test strategy, and must-practice topics.",
  },
  {
    id: "code-review-react",
    title: "Review my React hooks optimization approach",
    category: "💻 Code Review",
    summary:
      "Need feedback on reducing rerenders and improving component responsiveness.",
  },
];

const liveRooms = [
  { name: "DSA Lab", members: 24 },
  { name: "Calculus Clinic", members: 17 },
  { name: "Web Dev Studio", members: 31 },
];

const mentors = [
  { name: "Ayesha K.", specialty: "Algorithms" },
  { name: "Usman R.", specialty: "Operating Systems" },
  { name: "Fatima S.", specialty: "Databases" },
];

function GlassCard({ className, children }) {
  return (
    <section
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] ${className}`}
    >
      {children}
    </section>
  );
}

function TagPill({ label }) {
  return (
    <span className="rounded-full border border-violet-300/30 bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-200">
      {label}
    </span>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 p-6 md:p-8">
      <section className="w-full space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            VU Study OS
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Your neon-glass command center for Study Pods, mentorship, and
            high-focus collaboration.
          </p>
          <Link
            href="/threads/new"
            className="inline-flex rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
          >
            Launch a Study Pod
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <GlassCard className="lg:col-span-4">
            <h2 className="text-lg font-semibold text-slate-100">Live Study Rooms</h2>
            <ul className="mt-4 space-y-3">
              {liveRooms.map((room) => (
                <li key={room.name} className="flex items-center justify-between">
                  <span className="font-medium text-slate-200">{room.name}</span>
                  <span className="text-sm text-slate-400">{room.members} active</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="lg:col-span-8">
            <h2 className="text-lg font-semibold text-slate-100">Trending Pods</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {trendingPods.map((pod) => (
                <Link
                  key={pod.id}
                  href="/threads/new"
                  className="rounded-xl border border-white/10 bg-slate-900/50 p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]"
                >
                  <article>
                    <TagPill label={pod.category} />
                    <h3 className="mt-3 text-base font-semibold text-slate-100">
                      {pod.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">{pod.summary}</p>
                  </article>
                </Link>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-5">
            <h2 className="text-lg font-semibold text-slate-100">Top Mentors</h2>
            <ul className="mt-4 space-y-4">
              {mentors.map((mentor) => (
                <li key={mentor.name} className="flex items-center gap-3">
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 text-sm font-semibold text-violet-200">
                      {mentor.name.slice(0, 1)}
                    </div>
                    <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950">
                      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/80" />
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-100">{mentor.name}</p>
                    <p className="text-sm text-slate-400">{mentor.specialty}</p>
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="lg:col-span-7">
            <h2 className="text-lg font-semibold text-slate-100">My Dashboard</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Pods Answered
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-100">18</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Reputation
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-100">1,240</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Focus Streak
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-100">6 days</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
