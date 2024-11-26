const express = require("express");
const jwt = require("jsonwebtoken");
const router = require("./routes");

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server iniciado em http://localhost:3000"));
