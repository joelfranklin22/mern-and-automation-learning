const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "joel", city: "Erode", salary: 80000 },
  { id: 2, name: "jack", city: "Coimbatore", salary: 18000 },
  { id: 3, name: "Nancy", city: "Madurai", salary: 23000 },
  { id: 4, name: "April", city: "Chennai", salary: 34000 },
];
// Get Users by id
app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const result = users.find((u) => u.id === id);
  res.json(result);
});
// Inserting User
app.post("/api/users", (req, res) => {
  const newUSer = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUSer);
  console.log(users);

  res.status(201).json(newUSer);
});
// Updating User
app.put("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((e) => e.id === id);
  if (userIndex === -1) return res.status(404).send("User Not Found");
  users[userIndex] = { id, name: req.body.name };
  res.json(users[userIndex]);
});
// Upating Particular Data
app.patch("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((e) => e.id === id);

  if (!user) {
    return res.status(404).send("User Not Found");
  }

  if (req.body.name) user.name = req.body.name;
  res.json(user);
});
// Delete User
app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((e) => e.id === id);
  if (!userIndex) return res.status(404).send("no user found");
  users.splice(userIndex, 1);
  res.json(users);
});
// Get All Users Data
app.get("/api/users", (req, res) => {
  res.json(users);
  console.log("inside getting", users);
});
app.listen(3000, () => {
  console.log("Local Host 3000 running");
});

