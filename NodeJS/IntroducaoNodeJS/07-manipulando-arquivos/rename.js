const fs = require("node:fs");

fs.rename("./arquivo.txt", "./arquivo.csv", (error) => {
  if (error) {
    console.log("Error renaming file: " + error.message);
    return;
  }

  console.log("File renamed successfully");
});
