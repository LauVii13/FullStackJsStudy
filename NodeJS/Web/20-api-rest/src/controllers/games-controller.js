const games = [
  { id: 1, name: "Legend of Mana", genres: ["action-rpg"], year: 1999 },
  { id: 2, name: "World of Warcraft", genres: ["mmorpg"], year: 2004 },
  {
    id: 3,
    name: "Metal Gear Solid",
    genres: ["stealth", "action-adventure"],
    year: 1998,
  },
  { id: 4, name: "Sonic Adventure 2", genres: ["platformer"], year: 2001 },
  {
    id: 5,
    name: "Age of Empires 2",
    genres: ["real-time-strategy"],
    year: 1999,
  },
];

module.exports = {
  // GET /games
  index: (req, res) => {
    res.json(games);
  },

  // GET /games/:id
  show: (req, res) => {
    const { id } = req.params;
    const game = games.find((game) => game.id === +id);

    if (!game) {
      res.status(404);
      res.json({ message: "Game not found!" });
    } else {
      res.json(game);
    }
  },

  // POST /games

  // PUT /games/:id

  // DELETE /games/:id
};
