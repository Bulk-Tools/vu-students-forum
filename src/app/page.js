"use client";

import Link from "next/link";
import { useState } from "react";

const navigationItems = [
  { name: "Home", icon: "⌂", active: true },
  { name: "All Forums", icon: "◉" },
  { name: "New Posts", icon: "+" },
  { name: "Study Resources", icon: "☰" },
  { name: "Following", icon: "★" },
];

const popularTags = [
  { tag: "#cs101", count: "11,284 posts", icon: "⌘" },
  { tag: "#midterms", count: "9,931 posts", icon: "◔" },
  { tag: "#assignments", count: "14,205 posts", icon: "✓" },
  { tag: "#group-study", count: "5,482 posts", icon: "◍" },
];

const forumSections = [
  {
    id: "core-subjects",
    title: "CORE SUBJECTS",
    forums: [
      {
        title: "Data Structures",
        views: "5.2K",
        replies: "38.6K",
        latestTitle: "Help with AVL insertion edge case",
        timestamp: "12 min ago",
        avatar: "AK",
      },
      {
        title: "Operating Systems",
        views: "4.1K",
        replies: "25.6K",
        latestTitle: "Process scheduling quiz prep",
        timestamp: "39 min ago",
        avatar: "ZR",
      },
      {
        title: "Database Systems",
        views: "6.5K",
        replies: "50.7K",
        latestTitle: "Normalization practice thread",
        timestamp: "1 hr ago",
        avatar: "HS",
      },
      {
        title: "Software Engineering",
        views: "5.3K",
        replies: "43.3K",
        latestTitle: "SRS template peer review",
        timestamp: "2 hrs ago",
        avatar: "FA",
      },
    ],
  },
  {
    id: "off-topic",
    title: "OFF TOPIC",
    forums: [
      {
        title: "General Talk",
        views: "5.2K",
        replies: "38.6K",
        latestTitle: "What keeps you productive?",
        timestamp: "20 min ago",
        avatar: "MS",
      },
      {
        title: "Career Advice",
        views: "4.1K",
        replies: "25.6K",
        latestTitle: "Internship interview resources",
        timestamp: "58 min ago",
        avatar: "NB",
      },
    ],
  },
  {
    id: "help-desk",
    title: "HELP DESK",
    forums: [
      {
        title: "Course Enrollment",
        views: "2.8K",
        replies: "17.2K",
        latestTitle: "Fee challan issue guidance",
        timestamp: "45 min ago",
        avatar: "UM",
      },
      {
        title: "LMS Support",
        views: "3.3K",
        replies: "22.4K",
        latestTitle: "Assignment upload not working",
        timestamp: "1 hr ago",
        avatar: "RN",
      },
    ],
  },
];

const activityItems = {
  posts: [
    { title: "How do you debug recursion quickly?", timestamp: "replied 20 min ago", avatar: "AS" },
    { title: "Compiler lab thread for CS304", timestamp: "replied 55 min ago", avatar: "ZM" },
    { title: "OOP assignment rubric discussion", timestamp: "replied today at 3:35 PM", avatar: "FK" },
    { title: "Quiz #2 prep mega-thread", timestamp: "replied today at 5:12 PM", avatar: "SA" },
  ],
  threads: [
    { title: "Need notes for MTH202 chapter 6", timestamp: "started 10 min ago", avatar: "HR" },
    { title: "Past papers for CS201 request", timestamp: "started 44 min ago", avatar: "UA" },
    { title: "Group project teammate search", timestamp: "started today at 1:00 PM", avatar: "NM" },
    { title: "How to prepare for final viva?", timestamp: "started today at 3:12 PM", avatar: "BA" },
  ],
};

