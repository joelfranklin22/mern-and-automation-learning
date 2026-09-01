const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "2004",
  database: "employee",
});
db.connect((err) => {
  if (err) console.log("connection failed", err);
  else console.log("Connection success");
});

app.get("/api/users", (req, res) => {
  db.query("SELECT * from users", (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

app.listen(5000, () => {
  console.log("Server running on 5000 localhost");
});
