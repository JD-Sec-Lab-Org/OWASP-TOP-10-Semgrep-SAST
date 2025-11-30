
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Header(){
  return (
    <header style={{
      position:"sticky",
      top:0,
      zIndex:40,
      backdropFilter:"blur(18px)",
      background:"linear-gradient(90deg,rgba(15,23,42,0.96),rgba(15,23,42,0.92))",
      borderBottom:"1px solid rgba(37,99,235,0.35)"
    }}>
      <div className="header-inner" style={{
        maxWidth:1100,margin:"0 auto",padding:"10px 20px",
        display:"flex",justifyContent:"space-between",alignItems:"center"
      }}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{
            width:42,height:42,borderRadius:14,
            background:"radial-gradient(circle,#38bdf8,#0f172a)",
            display:"flex",alignItems:"center",justifyContent:"center",
            fontWeight:800,fontSize:18,color:"#0b1120",
            boxShadow:"0 0 18px rgba(56,189,248,0.75)"
          }}>JD</div>
          <div>
            <div style={{
              fontWeight:800,
              background:"linear-gradient(120deg,#38bdf8,#c4b5fd)",
              WebkitBackgroundClip:"text",
              color:"transparent",
              fontSize:20
            }}>
              JDSEC Academy
            </div>
            <div style={{fontSize:12,color:"#9ca3af"}}>
              Training Workspace
            </div>
          </div>
        </div>

        <div style={{textAlign:"right",fontSize:12,color:"#9ca3af",lineHeight:1.4}}>
          <div><FaPhoneAlt style={{marginRight:6}}/> +91 99456 54640</div>
          <div><FaEnvelope style={{marginRight:6}}/> <a href="mailto:help@jdsecacademy.com">help@jdsecacademy.com</a></div>
          <div><FaGlobe style={{marginRight:6}}/> jdsecacademy.com</div>
        </div>
      </div>

      <nav style={{
        maxWidth:1100,margin:"0 auto",padding:"0 20px 10px 20px",
        display:"flex",gap:14,fontSize:13,color:"#cbd5f5"
      }}>
        <Link href="/dashboard">Overview</Link>
        <Link href="/profile">My Profile</Link>
        <Link href="/training">Training</Link>
        <Link href="/directory">Directory</Link>
        <Link href="/announcements">Announcements</Link>
        <Link href="/support">Support</Link>
        <Link href="/account/settings">Account</Link>
        <Link href="/security/logs">Security</Link>
      </nav>
    </header>
  );
}
