const usersModel = require("../models/users-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  // POST /auth/register
  register: (req, res) => {
    const { name, email, password } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    )
      return res
        .status(400)
        .json({ message: "TOdos os campos são obrigatórios" });

    const existingUser = usersModel.getUserByEmail(email);

    if (existingUser)
      return res.status(400).json({ message: "Email já cadastrado" });

    const newUser = usersModel.createUser(name, email, password);

    res.status(201).json({ ...newUser, password: undefined });
  },

  // POST /auth/login
  login: (req, res) => {
    const { email, password } = req.body;

    if (typeof email !== "string" || typeof password !== "string")
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios" });

    const user = usersModel.getUserByEmail(email);

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!user || !isValidPassword)
      return res.status(404).json({ message: "Credenciais erradas" });

    const payload = { id: user.id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1d" });

    res.json({ token });
  },
};
