// HS-ADD: app/browse/page.tsx
import Link from "next/link";

type User = {
  id: number;
  name: string;
  tagline: string;
};

type Thread = {
  id: number;
  title: string;
  excerpt: string;
};

const MOCK_USERS: User[] = [
  { id: 1, name: "Tom", tagline: "Developer and music lover" },
  { id: 2, name: "Anna", tagline: "Photography, travel, art" },
  { id: 3, name: "Chris", tagline: "Gaming and coffee" },
  { id: 4, name: "Samira", tagline: "Books, poetry, late-night coding" },
  { id: 5, name: "Lee", tagline: "Minimalist, runner, maker" },
  { id: 6, name: "Jordan", tagline: "Tech news and sneakers" },
  { id: 7, name: "Priya", tagline: "UI/UX and chai" },
  { id: 8, name: "Marcus", tagline: "Basketball and beats" },
  { id: 9, name: "Nina", tagline: "Cats and ceramics" },
  { id: 10, name: "Ivy", tagline: "Indie web tinkerer" },
  { id: 11, name: "Alex", tagline: "Open source enjoyer" },
  { id: 12, name: "Riley", tagline: "Comics and cosplay" },
];

const MOCK_THREADS: Thread[] = [
  { id: 1, title: "Show your desktop setup!", excerpt: "Share pics and specs of your rig." },
  { id: 2, title: "Best coding music?", excerpt: "Lo-fi, synthwave, jazz?" },
  { id: 3, title: "Travel tips for Japan", excerpt: "Itineraries and hidden gems." },
  { id: 4, title: "Photography challenge: Blue", excerpt: "Post something blue this week." },
  { id: 5, title: "Favorite retro games", excerpt: "SNES and PS1 classics." },
  { id: 6, title: "Daily journaling thread", excerpt: "What did you ship today?" },
  { id: 7, title: "Self-hosting diaries", excerpt: "Homelabs, NAS, and backups." },
  { id: 8, title: "Best budget headphones", excerpt: "Value picks under $100." },
  { id: 9, title: "Cats vs Dogs", excerpt: "Settle it with pics only." },
  { id: 10, title: "Dark mode everything", excerpt: "Share your themes and CSS." },
  { id: 11, title: "Beginner film cameras", excerpt: "Point-and-shoot recommendations." },
  { id: 12, title: "Show your desk plants", excerpt: "Green pals that survived." },
];

function toPageInt(value: string | undefined, fallback = 1) {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
}

function sanitizeTab(tab: string | undefined): "users" | "threads" {
  return tab === "threads" ? "threads" : "users";
}

function sanitizeView(view: string | undefined): "all" | "new" | "online" {
  return view === "new" || view === "online" ? view : "all";
}

