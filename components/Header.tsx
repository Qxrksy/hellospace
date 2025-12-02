// HS-ADD: components/Header.tsx
"use client";
import Link from "next/link";
import HeaderLinks from "@/components/header-links";

export default function Header() {
  return (
    <nav>
      <div className="top" style={{ width: 810, maxWidth: "100%", margin: "0 auto" }}>
        {/* Make the container a flex row and give it HelloSpace measurements */}
        <div
          className="container"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            height: 46,
            padding: "0 6px",
          }}
        >
          {/* LEFT: fixed width like HelloSpace (keeps the center perfectly centered) */}
          <div className="left" style={{ width: 171, height: 46, display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Link href="/">
              <img className="logo" src="/logo-hellospace.svg" alt="HelloSpace" />
            </Link>
          </div>

          {/* CENTER: absolute-centered search */}
          <div className="center" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", lineHeight: 0 }}>
            <form action="/search" method="get" className="search-wrapper" style={{ display: "inline-flex", alignItems: "center" }}>
              <label htmlFor="q" style={{ marginRight: 8, color: "#fff", fontSize: 13, lineHeight: "20px" }}>Search Users:</label>
              <input
                id="q"
                name="q"
                placeholder="Search HelloSpace..."
                style={{
                  height: 20,
                  width: 192,
                  padding: "0 6px",
                  fontSize: 13,
                  lineHeight: "20px",
                  border: "1px solid rgba(0,0,0,.4)",
                  borderRadius: 2,
                }}
              />
              <button
                type="submit"
                style={{
                  marginLeft: 8,
                  height: 20,
                  width: 58,
                  border: "1px solid rgba(0,0,0,.45)",
                  borderRadius: 2,
                  background: "#f3f3f3",
                  fontSize: 12,
                  lineHeight: "18px",
                  color: "#000",
                }}
              >
                Search
              </button>
            </form>
          </div>

          {/* RIGHT: push to far right + tiny left nudge to be visually flush */}
          <div className="right" style={{ marginLeft: "auto", transform: "translateX(-3px)" }}>
            <HeaderLinks />
          </div>
        </div>
      </div>

      {/* SUBNAV — fix invalid markup: UL must contain only LI's */}
      <div className="links" style={{ width: 810, maxWidth: "100%", margin: "0 auto" }}>
        <div className="container" style={{ padding: "0 6px" }}>
          <ul>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/browse">Browse</Link></li>
            <li><Link href="/search">Search</Link></li>
            <li><Link href="/messages">Messages</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/bulletins">Bulletins</Link></li>
            <li><Link href="/forum">Forum</Link></li>
            <li><Link href="/groups">Groups</Link></li>
            <li><Link href="/layouts">Layouts</Link></li>
            <li><Link href="/favorites">Favorites</Link></li>
            <li><Link href="/invite">Invite</Link></li>
            <li><Link href="/app">App</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

