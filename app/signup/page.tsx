// HS-ADD: app/signup/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Captcha from "@/components/Captcha";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const validatePassword = (pwd: string): string | null => {
    if (pwd.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(pwd)) return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(pwd)) return "Password must contain at least one lowercase letter";
    if (!/[0-9]/.test(pwd)) return "Password must contain at least one number";
    return null;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Client-side validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    // If captcha not yet solved, show captcha modal
    if (!captchaToken) {
      setShowCaptcha(true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          captchaToken
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Signup failed");
        setLoading(false);
        // Reset captcha on error
        setCaptchaToken(null);
        return;
      }

      // Show success message
      setSuccess("Account created successfully! Redirecting to welcome page...");

      // Auto-login after successful signup and redirect to welcome page
      setTimeout(async () => {
        const result = await signIn("credentials", {
          email,
          password,
          callbackUrl: "/welcome",
          redirect: false,
        });

        if (result?.error) {
          // Signup succeeded but login failed, redirect to login page
          router.push("/login?message=Account created. Please log in.");
        } else {
          // Redirect to welcome page
          router.push("/welcome");
        }
      }, 500);
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
      // Reset captcha on error
      setCaptchaToken(null);
    }
  };

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
    setShowCaptcha(false);
    // Auto-submit the form after captcha is verified
    setTimeout(() => {
      const form = document.querySelector('form');
      if (form) {
        form.requestSubmit();
      }
    }, 100);
  };

  const handleCaptchaCancel = () => {
    setShowCaptcha(false);
    setError("Captcha verification was cancelled");
  };

  return (
    <>
      {showCaptcha && (
        <Captcha onVerify={handleCaptchaVerify} onCancel={handleCaptchaCancel} />
      )}
      <div className="box standalone" style={{ maxWidth: 500, margin: '20px auto' }}>
        <h4>Sign Up</h4>
        <form onSubmit={handleSubmit}>
        {error && (
          <div style={{ padding: "8px", marginBottom: "12px", background: "#fee", border: "1px solid #fcc", borderRadius: "4px", color: "#c00" }}>
            {error}
          </div>
        )}
        {success && (
          <div style={{ padding: "8px", marginBottom: "12px", background: "#efe", border: "1px solid #cfc", borderRadius: "4px", color: "#060" }}>
            {success}
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
            <tr>
              <td></td>
              <td style={{ fontSize: "11px", color: "#666", paddingTop: "4px" }}>
                Must be 8+ characters with uppercase, lowercase, and number
              </td>
            </tr>
            <tr className="buttons">
              <td></td>
              <td>
                <button className="signup_btn standalone" type="submit" disabled={loading}>
                  {loading ? "Creating Account..." : "Create Account"}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <p style={{ marginTop: "12px", textAlign: "center" }}>
        Already have an account? <Link href="/login">Log in</Link>
      </p>
      </div>
    </>
  );
}

