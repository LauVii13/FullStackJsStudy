const jwt = require("jsonwebtoken");
const users = require("../models/users");

const secretKey = "palavra-chave-super-secreta";
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "Authorization header required" });

  const token = authHeader.split(" ")[1];
  console.log(token);

  try {
    const decodedToken = jwt.verify(token, secretKey);

    const user = users.find((user) => user.username === decodedToken.username);

    if (!user) return res.status(401).json({ message: "Invalid user" });

    req.authenticatedUser = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
