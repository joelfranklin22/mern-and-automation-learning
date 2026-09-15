import express from "express";
import cors from "cors";
import TodoRoutes from "./src/Routes/TodoRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4000;

app.use("/api/users", TodoRoutes);

app.listen(PORT, () => {
  console.log(`Running ${PORT} `);
});
