import { useEffect, useState } from "react";

const tiles = [
  { href: "/profile", title: "My Profile", desc: "View account details and workspace summary." },
  { href: "/account/settings", title: "Account Settings", desc: "Update contact details and preferences." },
  { href: "/training", title: "Training Center", desc: "Browse available learning paths and mark interest." },
  { href: "/directory", title: "People Directory", desc: "Look up other learners in the JDSEC ecosystem." },
  { href: "/announcements", title: "Announcements", desc: "Post updates and read workspace messages." },
  { href: "/support", title: "Support & Diagnostics", desc: "Run connectivity tests and inspect integrations." },
  { href: "/security/logs", title: "Security Console", desc: "View system logs and diagnostic output." }
];

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/me")
      .then((r) => r.json())
      .then((j) => {
        if (j.auth) setUser(j.user);
        else window.location.href = "/login";
      });
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Inter, sans-serif", color: "#fff" }}>

      {/* 🔹 JDSEC Training Banner */}
      <div
        style={{
          background: "#0f172a",
          border: "1px solid #38bdf8",
          padding: 15,
          borderRadius: 10,
          marginBottom: 20,
          textAlign: "center",
          fontSize: 13,
        }}
      >
        <b>This is DevSecOps / OWASP mature CI/CD and Web App Training demo website by jdsecAcademy</b>
      </div>

      {/* 🔹 Header */}
      <div style={{ marginBottom: 18 }}>
        <div className="jd-pill">Workspace Overview</div>
        <h2 style={{ marginTop: 10, marginBottom: 4 }}>
          Welcome {user ? user.name : "..."}
        </h2>

        <p style={{ fontSize: 13, color: "var(--muted)" }}>
          Explore different areas of the JDSEC Academy learning workspace.
        </p>
      </div>

      {/* 🔹 Tiles Grid */}
      <div className="jd-grid">
        {tiles.map((tile) => (
          <a key={tile.href} href={tile.href} className="jd-card">
            <h3 style={{ marginTop: 0, marginBottom: 4 }}>{tile.title}</h3>
            <p style={{ fontSize: 13, color: "var(--muted)" }}>{tile.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
