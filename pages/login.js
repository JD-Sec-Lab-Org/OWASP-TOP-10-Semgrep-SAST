import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [nextParam, setNextParam] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const n = url.searchParams.get("next");
      if (n) setNextParam(n);
    }
  }, []);

  async function submit(e) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password, next: nextParam }),
    });

    const json = await res.json();

    if (json.success) {
      router.push(json.redirect || "/dashboard");
    } else {
      // ❌ XSS: server message is injected raw into DOM
      setMsg(json.message);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle, #0ea5e9 0, #000 80%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        padding: 20,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          background: "#0f172a",
          border: "1px solid #38bdf8",
          padding: 30,
          width: 420,
          borderRadius: 16,
        }}
      >
        <h1>JDSEC Academy Login</h1>
        <p style={{ fontSize: 12, color: "#9ca3af" }}>
          This is DevSecOps / OWASP mature CI/CD and Web App Training Demo
          website by jdsecAcademy
        </p>

        {msg && (
          <div
            dangerouslySetInnerHTML={{ __html: msg }}
            style={{
              marginTop: 16,
              padding: 10,
              background: "#450a0a",
              border: "1px solid #ef4444",
              borderRadius: 8,
              fontSize: 13,
              color: "#fecaca",
            }}
          ></div>
        )}

        <form onSubmit={submit} style={{ marginTop: 20 }}>
          <input
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              marginBottom: 10,
              borderRadius: 8,
              background: "#020617",
              border: "1px solid #64748b",
              color: "#fff",
            }}
          />

          <input
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              marginBottom: 10,
              borderRadius: 8,
              background: "#020617",
              border: "1px solid #64748b",
              color: "#fff",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 8,
              border: "none",
              background: "#38bdf8",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
