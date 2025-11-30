
import { useEffect,useState } from "react";

export default function Profile(){
  const[user,setUser]=useState(null);

  useEffect(()=>{
    fetch("/api/me").then(r=>r.json()).then(j=>{
      if(j.ok) setUser(j.user);
      else window.location.href="/login";
    });
  },[]);

  return (
    <div className="jd-card">
      <div className="jd-pill">Account</div>
      <h2>My Profile</h2>
      {user && (
        <div style={{marginTop:10,fontSize:14}}>
          <div><strong>Name:</strong> {user.name}</div>
          <div><strong>Email:</strong> {user.email}</div>
        </div>
      )}
      <div style={{marginTop:16}}>
        <a href="/account/settings">Manage account settings</a>
      </div>
    </div>
  );
}
