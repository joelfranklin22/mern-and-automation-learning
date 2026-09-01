import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2004",
  database: "react",
});
db.connect((err) => {
  if (err) return console.log("Error Occured", err);
  else return console.log("Connection success");
});
console.log("Sql Connected");

export default db;
