import { useState, useEffect } from "react";

export default function Announcements() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  async function send(e) {
    e.preventDefault();
    await fetch("/api/announcements", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ content: text }),
    });
    setText("");
    load();
  }

  async function load() {
    const r = await fetch("/api/announcements");
    const j = await r.json();
    setList(j);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h2>Announcements</h2>

      <form onSubmit={send}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share an update..."
          style={{ width: "100%", height: 80, marginBottom: 10 }}
        ></textarea>
        <button type="submit">Post</button>
      </form>

      <h4>Latest Posts:</h4>

      <div
        style={{
          border: "1px solid #444",
          padding: 10,
          borderRadius: 8,
          minHeight: 50,
          background: "#111",
        }}
        dangerouslySetInnerHTML={{
          __html: list.length
            ? list.map((m) => m.content).join("<hr/>")
            : "<i>No posts yet</i>",
        }}
      ></div>
    </div>
  );
}
