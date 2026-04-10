import Link from "next/link";

const featuredThreads = [
  {
    title: "How do you balance assignments with part-time work?",
    category: "Student Life",
    summary:
      "Share practical schedules, focus habits, and routines that keep you consistent without burning out.",
  },
  {
    title: "Best strategy for final exam revision at VU",
    category: "Academics",
    summary:
      "Discuss subject-wise revision plans, trusted resources, and how to prepare effectively in the final week.",
  },
  {
    title: "Looking for Python project teammates",
    category: "Collaboration",
    summary:
      "Post your interests, skills, and preferred timeline to connect with motivated peers for project work.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 p-6 md:p-8">
      <section className="w-full space-y-8 rounded-xl border border-slate-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-md md:p-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            VU Students Forum
          </h1>
          <p className="max-w-2xl text-lg text-slate-500">
            Connect, learn, and grow with fellow VU students in focused, high
            quality conversations.
          </p>
          <Link
            href="/threads/new"
            className="inline-flex rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:bg-indigo-700 active:scale-95"
          >
            Join Discussion
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredThreads.map((thread) => (
            <article
              key={thread.title}
              className="rounded-xl border border-slate-200/50 bg-white/80 p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {thread.category}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-slate-900">
                {thread.title}
              </h2>
              <p className="mt-2 text-sm text-slate-500">{thread.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
