const express = require("express");
const path = require("node:path");
const router = require("./routes");

const app = express();

// CONF EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// CONF de Arquivos Estaticos
app.use(express.static("public"));

// CONF para Ler dados da requisição
app.use(express.urlencoded({ extended: true }));

// Rotas da Aplicação
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor iniciado em http://localhost:" + PORT);
});
