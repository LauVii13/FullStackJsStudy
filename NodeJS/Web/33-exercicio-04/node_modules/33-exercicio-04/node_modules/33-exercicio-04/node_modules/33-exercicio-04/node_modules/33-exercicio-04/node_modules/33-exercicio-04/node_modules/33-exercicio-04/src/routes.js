const express = require("express");
const authController = require("./controllers/auth-controller");
const welcomeController = require("./controllers/welcome-controller");
const {
  optionalAuth,
  ensureAuth,
  ensureAdmin,
} = require("./middlewares/auth-middleware");
const usersController = require("./controllers/users-controller");

const router = express.Router();

router.get("/welcome", optionalAuth, welcomeController.welcome);

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

// Admin
router.get("/users", ensureAuth, ensureAdmin, usersController.index);
router.get("/users/:id", ensureAuth, ensureAdmin, usersController.show);

router.post("/users", ensureAuth, ensureAdmin, usersController.save);
router.delete("/users/:id", ensureAuth, ensureAdmin, usersController.delete);

module.exports = router;
