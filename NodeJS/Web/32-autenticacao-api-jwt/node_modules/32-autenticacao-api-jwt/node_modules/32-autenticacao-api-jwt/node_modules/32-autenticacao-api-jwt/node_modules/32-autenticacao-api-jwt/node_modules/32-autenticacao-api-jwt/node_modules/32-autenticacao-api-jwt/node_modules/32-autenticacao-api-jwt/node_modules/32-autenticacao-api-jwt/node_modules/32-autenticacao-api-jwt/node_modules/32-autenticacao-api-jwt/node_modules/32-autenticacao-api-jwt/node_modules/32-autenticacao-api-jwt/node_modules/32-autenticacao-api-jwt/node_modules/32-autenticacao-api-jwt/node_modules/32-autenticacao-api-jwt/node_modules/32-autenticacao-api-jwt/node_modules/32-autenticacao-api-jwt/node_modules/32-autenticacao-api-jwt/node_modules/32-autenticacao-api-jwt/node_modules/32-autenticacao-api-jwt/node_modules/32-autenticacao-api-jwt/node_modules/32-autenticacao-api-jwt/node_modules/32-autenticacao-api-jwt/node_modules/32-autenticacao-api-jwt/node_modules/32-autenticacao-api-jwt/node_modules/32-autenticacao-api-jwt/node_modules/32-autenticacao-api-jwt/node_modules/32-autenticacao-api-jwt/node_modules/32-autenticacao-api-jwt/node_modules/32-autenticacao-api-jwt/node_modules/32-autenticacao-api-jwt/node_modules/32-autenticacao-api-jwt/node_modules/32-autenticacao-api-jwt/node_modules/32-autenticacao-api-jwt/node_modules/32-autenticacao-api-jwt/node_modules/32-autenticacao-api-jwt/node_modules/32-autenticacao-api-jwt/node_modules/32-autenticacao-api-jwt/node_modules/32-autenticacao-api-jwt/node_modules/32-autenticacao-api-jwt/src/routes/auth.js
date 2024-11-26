const express = require("express");
const users = require("../models/users");
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

const secretKey = "palavra-chave-super-secreta";

authRouter.post("/register", (req, res) => {
  const { username, password } = req.body;
  const user = { username, password };
  users.push(user);

  res.status(201).json(user);
});

authRouter.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password)
    return res.status(401).json({ message: "Invalid credentials" });

  const payload = { username };
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

  res.json({ token });
});

module.exports = authRouter;
