import sqlite3 from "sqlite3";
const DB = "./database/demo.db";

export default function handler(req, res) {
  const db = new sqlite3.Database(DB);

  if (req.method === "POST") {
    const { content } = req.body || {};

    // ❌ No validation, no sanitization → Stored XSS
    const raw = content || "";

    // ❌ Direct insertion into DB
    db.run(
      "INSERT INTO announcements (content) VALUES (?)",
      [raw],
      (err) => {
        // Even if DB error, respond with success (extra vulnerability)
        res.status(200).json({ ok: true });
        db.close();
      }
    );
  } 
  
  else {
    // ❌ Return raw HTML exactly as stored
    db.all("SELECT content FROM announcements ORDER BY id DESC", [], (err, rows) => {
      const list = rows || [];

      // ❌ Do not escape or encode anything
      res.status(200).json(list);
      db.close();
    });
  }
}
