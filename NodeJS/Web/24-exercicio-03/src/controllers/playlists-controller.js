let playlists = [];

module.exports = {
  // GET /playlists
  index: (req, res) => {
    res.status(200).json(playlists);
  },

  // GET /playlists/:id
  show: (req, res) => {
    const { id } = req.params;
    const playlist = playlists.find((pl) => pl.id === +id);

    if (!playlist)
      return res.status(404).json({ message: "Playlist not found" });

    res.status(200).json(playlist);
  },

  // POST /playlists
  save: (req, res) => {
    const { name, tags, musics } = req.body;

    if (typeof name !== "string")
      return res.status(400).json({ message: "Name must be a String!" });

    if (!Array.isArray(tags))
      return res.status(400).json({ message: "Tags must be an Array!" });

    tags.forEach((tag) => {
      if (typeof tag !== "string")
        return res.status(400).json({ message: "Each tag must be a String!" });
    });

    const newPlaylist = {
      id: Math.floor(Math.random() * 999999),
      name,
      tags,
      musics: musics ?? [],
    };

    playlists.push(newPlaylist);

    res.status(201).json(newPlaylist);
  },

  // PUT /playlists/:id
  update: (req, res) => {
    const { id } = req.params;
    const { name, tags } = req.body;

    const playlistIndex = playlists.findIndex((pl) => pl.id === +id);

    if (playlistIndex === -1)
      return res.status(404).json({ message: "Playlist not found" });

    if (typeof name === "string") playlists[playlistIndex].name = name;

    if (tags && Array.isArray(tags)) playlists[playlistIndex].tags = tags;

    res.json(playlists[playlistIndex]);
  },

  // DELETE /playlists/:id
  delete: (req, res) => {
    const { id } = req.params;

    const playlist = playlists.find((pl) => pl.id === +id);

    if (!playlist)
      return res.status(404).json({ message: "Playlist not found" });

    playlists = playlists.filter((pl) => pl.id !== +id);

    res.json(playlist);
  },
};
