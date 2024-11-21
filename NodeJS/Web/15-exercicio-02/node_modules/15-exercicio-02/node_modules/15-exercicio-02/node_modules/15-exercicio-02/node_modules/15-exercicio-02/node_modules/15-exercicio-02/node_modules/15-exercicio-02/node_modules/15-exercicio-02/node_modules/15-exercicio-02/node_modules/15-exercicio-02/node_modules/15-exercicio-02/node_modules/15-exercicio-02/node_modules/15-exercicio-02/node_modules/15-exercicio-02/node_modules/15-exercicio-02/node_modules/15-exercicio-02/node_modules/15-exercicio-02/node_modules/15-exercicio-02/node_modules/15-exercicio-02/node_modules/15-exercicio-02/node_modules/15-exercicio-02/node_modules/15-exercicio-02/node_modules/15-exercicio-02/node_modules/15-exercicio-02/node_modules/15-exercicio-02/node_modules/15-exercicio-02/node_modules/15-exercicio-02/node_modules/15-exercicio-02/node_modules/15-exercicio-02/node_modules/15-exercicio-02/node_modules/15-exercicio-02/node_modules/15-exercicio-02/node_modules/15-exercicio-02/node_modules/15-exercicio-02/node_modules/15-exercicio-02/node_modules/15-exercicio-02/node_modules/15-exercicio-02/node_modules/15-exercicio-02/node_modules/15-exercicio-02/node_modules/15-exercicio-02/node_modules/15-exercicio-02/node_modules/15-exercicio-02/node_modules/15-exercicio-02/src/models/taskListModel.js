let taskLists = [
  {
    id: "1",
    title: "Estudos",
    tasks: [{ id: "1", title: "Estudar Node", completed: false }],
  },
  {
    id: "2",
    title: "Tarefa de casa",
    tasks: [],
  },
  {
    id: "3",
    title: "Trabalho",
    tasks: [],
  },
];

module.exports = {
  getAllTaskLists: () => {
    return taskLists;
  },

  getTaskListById: (id) => {
    return taskLists.find((task) => task.id === id);
  },

  createList: (title) => {
    const newList = {
      id: Math.floor(Math.random() * 999999999).toString(),
      title: title,
      tasks: [],
    };

    return newList;
  },

  saveList: (taskList) => {
    if (taskList.title === "")
      throw new Error("Título da lista não pode ficar vazio");
    taskLists.unshift(taskList);
  },

  addTask: (listId, taskTitle) => {
    const newTask = {
      id: Math.floor(Math.random() * 999999999).toString(),
      title: taskTitle,
      completed: false,
    };

    taskLists.find((task) => task.id === listId).tasks.unshift(newTask);
  },

  completeTask: (listId, taskId) => {
    const taskList = taskLists.find((task) => task.id === listId);
    const task = taskList.tasks.find((task) => task.id === taskId);
    task.completed = true;
  },

  undoTask: (listId, taskId) => {
    const taskList = taskLists.find((task) => task.id === listId);
    const task = taskList.tasks.find((task) => task.id === taskId);
    task.completed = false;
  },

  deleteList: (id) => {
    taskLists = taskLists.filter((task) => task.id !== id);
  },
};
