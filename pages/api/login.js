import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./database/demo.db");

export default function handler(req, res) {
  const { email, password, next } = req.body || {};

  // ❌ VULNERABLE SQL (login bypass enabled)
  const query = "SELECT * FROM users WHERE email = '" + email + "'";

  db.get(query, (err, user) => {
    if (err) {
      return res.json({ success: false, message: "DB Error" });
    }

    // ======================================================
    // 🔥 LOGIN BYPASS CONDITION
    // ======================================================
    // If attacker enters:  ' OR '1'='1
    // Then user becomes FIRST record in database
    // So password check must be skipped if SQLi is detected
    // ======================================================
    const isSQLi = email.includes("' OR '1'='1") || email.includes("\" OR \"1\"=\"1");

    if (!user && !isSQLi) {
      return res.json({
        success: false,
        message:
          "<b>User Not Found:</b> No account exists with <u>" + email + "</u>",
      });
    }

    // If SQLi triggered → force-select user ID = 1
    if (isSQLi) {
      user = { id: 1, email: "student@jdsecacademy.com", name: "JDSEC Student" };
    }

    // ❌ Password check skipped on SQL injection
    if (!isSQLi && user.password !== password) {
      return res.json({
        success: false,
        message: "<b>Incorrect Password</b> for user <u>" + email + "</u>",
      });
    }

    // Generate predictable vulnerable session ID
    const sid = "jdsec-" + user.id + "-" + Math.random().toString(36).substring(2);

    // Set weak cookie (kept intentionally)
    res.setHeader("Set-Cookie", `sid=${sid}; Path=/`);

    // Redirect to next or dashboard
    return res.json({
      success: true,
      redirect: next || "/dashboard",
    });
  });
}
