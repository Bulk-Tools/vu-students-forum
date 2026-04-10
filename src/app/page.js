import Link from "next/link";

export default function Home() {
  return (
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
  );
}
