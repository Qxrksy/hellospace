// HS-ADD: app/login/page.tsx
"use client";
import { useState } from "react";
import { clientSignIn } from "@/lib/auth/client";
import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await clientSignIn(email, password);
      if (result?.error) {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="box standalone" style={{ maxWidth: 500, margin: '20px auto' }}>
      <h4>Log in</h4>
      <form onSubmit={handleSubmit}>
        {error && (
          <div style={{ padding: "8px", marginBottom: "12px", background: "#fee", border: "1px solid #fcc", borderRadius: "4px", color: "#c00" }}>
            {error}
          </div>
        )}
        <table>
          <tbody>
            <tr className="email">
              <td className="label"><label htmlFor="email">Email</label></td>
              <td>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </td>
            </tr>
            <tr className="password">
              <td className="label"><label htmlFor="password">Password</label></td>
              <td>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
              </td>
            </tr>
            <tr className="remember">
              <td></td>
              <td><label><input type="checkbox" disabled={loading} /> Remember me</label></td>
            </tr>
            <tr className="buttons">
              <td></td>
              <td>
                <button className="login_btn standalone" type="submit" disabled={loading}>
                  {loading ? "Logging in..." : "Log in"}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <p style={{ marginTop: "12px", textAlign: "center" }}>
        Don't have an account? <Link href="/signup">Sign up</Link>
      </p>
    </div>
  );
}

