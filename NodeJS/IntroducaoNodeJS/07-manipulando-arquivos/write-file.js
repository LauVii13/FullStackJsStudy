const fs = require("node:fs");

const content = "Conteúdo do novo arquivo";

fs.writeFile("./arquivo.txt", content, "utf-8", (error) => {
  if (error) {
    console.log("erro ao escrever o arquivo: " + error.message);
    return;
  }

  console.log("Arquivo criado com sucesso de forma assíncrona!");
});

// try {
//   fs.writeFile("./arquivo.txt", "Hello World!", "utf-8");
//   console.log("Arquivo criado com sucesso!");
// } catch (error) {
//   console.log("erro ao escrever o arquivo: " + error.message);
// }
