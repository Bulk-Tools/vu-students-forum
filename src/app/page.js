"use client";

import Link from "next/link";

const forums = [
  {
    category: "CORE SUBJECTS",
    items: [
      {
        id: 1,
        title: "Data Structures",
        views: "5.2K",
        replies: "38.6K",
        postTitle: "Help with AVL insertion edge case",
        author: "Ali Khan",
        time: "Aug 25, 3:25 PM",
        avatar: "bg-blue-500",
      },
      {
        id: 2,
        title: "Operating Systems",
        views: "4.1K",
        replies: "25.6K",
        postTitle: "Process scheduling quiz prep",
        author: "Zara R.",
        time: "Aug 23, 6:30 AM",
        avatar: "bg-orange-500",
      },
      {
        id: 3,
        title: "Database Systems",
        views: "6.5K",
        replies: "50.7K",
        postTitle: "Normalization practice thread",
        author: "Hassan S.",
        time: "Aug 23, 4:43 PM",
        avatar: "bg-red-500",
      },
      {
        id: 4,
        title: "Software Engineering",
        views: "5.3K",
        replies: "43.3K",
        postTitle: "SRS template peer review",
        author: "Faisal A.",
        time: "Aug 22, 2:53 PM",
        avatar: "bg-purple-500",
      },
    ],
  },
  {
    category: "OFF TOPIC",
    items: [
      {
        id: 5,
        title: "General Talk",
        views: "5.2K",
        replies: "38.6K",
        postTitle: "What's your favorite study music?",
        author: "Maha T.",
        time: "Aug 25, 3:25 PM",
        avatar: "bg-yellow-500",
      },
      {
        id: 6,
        title: "Career Advice",
        views: "4.1K",
        replies: "25.6K",
        postTitle: "Internship interview resources",
        author: "Noman B.",
        time: "Aug 23, 6:30 AM",
        avatar: "bg-teal-500",
      },
    ],
  },
];

const recentActivity = [
  {
    id: 1,
    title: "How do you debug recursion quickly?",
    author: "Anna Shvets",
    action: "replied 56 min ago",
    avatar: "bg-pink-500",
  },
  {
    id: 2,
    title: "Compiler lab thread for CS304",
    author: "Monstera Adem",
    action: "replied today at 3:35 PM",
    avatar: "bg-indigo-500",
  },
  {
    id: 3,
    title: "Final Term Date Sheet Guidelines",
    author: "Feyza Gana",
    action: "replied today at 3:35 PM",
    avatar: "bg-yellow-600",
  },
  {
    id: 4,
    title: "OOP assignment rubric discussion",
    author: "Monstera Adem",
    action: "replied today at 3:35 PM",
    avatar: "bg-blue-600",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#121417] p-6 lg:p-8">
      <div className="mx-auto grid w-full max-w-[1600px] gap-8 lg:grid-cols-[1fr_320px]">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-100">Explore Forums</h1>
            <Link
              href="/threads/new"
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black"
            >
              + New Thread
            </Link>
          </div>

          {forums.map((group) => (
            <section key={group.category} className="rounded-xl border border-gray-800 bg-[#1A1D21] p-5">
              <h2 className="mb-4 text-xs font-semibold tracking-[0.2em] text-gray-500">{group.category}</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {group.items.map((item) => (
                  <article key={item.id} className="rounded-xl border border-gray-800 bg-[#16191d] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
                      <p className="text-xs text-gray-500">
                        {item.views} views · {item.replies} replies
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-3 rounded-lg border border-gray-800 bg-[#121417] p-3">
                      <span className={`h-9 w-9 rounded-full ${item.avatar}`} />
                      <div>
                        <p className="text-sm text-gray-200">{item.postTitle}</p>
                        <p className="text-xs text-gray-500">
                          {item.author} · {item.time}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </section>

        <aside className="space-y-5">
          <section className="rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 p-5 text-black">
            <h2 className="text-2xl font-semibold">Join the latest study group</h2>
            <p className="mt-2 text-sm">Meet classmates, solve weekly tasks, and stay on track together.</p>
            <button
              type="button"
              className="mt-4 rounded-lg bg-[#121417] px-4 py-2 text-sm font-semibold text-gray-200"
            >
              Join now
            </button>
          </section>

          <section className="rounded-xl border border-gray-800 bg-[#1A1D21] p-5">
            <h2 className="mb-4 text-lg font-semibold text-gray-200">Recent Activity</h2>
            <ul className="space-y-4">
              {recentActivity.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className={`mt-1 h-9 w-9 rounded-full ${item.avatar}`} />
                  <div>
                    <p className="font-semibold text-gray-200">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.author}</p>
                    <p className="text-xs text-gray-500">{item.action}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}
