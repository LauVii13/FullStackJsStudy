const express = require("express");
const postsController = require("./controllers/postsController");
const adminController = require("./controllers/adminController");

const router = express.Router();

// Rotas Blog
router.get("/", postsController.index);
router.get("/posts/:id", postsController.show);

// Rotas Admin
router.get("/admin", adminController.index);
router.get("/admin/create", adminController.create);
router.post("/admin/create", adminController.save);
router.post("/admin/delete/:id", adminController.delete);
router.get("/admin/edit/:id", adminController.edit);
router.post("/admin/update/:id", adminController.update);
module.exports = router;
