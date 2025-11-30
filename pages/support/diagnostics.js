
import {useState} from "react";

export default function Diagnostics(){
  const[target,setTarget]=useState("127.0.0.1");
  const[result,setResult]=useState("");

  async function run(e){
    e.preventDefault();
    const r=await fetch("/api/support/diagnostics?host="+encodeURIComponent(target));
    const t=await r.text();
    setResult(t);
  }

  return (
    <div className="jd-card">
      <div className="jd-pill">Diagnostics</div>
      <h2>Connection Diagnostics</h2>
      <form onSubmit={run} style={{display:"flex",gap:10,marginBottom:14}}>
        <input className="jd-input" value={target} onChange={e=>setTarget(e.target.value)} placeholder="Host to check"/>
        <button className="jd-btn">Run check</button>
      </form>
      <pre style={{whiteSpace:"pre-wrap",fontSize:12,maxHeight:260,overflow:"auto"}}>{result}</pre>
    </div>
  );
}
