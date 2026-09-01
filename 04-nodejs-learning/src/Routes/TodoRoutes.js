import express from "express";
import db from "../database/sql.js";

const router = express.Router();

// GET ALL ✅
router.get("/", async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM USERS");
  res.status(200).json(rows);       // ✅ rows!
  console.log(rows);
});

// POST ✅
router.post("/", async (req, res) => {
  const { name, city, salary } = req.body;
  await db.execute(
    "INSERT INTO USERS (name, city, salary) VALUES (?, ?, ?)",
    [name, city, salary]
  );
  res.status(201).json({ msg: "User Added!" });
});

// PATCH ✅
router.patch("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, city, salary } = req.body;
  await db.execute(
    "UPDATE USERS SET name=?, city=?, salary=? WHERE id=?", // ✅ comma fix!
    [name, city, salary, id]                                // ✅ values fix!
  );
  res.status(200).json({ msg: "User Updated!" });           // ✅
});

// DELETE ✅
router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await db.execute("DELETE FROM USERS WHERE id=?", [id]);
  console.log("Deleted");
  res.json({ msg: "User Deleted!" });                       // ✅
});

export default router;