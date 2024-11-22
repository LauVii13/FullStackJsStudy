const express = require("express");
const path = require("node:path");
const playlistRouter = require("./routes");

const app = express();

app.use(express.json());

app.use("/api/playlists", playlistRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log("Servidor iniciado em http://localhost:" + PORT)
);
