import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/blog/blog.module.css";

/* HS-BLOG:START */
type Blog = {
  id: number | string;
  title: string;
  author: string;
  createdAgo: string;
  commentsCount: number;
  kudosCount: number;
  category: string;
  excerpt: string;
};

export default function BlogListItem({ blog }: { blog: Blog }) {
  return (
    <article className={styles["hs-post"]}>
      <header className={styles["hs-post-meta"]}>
        <span className={styles["hs-meta-item"]}>{blog.createdAgo}</span>
        <span className={styles["hs-meta-sep"]}>—</span>
        <span className={styles["hs-meta-item"]}>
          by <a href="#" className={styles["hs-meta-link"]}>{blog.author}</a>
        </span>
        <span className={styles["hs-meta-sep"]}>—</span>
        <span className={styles["hs-meta-item"]}>
          <img src="/static/icons/clock.png" alt="" width={12} height={12} /> {blog.commentsCount} Comments
        </span>
        <span className={styles["hs-meta-sep"]}>—</span>
        <span className={styles["hs-meta-item"]}>
          <img src="/static/icons/tick_shield.png" alt="" width={12} height={12} /> {blog.kudosCount} Kudos
        </span>
      </header>

      <div className={styles["hs-titleline"]}>
        <img className={styles["hs-titleicon"]} src="/static/icons/asterisk_yellow.png" alt="" width={14} height={14} />
        <h3 className={styles["hs-post-title"]}>
          <a href="#" className={styles["hs-titlelink"]}>{blog.title}</a>
        </h3>
      </div>

      <div className={styles["hs-post-cat"]}>
        <span>Category:</span> {blog.category}
      </div>

      <p className={styles["hs-post-excerpt"]}>{blog.excerpt}</p>

      <div className={styles["hs-post-links"]}>
        <a href="#" className={styles["hs-post-link"]}>Continue Reading</a>
        <span className={styles["hs-dot"]}>•</span>
        <a href="#" className={styles["hs-post-link"]}>View Blog Entry</a>
      </div>
    </article>
  );
}
/* HS-BLOG:END */
