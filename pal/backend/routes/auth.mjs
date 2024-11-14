import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "../loadEnvironment.mjs";
import db from "../db.mjs";
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    let collection = db.collection("users");
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(email, password);
    await collection.insertOne({ email: email, password: hashedPassword });
    console.log(email);
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Registration failed" });
  }
});

const secretKey = process.env.JWT_SECRET;

router.post("/login", async (req, res) => {
  try {
    let collection = db.collection("users");
    const { email, password } = req.body;
    const user = await collection.find({ email: email }).toArray();
    console.log(user[0]);
    if (!user) {
      return res.status(401).json({ error: "Authentication failed try Again" });
    }
    console.log(password);
    console.log(user[0].password);
    const passwordMatch = await bcrypt.compare(password, user[0].password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed try Again" });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, {
      expiresIn: "1h",
    });

    res.status(200).json({ token, userId: user[0]._id });
    console.log(token);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Authentication failed try Again" });
  }
});
export default router;
