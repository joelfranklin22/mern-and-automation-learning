import bcrypt from "bcrypt";
import express from "express";

const app = express();
const router = express.Router();

app.use(express.json());

const users = [];

const key = "Joel2004@";

// 1. Hashing Password using salt + BlowFish algorithm
const salt_pass = bcrypt.genSaltSync(10);
const password_hash = await bcrypt.hash(key, salt_pass);

// 2. Checking time for generating password hash - ONE user
console.time("hash");

const hashed_Password = await bcrypt.hash(key, 10);

console.timeEnd("hash");

// 3. Checking time for generating password hash - MULTIPLE users
const promises = [];

console.time("10 hashes");

for (let i = 0; i < 10; i++) {
  promises.push(bcrypt.hash(key, 10));
}

await Promise.all(promises);

console.timeEnd("10 hashes");

// 4. Check Original Password with Hashed Password
const match = await bcrypt.compare(key, password_hash);

console.log(match);

// 5. User signup
router.post("/register", async (req, res) => {
  const { name, password } = req.body;
  try {
    const hashed_password = await bcrypt.hash(password, 10);
    users.push({ name, password: hashed_password });
    res.status(201).json({ message: "registered" });
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }

  console.log(users);
});

app.use("/api", router);

app.listen(4000, () => {
  console.log("running server");
});
