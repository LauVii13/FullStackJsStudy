const fs = require("node:fs");

fs.unlink("./arquivo.csv", (error) => {
  if (error) {
    console.error("Erro ao remover o arquivo:", error);
    return;
  }

  console.log("Arquivo removido com sucesso!");
});
