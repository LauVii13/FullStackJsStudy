const users = [
  {
    username: "Vinicius",
    password: "12340",
  },
  {
    username: "Isaac",
    password: "12345",
  },
];

function findUser(username) {
  return users.find((user) => user.username === username);
}

module.exports = {
  // GET /
  index: (req, res) => {
    res.render("index");
  },

  // POST /auth/register
  register: (req, res) => {
    const { username, password } = req.body;

    const userAlreadyExists = findUser(username);

    if (userAlreadyExists) return res.status(400).redirect("/");

    const newUser = { username, password };
    users.push(newUser);

    req.session.authenticated = true;
    req.session.currentUser = newUser;

    res.redirect("/dashboard");
  },

  // POST /auth/login
  login: (req, res) => {
    const { username, password } = req.body;

    const user = findUser(username);

    if (!user) return res.redirect("/");

    if (user.password !== password) return res.redirect("/");

    req.session.authenticated = true;
    req.session.currentUser = user;

    res.redirect("/dashboard");
  },

  // GET /auth/logout
  logout: (req, res) => {
    req.session.destroy();
    res.render("/");
  },
};
