export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold">Virtual University</span>
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Forums</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-6xl items-center px-6 py-16">
        <section className="max-w-2xl space-y-6">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            VU Students Forum
          </h1>
          <p className="text-lg text-slate-600 sm:text-xl">
            Connect, Learn, and Grow with Fellow VU Students
          </p>
          <a
            href="#"
            className="inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Join Discussion
          </a>
        </section>
      </main>
    </div>
  );
}
