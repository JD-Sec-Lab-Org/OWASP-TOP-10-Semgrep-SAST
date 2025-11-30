
import sqlite3 from "sqlite3";
const DB = "./database/demo.db";

export default function handler(req,res){
  if(req.method !== "POST"){
    res.status(405).json({error:"Method not allowed"});
    return;
  }
  const {id,email,name} = req.body || {};
  const db = new sqlite3.Database(DB);
  db.run("UPDATE users SET email = ?, name = ? WHERE id = ?",[email,name,id],()=>{
    res.status(200).json({ok:true});
    db.close();
  });
}
