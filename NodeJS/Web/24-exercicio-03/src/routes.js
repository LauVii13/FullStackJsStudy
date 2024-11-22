const express = require("express");
const playlistsController = require("./controllers/playlists-controller");

const router = express.Router();

router.get("/", playlistsController.index);
router.get("/:id", playlistsController.show);

router.post("/", playlistsController.save);
router.post("/:id/musics", playlistsController.addMusic);

router.put("/:id", playlistsController.update);

router.delete("/:id", playlistsController.delete);
router.delete("/:playlistId/musics/:musicId", playlistsController.removeMusic);

module.exports = router;
