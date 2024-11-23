const express = require("express");
const uploadMiddlewares = require("./middlewares/upload-middlewares");

const app = express();

app.use(express.static("public"));
app.post("/upload", uploadMiddlewares.single("avatar"), (req, res) => {
  console.log(req.file, req.body);
  res.json({ message: "arquivo salvo com sucesso" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log("Servidor inicializado em http://localhost:" + PORT)
);
