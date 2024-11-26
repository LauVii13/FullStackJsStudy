const express = require("express");
const authMiddleware = require("../middlewares/auth-middleware");

const protectedRouter = express.Router();

protectedRouter.get("/dashboard", authMiddleware, (req, res) => {
  const username = req.authenticatedUser.username;
  res.json({
    message: `Você está na área protegida. Bem-Vindo ${username}`,
  });
});

module.exports = protectedRouter;
