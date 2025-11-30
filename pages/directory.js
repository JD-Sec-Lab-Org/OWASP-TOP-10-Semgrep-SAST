
import {useState} from "react";

export default function Directory(){
  const[term,setTerm]=useState("");
  const[list,setList]=useState([]);

  async function search(e){
    e.preventDefault();
    const r=await fetch("/api/directory?term="+encodeURIComponent(term));
    const j=await r.json();
    setList(j.rows||[]);
  }

  return (
    <div className="jd-card">
      <div className="jd-pill">Directory</div>
      <h2>People Directory</h2>
      <form onSubmit={search} style={{display:"flex",gap:10,marginBottom:14}}>
        <input className="jd-input" placeholder="Search by email fragment" value={term} onChange={e=>setTerm(e.target.value)}/>
        <button className="jd-btn">Search</button>
      </form>
      <ul>
        {list.map(p=>(
          <li key={p.id}>{p.id} — {p.email} ({p.name})</li>
        ))}
      </ul>
    </div>
  );
}
