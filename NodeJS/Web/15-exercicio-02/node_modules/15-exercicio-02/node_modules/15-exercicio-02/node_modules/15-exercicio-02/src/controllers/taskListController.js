const taskListModel = require("../models/taskListModel");

module.exports = {
  // GET /app
  index: (req, res) => {
    const taskLists = taskListModel.getAllTaskLists();
    res.render("app", { taskLists });
  },

  // GET /app/new-list
  create: (req, res) => {
    res.render("create");
  },

  // POST /app/new-list
  save: (req, res) => {
    const { title } = req.body;

    const newList = taskListModel.createList(title);
    taskListModel.saveList(newList);

    res.redirect("/app");
  },
  // GET /app/:id
  // POST /app/:id/delete
  // POST /app/:id/new-task
  // POST /app/:listId/complete/:taskId
};
