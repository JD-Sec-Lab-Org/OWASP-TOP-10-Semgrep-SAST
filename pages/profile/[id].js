import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (!router.isReady) return; 
    if (!id) return;

    fetch("/api/user?id=" + id)
      .then((r) => r.json())
      .then((j) => setInfo(j.user));   // ✅ FIXED
  }, [router.isReady, id]);

  if (!info) {
    return (
      <div style={{ padding: 20 }}>
        <div className="jd-pill">User Profile</div>
        <h2>Profile for User #{id}</h2>
        <p>Loading…</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <div className="jd-pill">User Profile</div>
      <h2>Profile for User #{info.id}</h2>

      <div className="jd-card">
        <p><b>Name:</b> {info.name}</p>
        <p><b>Email:</b> {info.email}</p>
        <p><b>User ID:</b> {info.id}</p>
      </div>
    </div>
  );
}
