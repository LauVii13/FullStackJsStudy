const path = require("node:path");

const dir = "src";
const file = "app.js";

const fullPath = path.join(dir, file);
console.log(fullPath);

const relativePath = "../arquivos/relatorio.pdf";
const absolutePath = path.resolve(relativePath);
console.log(absolutePath);

const fileName = path.basename(relativePath);
console.log(fileName);

const extName = path.extname(absolutePath);
console.log(extName);
