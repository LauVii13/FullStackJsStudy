const authMiddleware = (req, res, next) => {
  if (req.session.authenticated) res.redirect("/");
  else next();
};

module.exports = authMiddleware;
