"use client";

export default function NewThreadPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center p-6 md:p-8">
      <section className="w-full max-w-2xl rounded-xl border border-slate-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-md">
        <h1 className="text-2xl font-bold text-slate-900">Create Thread</h1>
        <p className="mt-2 text-sm text-slate-500">
          Start a meaningful conversation with the VU student community.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label htmlFor="title" className="text-sm font-medium text-slate-700">
              Thread Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="What would you like to discuss?"
              required
              aria-required="true"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="category" className="text-sm font-medium text-slate-700">
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              placeholder="e.g. Academics, Exams, Study Tips"
              required
              aria-required="true"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="content" className="text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="content"
              name="content"
              rows={6}
              placeholder="Write your post here..."
              required
              aria-required="true"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:bg-indigo-700 active:scale-95"
          >
            Create Thread
          </button>
        </form>
      </section>
    </main>
  );
}
