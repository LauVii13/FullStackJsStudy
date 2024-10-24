function somar(a, b) {
  return a + b;
}

const operacao = somar;

console.log(operacao(2, 3)); // 5

operacao = function (a, b) {
  return a - b;
};

console.log(operacao(2, 3)); //-1
