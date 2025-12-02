// HS-ADD: components/FontSizeProvider.tsx
"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function FontSizeProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [fontSize, setFontSize] = useState<string | null>(null);

  useEffect(() => {
    const fetchFontSize = async () => {
      try {
        const response = await fetch("/api/settings");
        if (response.ok) {
          const data = await response.json();
          setFontSize(data.fontSize || "small");
        } else {
          setFontSize("small");
        }
      } catch (err) {
        console.error("Failed to fetch font size:", err);
        setFontSize("small");
      }
    };

    if (status === "authenticated") {
      fetchFontSize();
    } else if (status === "unauthenticated") {
      setFontSize("small");
    }
  }, [status]);

  useEffect(() => {
    if (fontSize) {
      document.documentElement.setAttribute("data-font-size", fontSize);
    }
  }, [fontSize]);

  return <>{children}</>;
}
