const express = require("express");
const app = express();

const movies = [
  { id: 1, title: "Leo", director: "Lokesh", rating: 8 },
  { id: 2, title: "Vikram", director: "Lokesh", rating: 9 },
  { id: 3, title: "Vettaiyan", director: "TJ Gnanavel", rating: 7 },
];

app.get("/movies", (req, res) => {
  const { director, rating } = req.query;
  let result = movies;

  if (rating) {
    result = result.filter((m) => m.rating === parseInt(rating)); 
  }
  if (director) {
    result = result.filter((m) => m.director === director); 
  }

  res.json(result); 
});

app.listen(5000, () => console.log("Running in Port 5000"));
