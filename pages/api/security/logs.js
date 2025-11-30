
export default function handler(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Credentials","true");
  res.status(200).send(
`JDSEC Security Console
----------------------
Environment: training-demo
Debug flag: true
Sample API key: jdsec_demo_key_123
Session cache size: 5
Recent events:
 - login: student@jdsecacademy.com
 - training enrollment: course 1
 - account update: id=1
`
  );
}
