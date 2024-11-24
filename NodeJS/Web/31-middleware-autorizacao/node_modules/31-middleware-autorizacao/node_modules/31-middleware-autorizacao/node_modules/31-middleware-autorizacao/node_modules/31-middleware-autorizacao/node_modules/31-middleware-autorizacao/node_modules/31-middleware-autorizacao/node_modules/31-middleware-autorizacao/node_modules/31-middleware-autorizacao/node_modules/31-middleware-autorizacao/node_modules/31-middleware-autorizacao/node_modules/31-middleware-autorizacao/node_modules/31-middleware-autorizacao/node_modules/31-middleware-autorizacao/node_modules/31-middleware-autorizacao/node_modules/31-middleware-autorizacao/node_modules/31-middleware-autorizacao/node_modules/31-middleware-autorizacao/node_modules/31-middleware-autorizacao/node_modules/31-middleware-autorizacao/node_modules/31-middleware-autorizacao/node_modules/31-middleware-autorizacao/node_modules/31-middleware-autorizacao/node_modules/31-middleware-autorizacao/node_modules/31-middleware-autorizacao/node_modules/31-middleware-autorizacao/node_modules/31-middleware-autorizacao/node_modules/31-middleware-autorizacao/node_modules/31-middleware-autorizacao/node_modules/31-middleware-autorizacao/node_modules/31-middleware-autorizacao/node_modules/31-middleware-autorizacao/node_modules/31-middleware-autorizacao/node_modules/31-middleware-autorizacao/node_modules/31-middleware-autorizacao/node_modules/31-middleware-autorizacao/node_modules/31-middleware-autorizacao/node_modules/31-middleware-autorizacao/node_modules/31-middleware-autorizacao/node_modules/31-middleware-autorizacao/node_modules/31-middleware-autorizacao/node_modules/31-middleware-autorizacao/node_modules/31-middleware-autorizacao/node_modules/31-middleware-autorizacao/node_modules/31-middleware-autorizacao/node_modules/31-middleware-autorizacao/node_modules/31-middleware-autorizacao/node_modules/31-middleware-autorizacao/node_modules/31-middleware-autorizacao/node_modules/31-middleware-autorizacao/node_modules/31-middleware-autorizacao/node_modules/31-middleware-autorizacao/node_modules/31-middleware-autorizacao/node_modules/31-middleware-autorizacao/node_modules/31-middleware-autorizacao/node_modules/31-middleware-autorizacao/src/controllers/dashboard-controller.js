const users = require("../models/users");

module.exports = {
  dashboard: (req, res) => {
    res.render("dashboard", { user: req.session.currentUser });
  },

  users: (req, res) => {
    res.render("users", { users });
  },
};
