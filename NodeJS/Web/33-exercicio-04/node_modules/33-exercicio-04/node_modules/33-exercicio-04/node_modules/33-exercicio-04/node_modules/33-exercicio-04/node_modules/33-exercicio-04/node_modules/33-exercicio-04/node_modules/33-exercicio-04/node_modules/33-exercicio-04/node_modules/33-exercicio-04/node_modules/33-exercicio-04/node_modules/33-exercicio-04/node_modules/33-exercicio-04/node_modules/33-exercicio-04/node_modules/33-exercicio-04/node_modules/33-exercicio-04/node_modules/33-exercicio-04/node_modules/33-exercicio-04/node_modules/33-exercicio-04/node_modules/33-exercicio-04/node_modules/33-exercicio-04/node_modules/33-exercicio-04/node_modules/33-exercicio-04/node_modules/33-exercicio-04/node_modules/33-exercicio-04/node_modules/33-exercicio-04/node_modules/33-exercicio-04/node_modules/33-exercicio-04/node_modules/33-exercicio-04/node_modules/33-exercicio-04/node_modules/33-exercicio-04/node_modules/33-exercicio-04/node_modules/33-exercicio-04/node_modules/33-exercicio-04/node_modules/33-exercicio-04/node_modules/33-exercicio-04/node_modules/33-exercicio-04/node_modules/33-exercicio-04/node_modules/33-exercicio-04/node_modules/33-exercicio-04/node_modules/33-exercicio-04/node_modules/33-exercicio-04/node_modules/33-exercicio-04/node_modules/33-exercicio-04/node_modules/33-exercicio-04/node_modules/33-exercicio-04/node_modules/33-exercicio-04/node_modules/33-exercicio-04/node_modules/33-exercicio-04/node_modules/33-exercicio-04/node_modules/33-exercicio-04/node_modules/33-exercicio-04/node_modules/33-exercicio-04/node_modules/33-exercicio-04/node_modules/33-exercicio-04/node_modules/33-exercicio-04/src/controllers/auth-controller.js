module.exports = {
  // POST /auth/register
  register: (req, res) => {
    const { name, email, password } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    )
      return res.status(400).json({ message: "Invalid fields!" });
  },

  // POST /auth/login
  login: (req, res) => {},
};
