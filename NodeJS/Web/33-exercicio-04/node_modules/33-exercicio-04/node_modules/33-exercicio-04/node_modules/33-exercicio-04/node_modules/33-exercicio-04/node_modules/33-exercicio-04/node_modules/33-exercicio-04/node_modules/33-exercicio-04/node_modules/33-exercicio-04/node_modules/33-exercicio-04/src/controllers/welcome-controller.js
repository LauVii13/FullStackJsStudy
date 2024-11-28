module.exports = {
  // GET /welcome
  welcome: (req, res) => {
    const displayName = req.authenticatedUser?.name ?? "Visitante";
    res.json({ message: `Seja bem-vindo(a), ${displayName}` });
  },
};
