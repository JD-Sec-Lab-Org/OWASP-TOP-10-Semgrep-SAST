
import {useEffect,useState} from "react";

export default function SecurityLogs(){
  const[data,setData]=useState("");

  useEffect(()=>{
    fetch("/api/security/logs").then(r=>r.text()).then(setData);
  },[]);

  return (
    <div className="jd-card">
      <div className="jd-pill">Security</div>
      <h2>Security Console</h2>
      <p style={{fontSize:13,color:"var(--muted)"}}>
        Internal diagnostic information and recent events.
      </p>
      <pre style={{whiteSpace:"pre-wrap",fontSize:12,maxHeight:320,overflow:"auto"}}>{data}</pre>
    </div>
  );
}
