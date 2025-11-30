
import {useState} from "react";

export default function Webhooks(){
  const[url,setUrl]=useState("");
  const[out,setOut]=useState("");

  async function send(e){
    e.preventDefault();
    const r=await fetch("/api/support/webhook-proxy?url="+encodeURIComponent(url));
    const t=await r.text();
    setOut(t);
  }

  return (
    <div className="jd-card">
      <div className="jd-pill">Integrations</div>
      <h2>Endpoint Tester</h2>
      <form onSubmit={send} style={{display:"flex",gap:10,marginBottom:14}}>
        <input className="jd-input" placeholder="https://example.org" value={url} onChange={e=>setUrl(e.target.value)}/>
        <button className="jd-btn">Send</button>
      </form>
      <pre style={{whiteSpace:"pre-wrap",fontSize:12,maxHeight:260,overflow:"auto"}}>{out}</pre>
    </div>
  );
}
