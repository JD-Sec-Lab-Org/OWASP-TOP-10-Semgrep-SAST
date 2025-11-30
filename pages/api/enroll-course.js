
import sqlite3 from "sqlite3";
const DB = "./database/demo.db";
const SESSIONS = global.__JDSEC_SESSIONS || {};

function getSid(cookieHeader){
  if(!cookieHeader) return null;
  const parts = cookieHeader.split(";").map(p=>p.trim());
  for(const p of parts){
    if(p.startsWith("jdsec_sid=")){
      return p.substring("jdsec_sid=".length);
    }
  }
  return null;
}

export default function handler(req,res){
  const cid = req.query.courseId || 0;
  const sid = getSid(req.headers.cookie || "");
  let userId = 1;
  if(sid && SESSIONS[sid]) userId = SESSIONS[sid].userId;
  const db = new sqlite3.Database(DB);
  db.run("INSERT INTO enrollments (user_id,course_id) VALUES (?,?)",[userId,cid],()=>{
    res.status(200).json({ok:true,courseId:cid});
    db.close();
  });
}
