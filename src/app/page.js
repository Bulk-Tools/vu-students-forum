"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const navigation = [
  { name: "Home", count: null, active: true },
  { name: "All Forums", count: null, active: false },
  { name: "New Posts", count: null, active: false },
  { name: "Study Resources", count: null, active: false },
  { name: "Following", count: null, active: false },
];

const popularTags = [
  { tag: "#cs101", posts: "64,258 posts", icon: "📘" },
  { tag: "#midterms", posts: "36,759 posts", icon: "📝" },
  { tag: "#assignments", posts: "124,846 posts", icon: "📚" },
  { tag: "#research", posts: "83,100 posts", icon: "🔬" },
  { tag: "#projects", posts: "93,258 posts", icon: "🧠" },
];

const forumSections = [
  {
    category: "CORE SUBJECTS",
    open: true,
    items: [
      {
        id: 1,
        title: "Data Structures",
        views: "5.2K",
        replies: "38.6K",
        postTitle: "Help with AVL insertion edge case",
        timestamp: "Aug 25, 3:25 PM",
        avatarColor: "#3b82f6",
        initials: "AK",
      },
      {
        id: 2,
        title: "Operating Systems",
        views: "4.1K",
        replies: "25.6K",
        postTitle: "Process scheduling quiz prep",
        timestamp: "Aug 23, 6:30 AM",
        avatarColor: "#f97316",
        initials: "ZR",
      },
      {
        id: 3,
        title: "Database Systems",
        views: "6.5K",
        replies: "50.7K",
        postTitle: "Normalization practice thread",
        timestamp: "Aug 23, 4:43 PM",
        avatarColor: "#ef4444",
        initials: "HS",
      },
      {
        id: 4,
        title: "Software Engineering",
        views: "5.3K",
        replies: "43.3K",
        postTitle: "SRS template peer review",
        timestamp: "Aug 22, 2:53 PM",
        avatarColor: "#a855f7",
        initials: "FA",
      },
    ],
  },
  {
    category: "OFF TOPIC",
    open: true,
    items: [
      {
        id: 5,
        title: "General Talk",
        views: "5.2K",
        replies: "38.6K",
        postTitle: "What’s your favorite study music?",
        timestamp: "Aug 25, 3:25 PM",
        avatarColor: "#eab308",
        initials: "MT",
      },
      {
        id: 6,
        title: "Career Advice",
        views: "4.1K",
        replies: "25.6K",
        postTitle: "Internship interview resources",
        timestamp: "Aug 23, 6:30 AM",
        avatarColor: "#14b8a6",
        initials: "NB",
      },
    ],
  },
  {
    category: "HELP DESK",
    open: false,
    items: [
      {
        id: 7,
        title: "Quick Questions",
        views: "3.4K",
        replies: "16.2K",
        postTitle: "Need a simple guide for course selection",
        timestamp: "Aug 21, 10:45 AM",
        avatarColor: "#22c55e",
        initials: "RA",
      },
      {
        id: 8,
        title: "Tech Support",
        views: "2.9K",
        replies: "11.8K",
        postTitle: "LMS login issue on mobile",
        timestamp: "Aug 20, 8:10 PM",
        avatarColor: "#6366f1",
        initials: "IH",
      },
    ],
  },
];

const activityData = {
  posts: [
    {
      id: 1,
      title: "How do you debug recursion quickly?",
      timestamp: "Anna Shvets replied 56 min ago",
      avatarColor: "#ec4899",
      initials: "AS",
    },
    {
      id: 2,
      title: "Compiler lab thread for CS304",
      timestamp: "Monstera Adem replied today at 3:35 PM",
      avatarColor: "#8b5cf6",
      initials: "MA",
    },
    {
      id: 3,
      title: "Final Term Date Sheet Guidelines",
      timestamp: "Feyza Gana replied today at 3:35 PM",
      avatarColor: "#eab308",
      initials: "FG",
    },
    {
      id: 4,
      title: "OOP assignment rubric discussion",
      timestamp: "Monstera Adem replied today at 3:35 PM",
      avatarColor: "#3b82f6",
      initials: "MA",
    },
  ],
  threads: [
    {
      id: 5,
      title: "Need peers for PF group project",
      timestamp: "Areeba Khan created 1 hour ago",
      avatarColor: "#22c55e",
      initials: "AK",
    },
    {
      id: 6,
      title: "Midterm prep circle for CS201",
      timestamp: "Hammad Ali created 2 hours ago",
      avatarColor: "#f97316",
      initials: "HA",
    },
    {
      id: 7,
      title: "Best notes for ENG301",
      timestamp: "Sara Noor created today at 11:20 AM",
      avatarColor: "#06b6d4",
      initials: "SN",
    },
  ],
};

