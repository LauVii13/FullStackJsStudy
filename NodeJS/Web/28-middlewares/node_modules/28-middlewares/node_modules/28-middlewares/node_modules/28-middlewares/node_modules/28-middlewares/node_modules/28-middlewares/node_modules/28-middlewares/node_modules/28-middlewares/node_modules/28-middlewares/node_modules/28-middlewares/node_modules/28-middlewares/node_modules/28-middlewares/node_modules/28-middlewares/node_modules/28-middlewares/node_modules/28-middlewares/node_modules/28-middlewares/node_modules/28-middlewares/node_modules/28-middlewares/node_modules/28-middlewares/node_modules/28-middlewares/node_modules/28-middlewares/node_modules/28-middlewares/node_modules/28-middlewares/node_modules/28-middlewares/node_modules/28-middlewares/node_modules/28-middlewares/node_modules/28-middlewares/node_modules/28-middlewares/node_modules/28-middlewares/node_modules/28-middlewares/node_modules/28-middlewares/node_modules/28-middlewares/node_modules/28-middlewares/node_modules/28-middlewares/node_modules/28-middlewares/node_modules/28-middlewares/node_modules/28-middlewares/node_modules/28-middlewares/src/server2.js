const express = require("express");
const middlewareC = require("./middlewares/middleware-c");

const app = express();

app.use(middlewareC);
app.use((req, res, next) => {
  console.log("Executando middlewareA");
  req.middlewareA = "OK!";
  next();
});

function middlewareB(req, res, next) {
  console.log("Executando middlewareB");
  req.middlewareB = "OK!";
  next();
}

app.get("/testeA", (req, res) => {
  console.log({ a: req.middlewareA, b: req.middlewareB });
  throw new Error("Algo deu errado");
  res.end();
});

app.get("/testeB", middlewareB, (req, res) => {
  console.log({ a: req.middlewareA, b: req.middlewareB });
  res.end();
});

app.use((err, req, res, next) => {
  if (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  } else {
    next();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log("Servidor inicializado em http://localhost:" + PORT)
);
