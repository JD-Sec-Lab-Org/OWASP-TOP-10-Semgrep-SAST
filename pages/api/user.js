import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./database/demo.db");

export default function handler(req, res) {
  const id = req.query.id;

  //  SQL Injection vulnerability intentionally kept
  const query = "SELECT id, email, name FROM users WHERE id = " + id;

  db.get(query, (err, row) => {
    if (err) {
      return res.status(500).json({ error: "DB error" });
    }

    // If user does not exist
    if (!row) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return the user object directly (IDOR!)
    return res.json({
      ok: true,
      user: row
    });
  });
}
