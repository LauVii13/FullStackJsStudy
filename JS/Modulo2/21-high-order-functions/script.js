function calcular(a, b, op) {
  console.log("Fazendo uma operação");
  const result = operacao(a, b);
  return result;
}

function soma(a, b) {
  console.log("Fazendo uma Soma");
  return a + b;
}

console.log(calcular(a, b, soma));

console.log(
  calcular(8, 4, function (x, y) {
    console.log("Fazendo uma subtração");
    return x - y;
  })
);

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"];
// Forma tradicional
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}
// Forma funcional
lista.forEach(exibirElemento);
// Também poderia ser feito:
lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
});
