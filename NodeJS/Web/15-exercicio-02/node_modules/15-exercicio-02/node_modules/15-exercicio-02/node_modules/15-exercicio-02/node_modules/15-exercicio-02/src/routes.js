const express = require("express");
const taskListController = require("./controllers/taskListController");

const router = express.Router();

router.get("/", (req, res) => res.render("index"));

router.get("/app", taskListController.index);
router.get("/app/new-list", taskListController.create);
router.post("/app/new-list", taskListController.save);

module.exports = router;
