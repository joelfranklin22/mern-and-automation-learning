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
// console.time("hash");

// const hashed_Password = await bcrypt.hash(key, 10);

// console.timeEnd("hash");

// 3. Checking time for generating password hash - MULTIPLE users

// First we use 10 users and 10 rounds and you can see cpu usage and time taken in cmd

const promises = [];

console.time("10 users 10 rounds");

for (let i = 0; i < 10; i++) {
  promises.push(bcrypt.hash(key, 10));
}

await Promise.all(promises);

console.timeEnd("10 users 10 rounds");
