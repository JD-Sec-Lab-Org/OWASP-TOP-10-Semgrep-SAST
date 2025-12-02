import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./database/demo.db");

export default function handler(req, res) {
  const cookie = req.headers.cookie || "";

  const sid = cookie.split("sid=")[1];

  if (!sid) {
    return res.json({ auth: false, ok: false });
  }

  const parts = sid.split("-");
  const userId = parts[1];

  if (!userId) {
    return res.json({ auth: false, ok: false });
  }

  db.get("SELECT * FROM users WHERE id = " + userId, (err, user) => {
    if (!user) return res.json({ auth: false, ok: false });

    return res.json({
      auth: true,
      ok: true,   //  REQUIRED for dashboard + profile
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });
  });
}
