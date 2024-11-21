const express = require("express");
const taskListController = require("./controllers/taskListController");

const router = express.Router();

router.get("/", (req, res) => res.render("index"));

router.get("/app", taskListController.index);
router.get("/app/new-list", taskListController.create);
router.get("/app/:id", taskListController.show);

router.post("/app/new-list", taskListController.save);
router.post("/app/:id/new-task", taskListController.addTask);
router.post("/app/:id/delete", taskListController.delete);
router.post("/app/:listId/complete/:taskId", taskListController.completeTask);
router.post("/app/:listId/undo/:taskId", taskListController.undoTask);

module.exports = router;
