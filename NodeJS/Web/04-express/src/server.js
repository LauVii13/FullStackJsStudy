const express = require("express");

const server = express();

server.get("/", (request, response) => {
  response.send("Servidor Express Funcionando, você está na página inicial");
});

server.get("/artigos", (req, res) => {
  res.send("Você está na página de Artigos");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor Express iniciado em http://localhost:${PORT}`);
});
