"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function WelcomePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If user is not logged in, redirect to login
    if (status === "unauthenticated") {
      router.push("/login");
    }

    // If user is already onboarded, redirect to home
    if (status === "authenticated" && session?.user) {
      // Check if user has completed onboarding
      fetch("/api/user/onboarding-status")
        .then(res => res.json())
        .then(data => {
          if (data.onboarded) {
            router.push("/home");
          }
        });
    }
  }, [status, session, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!displayName.trim()) {
      setError("Please enter a name");
      return;
    }

    if (displayName.trim().length < 2) {
      setError("Name must be at least 2 characters");
      return;
    }

    if (displayName.trim().length > 50) {
      setError("Name must be less than 50 characters");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/user/complete-onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ displayName: displayName.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to save");
        setLoading(false);
        return;
      }

      // Update the session to reflect the new onboarding status
      // This will trigger the JWT callback with trigger="update"
      await fetch("/api/auth/session", { method: "GET" });

      // Redirect to home page after successful onboarding
      router.push("/home");
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="box standalone" style={{ maxWidth: 600, margin: '40px auto', textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="box standalone" style={{ maxWidth: 600, margin: '40px auto', padding: '30px' }}>
      <h2 style={{ margin: '0 0 20px 0', color: '#039', fontSize: '1.8em' }}>Welcome to HelloSpace!</h2>

      <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        <p style={{ margin: '0 0 15px 0', fontSize: '1em' }}>
          Please fill in this form to finish creating your account.
        </p>
        <p style={{ margin: '0', fontSize: '0.95em' }}>
          Enter your first name or nickname so your friends can recognize you. You can also enter your full name, if you want.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {error && (
          <div style={{
            padding: "10px",
            marginBottom: "15px",
            background: "#fee",
            border: "1px solid #fcc",
            borderRadius: "4px",
            color: "#c00",
            textAlign: 'left'
          }}>
            {error}
          </div>
        )}

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          <label htmlFor="displayName" style={{
            fontWeight: 'bold',
            fontSize: '1em',
            color: 'black',
            whiteSpace: 'nowrap'
          }}>
            Your Name:
          </label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            disabled={loading}
            style={{
              flex: '1',
              minWidth: '200px',
              padding: '6px 8px',
              fontSize: '1em',
              border: '1px solid #ccc',
              borderRadius: '3px'
            }}
            placeholder="Enter your name"
            autoFocus
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '7px 25px',
              fontSize: '1em',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
              background: 'white',
              border: '1px solid #999',
              borderRadius: '3px',
              color: 'black'
            }}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
