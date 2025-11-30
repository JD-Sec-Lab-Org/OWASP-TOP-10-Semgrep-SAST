import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./database/demo.db");

// ❌ Fully IDOR — no auth check, no owner validation
export default function handler(req, res) {
  const id = req.query.id || "1";

  // SQL Injection also exists here (intentional)
  const q = "SELECT id, email, name FROM users WHERE id = " + id;

  db.get(q, (err, row) => {
    if (!row) return res.json({ error: "User not found" });
    res.json(row); // ❌ return full user details without verification
  });
}
