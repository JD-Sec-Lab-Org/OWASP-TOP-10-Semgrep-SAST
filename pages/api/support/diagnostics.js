
import { exec } from "child_process";

export default function handler(req,res){
  const host = req.query.host || "127.0.0.1";
  const cmd = process.platform === "win32"
    ? "ping -n 1 " + host
    : "ping -c 1 " + host;
  exec(cmd,(err,stdout,stderr)=>{
    res.status(200).send(stdout || stderr || (err && err.toString()) || "No output");
  });
}
