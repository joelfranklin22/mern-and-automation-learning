const express = require("express");
const app = express();

// Logger ✅
app.use((req, res, next) => {
    console.log("Logger");
    
  console.log(`${req.method} ${req.url} ${new Date()}`); // ✅ Bug 1 fix
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// /profile மட்டும் protect! ✅
app.get("/profile", (req, res) => {
  const token = req.headers.token;
  if (!token) return res.status(401).send("Login பண்ணு!"); // ✅ Bug 2 fix
  res.send("Profile Page");
});

// 404
app.use((req, res) => {
  res.status(404).send("404 Error");
});

app.listen(3000, () => {
  console.log("Running at http://localhost:3000 🚀");
});