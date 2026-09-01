const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // ✅ Bug 1 fix
  res.send("Welcome");
});

app.get("/about", (req, res) => {
  // ✅ Bug 1 fix
  res.json({ name: "joel", age: 23 });
});

app.get("/contact", (req, res) => {
  // ✅ Bug 1 fix
  res.status(200).send("Contact Page"); // ✅ Bug 2 fix
});

app.get("/product", (req, res) => {
  // ✅ Bug 1 fix
  res.redirect("/");
});

app.listen(3000, () => {
  // ✅ Bug 3 fix
  console.log("Running at http://localhost:3000 🚀");
});