function Sidebar() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-lg text-emerald-400">
            ◎
          </span>
          <div>
            <p className="font-semibold text-gray-200">VU Students Forum</p>
            <p className="text-xs tracking-wide text-gray-500">ACADEMIC HUB</p>
          </div>
        </div>
      </div>

      <nav>
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <button
                type="button"
                className={`w-full border-l-2 px-4 py-2 text-left text-sm transition ${
                  item.active
                    ? "border-emerald-400 text-emerald-400"
                    : "border-transparent text-gray-400 hover:text-gray-200"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section className="border-t border-gray-800 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-200">Popular Tags</h2>
          <button type="button" className="text-sm text-emerald-400">
            See all
          </button>
        </div>
        <ul className="space-y-4">
          {popularTags.map((item) => (
            <li key={item.tag} className="flex items-start gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1D21] text-sm text-emerald-400">
                {item.icon}
              </span>
              <div>
                <p className="font-medium text-gray-200">{item.tag}</p>
                <p className="text-sm text-gray-500">{item.posts}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function ActivitySidebar({ activeFeed, setActiveFeed }) {
  return (
    <div className="space-y-5">
      <section className="rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 p-5 text-black">
        <h2 className="text-2xl font-semibold">Join the latest study group</h2>
        <p className="mt-2 text-sm">Collaborate with classmates and prepare for upcoming evaluations.</p>
        <button type="button" className="mt-4 rounded-lg bg-[#121417] px-4 py-2 text-sm font-semibold text-gray-200">
          Join now
        </button>
      </section>

      <section className="rounded-xl border border-gray-800 bg-[#1A1D21] p-5">
        <div className="mb-4 flex gap-5 border-b border-gray-800">
          <button
            type="button"
            className={`pb-2 text-lg ${
              activeFeed === "posts"
                ? "border-b-2 border-emerald-400 font-semibold text-emerald-400"
                : "text-gray-500"
            }`}
            onClick={() => setActiveFeed("posts")}
          >
            New Posts
          </button>
          <button
            type="button"
            className={`pb-2 text-lg ${
              activeFeed === "threads"
                ? "border-b-2 border-emerald-400 font-semibold text-emerald-400"
                : "text-gray-500"
            }`}
            onClick={() => setActiveFeed("threads")}
          >
            New Threads
          </button>
        </div>

        <ul className="space-y-4">
          {activityData[activeFeed].map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <span
                className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-black"
                style={{ backgroundColor: item.avatarColor }}
              >
                {item.initials}
              </span>
              <div>
                <p className="font-semibold text-gray-200">{item.title}</p>
                <p className="text-sm text-gray-500">{item.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeed, setActiveFeed] = useState("posts");

  const [openSections, setOpenSections] = useState(() => {
    const initialState = {};
    forumSections.forEach((section) => {
      initialState[section.category] = section.open;
    });
    return initialState;
  });

  const renderedSections = useMemo(
    () => forumSections.map((section) => ({ ...section, isOpen: openSections[section.category] })),
    [openSections]
  );

  const toggleSection = (category) => {
    setOpenSections((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <main className="min-h-screen bg-[#121417] text-gray-200">
      <div className="mx-auto p-4 lg:hidden">
        <div className="mb-4 flex items-center justify-between rounded-xl border border-gray-800 bg-[#1A1D21] px-4 py-3">
          <p className="font-semibold text-emerald-400">VU Students Forum</p>
          <button
            type="button"
            className="rounded-lg border border-gray-700 px-3 py-1 text-sm text-gray-200"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            ☰ Menu
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mb-4 space-y-4">
            <section className="rounded-xl border border-gray-800 bg-[#1A1D21] p-4">
              <Sidebar />
            </section>
            <ActivitySidebar activeFeed={activeFeed} setActiveFeed={setActiveFeed} />
          </div>
        )}
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 p-6 lg:grid-cols-[240px_1fr_300px]">
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>

        <section className="space-y-6">
          <header className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-200">Explore Forums</h1>
            <Link href="/threads/new" className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black">
              + Thread
            </Link>
          </header>

          {renderedSections.map((group) => (
            <section key={group.category} className="rounded-xl border border-gray-800 bg-[#1A1D21] p-5">
              <button
                type="button"
                className="mb-4 flex w-full items-center justify-between text-left"
                onClick={() => toggleSection(group.category)}
              >
                <h2 className="text-xs font-semibold tracking-[0.2em] text-gray-500">{group.category}</h2>
                <span className="text-2xl leading-none text-emerald-400">{group.isOpen ? "−" : "+"}</span>
              </button>

              {group.isOpen && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {group.items.map((item) => (
                    <article key={item.id} className="rounded-xl border border-gray-800 bg-[#1A1D21] p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-semibold text-gray-200">{item.title}</h3>
                        <p className="text-xs text-gray-500">
                          {item.views} views · {item.replies} replies
                        </p>
                      </div>

                      <div className="mt-4 flex items-center gap-3 rounded-lg border border-gray-800 bg-[#121417] p-3">
                        <span
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-black"
                          style={{ backgroundColor: item.avatarColor }}
                        >
                          {item.initials}
                        </span>
                        <div>
                          <p className="text-sm text-gray-200">{item.postTitle}</p>
                          <p className="text-xs text-gray-500">{item.timestamp}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          ))}
        </section>

        <aside className="hidden lg:block">
          <ActivitySidebar activeFeed={activeFeed} setActiveFeed={setActiveFeed} />
        </aside>
      </div>
    </main>
  );
}
