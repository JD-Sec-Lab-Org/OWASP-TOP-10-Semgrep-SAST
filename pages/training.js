
export default function Training(){
  return (
    <div className="jd-card">
      <div className="jd-pill">Training</div>
      <h2>Training Center</h2>
      <p style={{fontSize:13,color:"var(--muted)"}}>
        Mark interest on the available tracks below.
      </p>
      <ul>
        <li><a href="/api/enroll-course?courseId=1">DevSecOps Specialist</a></li>
        <li><a href="/api/enroll-course?courseId=2">Cloud Security Specialist</a></li>
      </ul>
    </div>
  );
}