function LeftSidebar() {
  return (
    <aside className="space-y-8 rounded-xl border border-gray-800 bg-[#1A1D21] p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-xl text-emerald-400">
          ⌁
        </div>
        <div>
          <p className="font-semibold text-gray-200">VU Students Forum</p>
          <p className="text-xs text-gray-500">Student community board</p>
        </div>
      </div>

      <nav>
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <button
                type="button"
                className={`flex w-full items-center gap-3 border-l-2 px-3 py-2 text-left text-sm transition-colors ${
                  item.active
                    ? "border-emerald-400 text-emerald-400"
                    : "border-transparent text-gray-300 hover:text-gray-200"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-gray-800 pt-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-200">Popular Tags</h2>
          <span className="text-xs text-emerald-400">See all</span>
        </div>
        <ul className="space-y-3">
          {popularTags.map((tag) => (
            <li key={tag.tag} className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-sm text-emerald-400">
                {tag.icon}
              </span>
              <div>
                <p className="font-medium text-gray-200">{tag.tag}</p>
                <p className="text-xs text-gray-500">{tag.count}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function ForumCard({ forum }) {
  return (
    <article className="rounded-xl border border-gray-800 bg-[#1A1D21] p-4">
      <header className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-gray-200">{forum.title}</h3>
        <p className="text-xs text-gray-500">
          {forum.views} views · {forum.replies} replies
        </p>
      </header>
      <div className="mt-4 flex items-center gap-3 rounded-lg border border-gray-800 bg-[#16191d] p-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/25 text-xs font-semibold text-emerald-300">
          {forum.avatar}
        </span>
        <div>
          <p className="text-sm text-gray-200">{forum.latestTitle}</p>
          <p className="text-xs text-gray-500">{forum.timestamp}</p>
        </div>
      </div>
    </article>
  );
}

function RightSidebar({ activeTab, onChangeTab }) {
  return (
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
        <div className="flex gap-5 border-b border-gray-800 pb-3 text-lg font-medium">
          <button
            type="button"
            onClick={() => onChangeTab("posts")}
            className={`pb-1 ${
              activeTab === "posts"
                ? "border-b-2 border-emerald-400 text-emerald-400"
                : "text-gray-500"
            }`}
          >
            New Posts
          </button>
          <button
            type="button"
            onClick={() => onChangeTab("threads")}
            className={`pb-1 ${
              activeTab === "threads"
                ? "border-b-2 border-emerald-400 text-emerald-400"
                : "text-gray-500"
            }`}
          >
            New Threads
          </button>
        </div>

        <ul className="mt-4 space-y-4">
          {activityItems[activeTab].map((item) => (
            <li key={`${activeTab}-${item.title}`} className="flex items-start gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/25 text-xs font-semibold text-emerald-300">
                {item.avatar}
              </span>
              <div>
                <p className="font-semibold text-gray-200">{item.title}</p>
                <p className="text-sm text-gray-500">{item.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

export default function Home() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeActivityTab, setActiveActivityTab] = useState("posts");
  const [openSections, setOpenSections] = useState({
    "core-subjects": true,
    "off-topic": true,
    "help-desk": true,
  });

  const toggleSection = (sectionId) => {
    setOpenSections((currentState) => ({
      ...currentState,
      [sectionId]: !currentState[sectionId],
    }));
  };

  return (
    <main className="min-h-screen bg-[#121417]">
      <div className="mx-auto mb-6 flex w-full max-w-[1600px] items-center justify-between px-6 pt-6 lg:hidden">
        <button
          type="button"
          onClick={() => setIsMobileSidebarOpen((current) => !current)}
          className="rounded-lg border border-gray-800 bg-[#1A1D21] px-4 py-2 text-sm font-semibold text-gray-200"
        >
          ☰ Menu
        </button>
        <Link
          href="/threads/new"
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black"
        >
          + Thread
        </Link>
      </div>

      {isMobileSidebarOpen ? (
        <div className="mx-auto mb-8 grid w-full max-w-[1600px] grid-cols-1 gap-6 px-6 lg:hidden">
          <LeftSidebar />
          <RightSidebar activeTab={activeActivityTab} onChangeTab={setActiveActivityTab} />
        </div>
      ) : null}

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 p-6 lg:grid-cols-[240px_1fr_300px]">
        <div className="hidden lg:block">
          <LeftSidebar />
        </div>

        <section className="space-y-6">
          <header className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-200">Explore Forums</h1>
            <Link
              href="/threads/new"
              className="hidden rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black lg:inline-flex"
            >
              + Thread
            </Link>
          </header>

          <div className="space-y-4">
            {forumSections.map((section) => {
              const isOpen = openSections[section.id];

              return (
                <section key={section.id} className="rounded-xl border border-gray-800 bg-[#1A1D21] p-4">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="mb-4 flex w-full items-center justify-between text-left"
                  >
                    <h2 className="text-sm font-semibold tracking-[0.18em] text-gray-500">
                      {section.title}
                    </h2>
                    <span className="text-2xl leading-none text-emerald-400">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {section.forums.map((forum) => (
                        <ForumCard key={forum.title} forum={forum} />
                      ))}
                    </div>
                  ) : null}
                </section>
              );
            })}
          </div>
        </section>

        <div className="hidden lg:block">
          <RightSidebar activeTab={activeActivityTab} onChangeTab={setActiveActivityTab} />
        </div>
      </div>
    </main>
  );
}
