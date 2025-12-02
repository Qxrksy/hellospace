// HS-ADD: app/settings/page.tsx
"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [fontSize, setFontSize] = useState("small");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    // Fetch current settings
    const fetchSettings = async () => {
      try {
        const response = await fetch("/api/settings");
        if (response.ok) {
          const data = await response.json();
          setFontSize(data.fontSize || "small");
        }
      } catch (err) {
        console.error("Failed to fetch settings:", err);
      }
    };

    if (status === "authenticated") {
      fetchSettings();
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fontSize }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to update settings");
        setLoading(false);
        return;
      }

      setMessage("Settings updated successfully!");
      setLoading(false);

      // Reload the page to apply new font size
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="box standalone" style={{ maxWidth: 500, margin: '20px auto' }}>
        <h4>Loading...</h4>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="box standalone" style={{ maxWidth: 500, margin: '20px auto' }}>
      <h4>Account Settings</h4>
      <form onSubmit={handleSubmit}>
        {error && (
          <div style={{ padding: "8px", marginBottom: "12px", background: "#fee", border: "1px solid #fcc", borderRadius: "4px", color: "#c00" }}>
            {error}
          </div>
        )}
        {message && (
          <div style={{ padding: "8px", marginBottom: "12px", background: "#efe", border: "1px solid #cfc", borderRadius: "4px", color: "#060" }}>
            {message}
          </div>
        )}
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td colSpan={2} style={{ paddingBottom: "12px", textAlign: "left" }}>
                <strong>Display Preferences</strong>
              </td>
            </tr>
            <tr className="font-size-setting">
              <td className="label" style={{ width: "40%", textAlign: "left", paddingRight: "12px" }}>
                <label htmlFor="fontSize">Font Size</label>
              </td>
              <td>
                <select
                  id="fontSize"
                  name="fontSize"
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  disabled={loading}
                  style={{ width: "100%", padding: "4px" }}
                >
                  <option value="small">Small (Default)</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td style={{ fontSize: "11px", color: "#666", paddingTop: "4px", textAlign: "left" }}>
                Choose a comfortable reading size. Page will reload after saving.
              </td>
            </tr>
            <tr className="buttons">
              <td></td>
              <td style={{ paddingTop: "12px" }}>
                <button className="login_btn" type="submit" disabled={loading}>
                  {loading ? "Saving..." : "Save Settings"}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
