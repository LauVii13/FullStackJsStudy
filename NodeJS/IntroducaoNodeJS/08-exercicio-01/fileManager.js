import fs from "node:fs";

export function createFile(content) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./meu-arquivo.txt", content, "utf-8", (error) => {
      if (error) reject("Error writing file:", error);
      else resolve();
    });
  });
}
export function showFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("./meu-arquivo.txt", "utf-8", (error, data) => {
      if (error) reject("Error reading file:", error);
      else {
        console.log("Conteúdo do arquivo:", data);
        resolve();
      }
    });
  });
}

export function updateFile(content) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./meu-arquivo.txt", content, "utf-8", (error) => {
      if (error) reject("Error writing file:", error);
      else resolve();
    });
  });
}

export function deleteFile() {
  return new Promise((resolve, reject) => {
    fs.unlink("./meu-arquivo.txt", (error) => {
      if (error) reject("Error deleting file:", error);
      else resolve();
    });
  });
}
