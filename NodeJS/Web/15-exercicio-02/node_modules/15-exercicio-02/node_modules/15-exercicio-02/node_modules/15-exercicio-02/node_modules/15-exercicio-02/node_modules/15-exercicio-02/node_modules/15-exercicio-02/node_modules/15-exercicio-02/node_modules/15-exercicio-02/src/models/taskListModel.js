let taskLists = [
  {
    id: "1",
    title: "Estudos",
  },
  {
    id: "2",
    title: "Tarefa de casa",
  },
  {
    id: "3",
    title: "Trabalho",
  },
];

module.exports = {
  getAllTaskLists: () => {
    return taskLists;
  },
  createList: (title) => {
    const newList = {
      id: Math.floor(Math.random() * 999999999).toString(),
      title: title,
    };

    return newList;
  },

  saveList: (taskList) => {
    if (taskList.title === "")
      throw new Error("Título da lista não pode ficar vazio");
    taskLists.unshift(taskList);
  },
};
