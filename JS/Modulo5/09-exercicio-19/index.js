const Author = require("./Author");

const john = new Author("John Smith");
const post = john.writePost("Falando sobre Js", "texto sobre Js aleatório");

post.addComment("Vinicius", "bem loko");
post.addComment("Pedro", "post legal");

console.log(john);
