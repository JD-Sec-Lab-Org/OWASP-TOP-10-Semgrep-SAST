
import sqlite3 from "sqlite3";
const DB = "./database/demo.db";

export default function handler(req,res){
  const term = req.query.term || "";
  const db = new sqlite3.Database(DB);
  const sql = "SELECT id,email,name FROM users WHERE email LIKE '%"+term+"%'";
  db.all(sql,[],(err,rows)=>{
    res.status(200).json({rows:rows || [], error: err && err.toString()});
    db.close();
  });
}
