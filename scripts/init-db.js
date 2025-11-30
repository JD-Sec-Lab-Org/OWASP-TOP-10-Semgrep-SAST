
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const DB = './database/demo.db';

if(!fs.existsSync('./database')) fs.mkdirSync('./database');
if(fs.existsSync(DB)) fs.unlinkSync(DB);

const db = new sqlite3.Database(DB);
db.serialize(()=>{
  db.run('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, name TEXT, password TEXT)');
  db.run('CREATE TABLE enrollments (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, course_id INTEGER)');
  db.run('CREATE TABLE announcements (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT)');
  db.run("INSERT INTO users (email,name,password) VALUES ('student@jdsecacademy.com','JDSEC Student','password123')");
  db.run("INSERT INTO users (email,name,password) VALUES ('admin@jdsecacademy.com','JDSEC Admin','admin123')");
});
db.close();
console.log("DB initialized at "+DB);
