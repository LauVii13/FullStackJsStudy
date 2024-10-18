const car1 = parseFloat(
  prompt("Velocidade do primeiro carro em Km (apenas números):")
);
const car2 = parseFloat(
  prompt("Velocidade do segundo carro em Km (apenas números):")
);

if (car1 == car2) {
  alert("Velocidades iguais");
} else if (car1 > car2) {
  alert("Primeiro carro mais rápido");
} else {
  alert("Segundo carro mais rápido");
}
