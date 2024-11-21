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
  show: (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error("Lista de Tarefas não encontrada");
    const taskList = taskListModel.getTaskListById(id);

    res.render("show", { taskList });
  },

  // POST /app/:id/delete
  delete: (req, res) => {
    const { id } = req.params;
    taskListModel.deleteList(id);
    res.redirect("/app");
  },

  // POST /app/:id/new-task
  addTask: (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    taskListModel.addTask(id, title);

    res.redirect(`/app/${id}`);
  },

  // POST /app/:listId/complete/:taskId
  completeTask: (req, res) => {
    const { listId, taskId } = req.params;

    taskListModel.completeTask(listId, taskId);
    res.redirect(`/app/${listId}`);
  },

  // POST /app/:listId/undo/:taskId
  undoTask: (req, res) => {
    const { listId, taskId } = req.params;

    taskListModel.undoTask(listId, taskId);
    res.redirect(`/app/${listId}`);
  },
};
