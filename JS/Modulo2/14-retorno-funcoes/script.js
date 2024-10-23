function average(a, b) {
  const media = (a + b) / 2;
  return media;
}

const media = average(5, 1);

function createProduct(name, price) {
  const product = { name, price, stock: 1 };

  return product;
}

console.log(createProduct("Notebook Dell", 2500));

function areaRetangular(base, altura) {
  return base * altura;
}
console.log(areaRetangular(3, 5));
// Ou até o retorno de outra função
function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}
console.log(areaQuadrada(8));

function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
console.log(maioridade(20));
console.log(maioridade(13));
