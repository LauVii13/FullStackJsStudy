const express = require("express");
const playlistsController = require("./controllers/playlists-controller");

const router = express.Router();

router.get("/", (req, res) => res.json({ message: "Hello World!" }));

router.get("/playlists", playlistsController.index);
router.get("/playlists/:id", playlistsController.show);

router.post("/playlists", playlistsController.save);

router.put("/playlists/:id", playlistsController.update);

router.delete("/playlists/:id", playlistsController.delete);

module.exports = router;
