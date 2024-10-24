let pokemon = "Charmander";

function evoluir() {
  pokemon = "Charmeleon";
}

console.log(pokemon);
evoluir();
console.log(pokemon);

function criarAnimal() {
  let animal = "Gato";
}

criarAnimal();
console.log(animal); // Gera erro

function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true;
    let situacao = "Aprovado";
  } else {
    var aprovado = false;
    let situacao = "Reprovado";
  }

  console.log(nota);
  console.log(aprovado);
  console.log(situacao); // Gera erro
}
avaliarNota(83);
avaliarNota(49);

// Mas mesmo o var não consegue "sair" para fora do escopo da função
function ola() {
  var texto = "Olá, mundo!";
}
console.log(texto); // Gera erro
