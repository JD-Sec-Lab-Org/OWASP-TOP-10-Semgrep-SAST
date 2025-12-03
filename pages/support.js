#r
export default function Support(){
  return (
    <div className="jd-card">
      <div className="jd-pill">Support</div>
      <h2>Support & Diagnostics</h2>
      <p style={{fontSize:13,color:"var(--muted)"}}>
        Use the tools below when you need to troubleshoot connectivity or integrations.
      </p>
      <ul>
        <li><a href="/support/diagnostics">Connection diagnostics</a></li>
        <li><a href="/support/webhooks">External endpoint tester</a></li>
      </ul>
    </div>
  );
}
