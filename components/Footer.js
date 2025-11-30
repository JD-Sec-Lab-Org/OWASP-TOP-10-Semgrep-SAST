
export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop:"1px solid rgba(30,64,175,0.6)",
      background:"radial-gradient(circle at top,#020617,#020617)",
      padding:"18px 20px",
      marginTop:30
    }}>
      <div style={{maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:12,color:"#9ca3af",flexWrap:"wrap",gap:8}}>
        <div>
          © {year} jdsecacademy.com • Internal training workspace.
        </div>
        <div>
          <span style={{marginRight:10}}>📞 +91 99456 54640</span>
          <span>✉ help@jdsecacademy.com</span>
        </div>
      </div>
    </footer>
  );
}
