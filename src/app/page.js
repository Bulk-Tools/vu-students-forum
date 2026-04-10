import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
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
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-16">
        <section className="max-w-2xl space-y-6">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            VU Students Forum
          </h1>
          <p className="text-lg text-slate-600 sm:text-xl">
            Connect, Learn, and Grow with Fellow VU Students
          </p>
          <Link
            href="/forums"
            className="inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Join Discussion
          </Link>
        </section>
      </main>
    </div>
  );
}