function filterAndPaginate<T extends { id: number }>(items: T[], q: string, page: number, pageSize: number) {
  const needle = q.trim().toLowerCase();
  const filtered = needle
    ? items.filter((it: any) =>
        Object.values(it).some((v) => typeof v === "string" && v.toLowerCase().includes(needle))
      )
    : items;
  const total = filtered.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), pageCount);
  const start = (safePage - 1) * pageSize;
  const end = start + pageSize;
  return { results: filtered.slice(start, end), total, page: safePage, pageCount };
}

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string; tab?: string; page?: string; view?: string };
}) {
  const q = (searchParams?.q ?? "").toString();
  const tab = sanitizeTab(searchParams?.tab?.toString());
  const page = toPageInt(searchParams?.page);
  const view = sanitizeView(searchParams?.view?.toString());
  const pageSize = 10;

  // Apply simple view filters for the Users tab to mimic All/New/Online
  const usersByView = (() => {
    if (view === "new") return [...MOCK_USERS].slice(-10);
    if (view === "online") return MOCK_USERS.filter((u) => u.id % 2 === 1);
    return MOCK_USERS;
  })();

  const { results, total, page: currentPage, pageCount } =
    tab === "threads"
      ? filterAndPaginate(MOCK_THREADS, q, page, pageSize)
      : filterAndPaginate(usersByView, q, page, pageSize);

  const queryFor = (next: Partial<{ q: string; tab: string; page: number; view: string }>) => {
    const params = new URLSearchParams();
    const merged = {
      q,
      tab,
      page: currentPage,
      view,
      ...next,
    } as { q: string; tab: string; page: number | string; view?: string };
    if (merged.q) params.set("q", merged.q);
    if (merged.tab) params.set("tab", merged.tab);
    if (merged.page) params.set("page", String(merged.page));
    if (merged.view) params.set("view", merged.view);
    const query = params.toString();
    return query ? `/browse?${query}` : "/browse";
  };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "8px 12px" }}>
      <div style={{ textAlign: "center", margin: "8px 0 16px" }}>
        <img src="/logo-hellospace.svg" alt="HelloSpace" style={{ height: 28 }} />
      </div>

      <div className="simple-container" style={{ border: "1px solid #c7d0dc", background: "#fff" }}>
        <h2 style={{ fontSize: 18, margin: 0, padding: "10px 12px", borderBottom: "1px solid #e3e9f0" }}>
          {tab === "users" ? "Browse Users" : "Browse Threads"}
        </h2>

        <div style={{ padding: "10px 12px", borderBottom: "1px solid #e3e9f0", display: "flex", gap: 12, alignItems: "center" }}>
          <form action="/browse" method="get" style={{ display: "flex", gap: 8, alignItems: "center", flex: 1 }}>
            <input type="hidden" name="tab" value={tab} />
            {tab === "users" && <input type="hidden" name="view" value={view} />}
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Search keywords..."
              style={{ flex: 1, padding: "6px 8px" }}
            />
            <button type="submit" style={{ padding: "6px 10px" }}>Search</button>
          </form>

          <nav style={{ display: "flex", gap: 12 }}>
            <Link href={queryFor({ tab: "users", page: 1 })} style={{ fontWeight: tab === "users" ? 700 : 400 }}>Users</Link>
            <Link href={queryFor({ tab: "threads", page: 1 })} style={{ fontWeight: tab === "threads" ? 700 : 400 }}>Threads</Link>
          </nav>
        </div>

        {tab === "users" && (
          <div style={{ padding: "8px 12px", borderBottom: "1px solid #e3e9f0", background: "#f7fbff" }}>
            <span style={{ marginRight: 8 }}>Filter:</span>
            <Link href={queryFor({ view: "all", page: 1 })} style={{ fontWeight: view === "all" ? 700 : 400 }}>All Users</Link>
            <span style={{ margin: "0 6px" }}>|</span>
            <Link href={queryFor({ view: "new", page: 1 })} style={{ fontWeight: view === "new" ? 700 : 400 }}>New People</Link>
            <span style={{ margin: "0 6px" }}>|</span>
            <Link href={queryFor({ view: "online", page: 1 })} style={{ fontWeight: view === "online" ? 700 : 400 }}>Online Users</Link>
          </div>
        )}

        <p className="info" style={{ padding: "8px 12px", margin: 0, color: "#4b5563", borderBottom: "1px solid #e3e9f0", background: "#f9fcff" }}>
          HelloSpace is funded by your donations. <Link href="/help">Donate now »</Link>
        </p>

        {tab === "users" && (
          <div className="new-people" style={{ padding: "10px 12px" }}>
            <div className="top" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <h4 style={{ margin: 0 }}>Active Users</h4>
              <Link className="more" href={queryFor({ page: 1 })}>[random]</Link>
            </div>
            <div className="inner" style={{ marginTop: 8 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 12 }}>
                {(results as User[]).map((u) => (
                  <div key={u.id} style={{ textAlign: "center" }}>
                    <a href={`/${encodeURIComponent(u.name)}`} style={{ display: "block", textDecoration: "none" }}>
                      <img src="/img/default/profilepic.png" alt="profile" style={{ width: 64, height: 64, objectFit: "cover", border: "1px solid #ddd", background: "#eee" }} />
                      <div style={{ marginTop: 6, fontSize: 12, color: "#0a4b78" }}>{u.name}</div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "threads" && (
          <div style={{ padding: "10px 12px" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {(results as Thread[]).map((t) => (
                <li key={t.id} style={{ padding: "10px 0", borderBottom: "1px solid #eef2f7" }}>
                  <div style={{ fontWeight: 600 }}>{t.title}</div>
                  <div style={{ color: "#6b7280", fontSize: 14 }}>{t.excerpt}</div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pagination" style={{ padding: "8px 12px", borderTop: "1px solid #e3e9f0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            {currentPage > 1 ? (
              <Link href={queryFor({ page: currentPage - 1 })}>← Prev</Link>
            ) : (
              <span style={{ color: "#bbb" }}>← Prev</span>
            )}
          </div>
          <div style={{ color: "#555" }}>
            Page {currentPage} / {pageCount} · {total} result{total === 1 ? "" : "s"}
          </div>
          <div>
            {currentPage < pageCount ? (
              <Link href={queryFor({ page: currentPage + 1 })}>Next →</Link>
            ) : (
              <span style={{ color: "#bbb" }}>Next →</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

