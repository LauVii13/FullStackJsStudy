let playlists = [];

function generateFunctionId() {
  return Math.floor(Math.random() * 999999);
}

function findPlaylistIndex(id) {
  return playlists.findIndex((pl) => pl.id === +id);
}

module.exports = {
  // GET /api/playlists
  index: (req, res) => {
    res.status(200).json(playlists);
  },

  // GET /api/playlists/:id
  show: (req, res) => {
    const { id } = req.params;
    const playlist = playlists[findPlaylistIndex(id)];

    if (!playlist)
      return res.status(404).json({ message: "Playlist not found" });

    res.status(200).json(playlist);
  },

  // POST /api/playlists
  save: (req, res) => {
    const { name, tags, musics } = req.body;

    if (typeof name !== "string")
      return res.status(400).json({ message: "Name must be a String!" });

    if (!Array.isArray(tags))
      return res.status(400).json({ message: "Tags must be an Array!" });

    if (musics && !Array.isArray(musics))
      return res.status(400).json({ message: "Musics must be an Array!" });

    tags.forEach((tag) => {
      if (typeof tag !== "string")
        return res.status(400).json({ message: "Each tag must be a String!" });
    });

    const newPlaylist = {
      id: generateFunctionId(),
      name,
      tags,
      musics: musics ?? [],
    };

    playlists.push(newPlaylist);

    res.status(201).json(newPlaylist);
  },

  // PUT /api/playlists/:id
  update: (req, res) => {
    const { id } = req.params;
    const { name, tags } = req.body;

    const playlistIndex = findPlaylistIndex(id);

    if (playlistIndex === -1)
      return res.status(404).json({ message: "Playlist not found" });

    if (typeof name === "string") playlists[playlistIndex].name = name;

    if (tags && Array.isArray(tags)) playlists[playlistIndex].tags = tags;

    res.json(playlists[playlistIndex]);
  },

  // DELETE /api/playlists/:id
  delete: (req, res) => {
    const { id } = req.params;

    const playlist = playlists[findPlaylistIndex(id)];

    if (!playlist)
      return res.status(404).json({ message: "Playlist not found" });

    playlists = playlists.filter((pl) => pl.id !== +id);

    res.json(playlist);
  },

  // POST /api/playlists/:id/musics
  addMusic: (req, res) => {
    const { title, year, artist, album } = req.body;
    const { id } = req.params;
    const playlist = playlists.find((pl) => pl.id === +id);

    if (!playlist)
      return res.status(404).json({ message: "Playlist not found" });

    if (
      typeof title !== "string" ||
      typeof year !== "number" ||
      typeof album !== "string" ||
      typeof artist !== "string"
    )
      return res.status(404).json({ message: "Invalid fields" });

    const newMusic = {
      id: generateFunctionId(),
      title: title,
      year,
      artist,
      album,
    };

    playlist.musics.push(newMusic);

    res.status(201).json(playlist);
  },

  // DELETE /api/playlists/:playlistId/musics/:musicId
  removeMusic: (req, res) => {
    const { playlistId, musicId } = req.params;

    const playlist = playlists[findPlaylistIndex(playlistId)];

    if (!playlist)
      return res.status(404).json({ message: "playlist not found" });

    const music = playlist.musics.find((mc) => mc.id === +musicId);

    if (!music) return res.status(404).json({ message: "music not found" });

    playlist.musics = playlist.musics.filter((mc) => mc.id !== +musicId);

    res.status(204).end();
  },
};
