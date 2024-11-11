import { createFile, showFile, updateFile, deleteFile } from "./fileManager.js";

async function start() {
  await createFile(
    "Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js."
  );
  await showFile();
  await updateFile("Conteúdo modificado!");
  await showFile();
  await deleteFile();
}

start();
