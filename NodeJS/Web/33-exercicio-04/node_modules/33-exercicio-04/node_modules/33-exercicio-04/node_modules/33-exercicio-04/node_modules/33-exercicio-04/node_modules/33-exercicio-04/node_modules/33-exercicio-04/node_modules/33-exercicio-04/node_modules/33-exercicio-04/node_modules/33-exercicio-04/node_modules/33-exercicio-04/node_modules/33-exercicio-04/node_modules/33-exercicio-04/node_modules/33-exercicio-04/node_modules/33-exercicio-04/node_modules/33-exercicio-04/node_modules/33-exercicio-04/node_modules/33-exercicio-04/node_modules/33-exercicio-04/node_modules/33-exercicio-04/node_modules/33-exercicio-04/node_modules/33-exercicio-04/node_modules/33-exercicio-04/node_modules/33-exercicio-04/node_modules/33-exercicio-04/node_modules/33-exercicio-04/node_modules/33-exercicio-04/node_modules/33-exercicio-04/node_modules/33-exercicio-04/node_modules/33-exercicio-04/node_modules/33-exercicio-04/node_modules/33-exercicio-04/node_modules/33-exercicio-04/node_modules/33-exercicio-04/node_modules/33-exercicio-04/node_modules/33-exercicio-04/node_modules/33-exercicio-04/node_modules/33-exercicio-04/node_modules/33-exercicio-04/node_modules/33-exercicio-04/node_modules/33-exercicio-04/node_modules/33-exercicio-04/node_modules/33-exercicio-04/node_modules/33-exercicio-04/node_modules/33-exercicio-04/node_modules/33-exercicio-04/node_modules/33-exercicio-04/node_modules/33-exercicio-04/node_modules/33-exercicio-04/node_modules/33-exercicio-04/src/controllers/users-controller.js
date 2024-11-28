const users = require("../models/users");

module.exports = {
  // GET /users
  index: (req, res) => {
    const allUsers = users.findAll();

    res.json(allUsers);
  },

  // GET /users/:id
  show: (req, res) => {
    const { id } = req.params;
    const user = users.findById(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  },

  // POST /users
  save: (req, res) => {
    const { name, email, password, role } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof role !== "string" ||
      !role.match(/^(admin|standard)$/)
    )
      return res.status(400).json({ message: "Invalid fields!" });

    const registeredUser = users.createUser(name, email, password, role);

    if (!registeredUser)
      return res.status(400).json({ message: "Email already in use!" });

    res.status(201).json(registeredUser);
  },

  // DELETE /users/:id
  delete: (req, res) => {
    const { id } = req.params;
    const user = users.findById(id);

    if (!user) res.status(404).json({ message: "User not found!" });

    const deletedUser = users.deleteUser(id);

    if (!deletedUser) res.status(400).json({ message: "Couldn't delete user" });

    res.json(deletedUser);
  },
};
