// HS-ADD: components/header-links.tsx
"use client";
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { clientSignOut } from '@/lib/auth/client';

export default function HeaderLinks() {
  const { data } = useSession();
  const authed = !!data?.user;

  return (
    <div style={{ display: "flex", alignItems: "start", gap: 8 }}>
      {/* Bell on the LEFT */}
      <NotificationBell />

      {/* Two-line cluster, right-aligned */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", lineHeight: 1.1, color: "#fff" }}>
        <div style={{ display: "flex", gap: 6, fontSize: 13, whiteSpace: "nowrap" }}>
          <Link href="/help">Help</Link>
          <span style={{ opacity: .8 }}>|</span>
          {authed ? (
            <>
              <Link href="/home">Home</Link>
              <span style={{ opacity: .8 }}>|</span>
              <button onClick={() => clientSignOut()}>Log out</button>
            </>
          ) : (
            <>
              <Link href="/login">Log in</Link>
              <span style={{ opacity: .8 }}>|</span>
              <Link href="/signup">Sign Up</Link>
            </>
          )}
        </div>
        <Link href="/donate" style={{ display: "inline-flex", gap: 6, marginTop: 2, fontSize: 13 }}>
          <span style={{ color: "#f87171" }} aria-hidden>❤</span>
          <span>Support us</span>
        </Link>
      </div>
    </div>
  );
}

function NotificationBell() {
  return (
    <span style={{ position: 'relative', display: 'inline-block' }} aria-label="Notifications">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#fff' }}>
        <path d="M12 2a6 6 0 00-6 6v3.586l-1.707 1.707A1 1 0 005 15h14a1 1 0 00.707-1.707L18 11.586V8a6 6 0 00-6-6zm0 20a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
      </svg>
      <span style={{ position: 'absolute', top: -3, right: -3, background: '#ef4444', color: '#fff', borderRadius: '999px', fontSize: 10, lineHeight: '12px', height: 12, minWidth: 12, padding: '0 3px', textAlign: 'center' }}>3</span>
    </span>
  );
}

