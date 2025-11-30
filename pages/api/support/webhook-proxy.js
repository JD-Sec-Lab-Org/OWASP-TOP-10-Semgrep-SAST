
import http from "http";
import https from "https";

export default function handler(req,res){
  const url = req.query.url || "";
  if(!url){
    res.status(400).send("No url");
    return;
  }
  const client = url.startsWith("https") ? https : http;
  try{
    client.get(url,(r)=>{
      let data = "";
      r.on("data",c=>data+=c);
      r.on("end",()=>{
        res.status(200).send(data.slice(0,4000));
      });
    }).on("error",(e)=>{
      res.status(500).send("Error: " + e.toString());
    });
  }catch(e){
    res.status(500).send("Exception: " + e.toString());
  }
}
