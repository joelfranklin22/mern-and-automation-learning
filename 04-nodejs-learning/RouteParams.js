const express = require("express");
const app = express();

const user = [
  {
    id: 1,
    model: "IPhone16",
    price: 150000,
  },
  {
    id: 2,
    model: "Samsung S16",
    price: 9000,
  },
  {
    id: 3,
    model: "Redmi 16Pro",
    price: 9000,
  },
];

const movies = [
  { id: 1, title: "Leo", director: "Lokesh", rating: 8 },
  { id: 2, title: "Vikram", director: "Lokesh", rating: 9 },
  { id: 3, title: "Vettaiyan", director: "TJ Gnanavel", rating: 7 },
];

app.get("/movies", (req, res) => {
  res.json(movies); // ✅ Bug 1 fix
});

app.get("/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === id);
  if (!movie) return res.status(404).send("No Record Found"); // ✅ Bug 2 fix
  res.status(200).json(movie); // ✅ Bug 3 fix
});

app.get("/movies/:id/:title", (req, res) => {
  const { id, title } = req.params; // ✅ Bug 4 fix
  res.status(200).send(`${title} movie id is ${id}`);
});

app.use((req, res) => {
  res.status(404).send("Page Not Found!");
});

app.get("/user/:id/:model", (req, res) => {
  const id = parseInt(req.params.id);
  const product = user.find((user) => user.id === id);
  if (!product) return res.status(404).send("No Product");
  res.json(product);
});

app.listen(4000, () => {
  console.log("Running at http://localhost:4000 🚀"); 
});
