
import {useState,useEffect} from "react";

export default function Settings(){
  const[email,setEmail]=useState("");
  const[name,setName]=useState("");
  const[userId,setUserId]=useState("1");

  useEffect(()=>{
    fetch("/api/me").then(r=>r.json()).then(j=>{
      if(j.ok){
        setEmail(j.user.email);
        setName(j.user.name);
        setUserId(String(j.user.id));
      }else{
        window.location.href="/login";
      }
    });
  },[]);

  async function save(e){
    e.preventDefault();
    await fetch("/api/account/update",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({id:userId,email,name})
    });
    alert("Saved");
  }

  return (
    <div className="jd-card">
      <div className="jd-pill">Account</div>
      <h2>Account Settings</h2>
      <form onSubmit={save} style={{display:"flex",flexDirection:"column",gap:10,marginTop:12}}>
        <input className="jd-input" value={userId} onChange={e=>setUserId(e.target.value)} placeholder="User ID"/>
        <input className="jd-input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
        <input className="jd-input" value={name} onChange={e=>setName(e.target.value)} placeholder="Name"/>
        <button className="jd-btn">Save changes</button>
      </form>
    </div>
  );
}
