import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/blog/blog.module.css";
import BlogListItem from "@/components/blog/BlogListItem";

/* HS-BLOG:START */
const MOCK_BLOGS = [
  {
    id: 1,
    title: "The Minor Problem on HelloSpace",
    author: "Lillia_",
    createdAgo: "17 days ago",
    commentsCount: 138,
    kudosCount: 512,
    category: "Site",
    excerpt: "Let me start by saying... I really want to enjoy HelloSpace. The whole appeal of the site is a profile, the old-school internet vibe. The MySpace nostalgia is cool, but minors on the site and...",
  },
  {
    id: 2,
    title: "Kids never played outside anymore",
    author: "ivy.exe",
    createdAgo: "13 days ago",
    commentsCount: 23,
    kudosCount: 184,
    category: "Life",
    excerpt: "I've always found that phrase a little upsetting. I had an iPad I shared with my brother when I was young, but we also climbed trees, built forts, and picked up littering trends that stuck. My head was...",
  },
];

const CATEGORIES = [
  "Site","Announcements","Art and Photography","Automotive","Books and Stories","Dreams & Supernatural","Food & Restaurants","Friends","Games","Goals, Plans, Hopes","Jobs, Work, Careers","Life","Movies, TV, Celebrities","Music","News and Politics","Parties & Nightlife","Pets & Animals","Podcast","Religion & Philosophy","Romance & Relationships","School, College, University","Sports","Travel & Places","Web, HTML, Tech","Writing & Poetry"
];

export default function BlogPage() {
  return (
    <main className={styles["hs-blog-wrap"]}>
      {/* Sidebar */}
      <aside className={styles["hs-blog-sidebar"]}>
        <Link href="#" className={styles["hs-new-btn"]}>
          <Image src="/static/icons/add.png" alt="" width={16} height={16} />
          <span>New Blog Entry</span>
        </Link>

        <div className={styles["hs-box"]}>
          <div className={styles["hs-box-h"]}>
            <Image src="/static/icons/clock.png" alt="" width={16} height={16} />
            <span>View:</span>
          </div>
          <ul className={styles["hs-list"]}>
            <li><Link href="#"><Image src="/static/icons/asterisk_yellow.png" alt="" width={12} height={12} /> Top Entries</Link></li>
            <li><Link href="#"><Image src="/static/icons/clock.png" alt="" width={12} height={12} /> Recent Entries</Link></li>
            <li><Link href="#"><Image src="/static/icons/world.png" alt="" width={12} height={12} /> Subscriptions</Link></li>
          </ul>
        </div>

        <div className={styles["hs-box"]}>
          <div className={styles["hs-box-h"]}>
            <Image src="/static/icons/world.png" alt="" width={16} height={16} />
            <span>Categories:</span>
          </div>
          <ul className={styles["hs-list"]}>
            {CATEGORIES.map((c) => (
              <li key={c}><Link href="#">{c}</Link></li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main column */}
      <section className={styles["hs-blog-main"]}>
        <h1 className={styles["hs-title"]}>Blogs</h1>
        <div className={styles["hs-subhead"]}>
          <span>Top Blog Entries</span>
          <a href="#" className={styles["hs-rss"]} aria-label="RSS Feed" title="RSS Feed">RSS</a>
        </div>

        <div className={styles["hs-posts"]}>
          {MOCK_BLOGS.map((b) => (
            <BlogListItem key={b.id} blog={b} />
          ))}
        </div>

        <div className={styles["hs-pagination"]}>
          <a href="#" className={styles["hs-next-btn"]}>Next Page</a>
        </div>
      </section>
    </main>
  );
}
/* HS-BLOG:END */
