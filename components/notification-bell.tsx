// HS-ADD: components/notification-bell.tsx
"use client";

export default function NotificationBell() {
  return (
    <span style={{ position: 'relative', display: 'inline-block' }} aria-label="Notifications">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#fff' }}>
        <path d="M12 2a6 6 0 00-6 6v3.586l-1.707 1.707A1 1 0 005 15h14a1 1 0 00.707-1.707L18 11.586V8a6 6 0 00-6-6zm0 20a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
      </svg>
      <span style={{ position: 'absolute', top: -3, right: -3, background: '#ef4444', color: '#fff', borderRadius: '999px', fontSize: 10, lineHeight: '12px', height: 12, minWidth: 12, padding: '0 3px', textAlign: 'center' }}>1</span>
    </span>
  );
}

