const express = require("express");
const dashboardController = require("./controllers/dashboard-controller");
const authController = require("./controllers/auth-controller");
const {
  authMiddleware,
  ensureUserIsAdmin,
} = require("./middlewares/auth-middleware");

const router = express.Router();

router.get("/", authController.index);
router.get("/auth/logout", authMiddleware, authController.logout);
router.get("/dashboard", authMiddleware, dashboardController.dashboard);
router.get(
  "/dashboard/users",
  authMiddleware,
  ensureUserIsAdmin,
  dashboardController.users
);

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

module.exports = router;
