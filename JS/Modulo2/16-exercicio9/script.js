function retangulo(h, b) {
  return h * b;
}

function triangulo(h, b) {
  return retangulo(h, b) / 2;
}

function quadrado(l) {
  return retangulo(l, l);
}

function trapezio(bMaior, bMenor, h) {
  return triangulo(h, bMaior + bMenor);
}

function circulo(r) {
  return 3.14 * r * r;
}

let option = "";
do {
  option = prompt(
    "Escolha uma opção para calcular a área:\n" +
      "1 - Retângulo\n" +
      "2 - Triângulo\n" +
      "3 - Quadrado\n" +
      "4 - Trapézio\n" +
      "5 - Circulo\n" +
      "6 - Sair"
  );

  let area = 0;
  switch (option) {
    case "1":
      let base = parseFloat(
        prompt("Digite a medida da base do retângulo (apenas números): ")
      );

      let altura = parseFloat(
        prompt("Digite a medida da altura do retângulo (apenas números): ")
      );

      area = retangulo(altura, base);
      break;
    case "2":
      base = parseFloat(
        prompt("Digite a medida da base do triângulo(apenas números): ")
      );

      altura = parseFloat(
        prompt("Digite a medida da altura do triângulo (apenas números): ")
      );

      area = triangulo(altura, base);
      break;
    case "3":
      let lado = parseFloat(
        prompt("Digite a medida do lado do quadrado (apenas números): ")
      );

      area = quadrado(lado);
      break;
    case "4":
      let bMaior = parseFloat(
        prompt("Digite a medida da base maior do trapézio (apenas números): ")
      );

      let bMenor = parseFloat(
        prompt("Digite a medida da base menor do trapézio (apenas números): ")
      );

      altura = parseFloat(
        prompt("Digite a medida da altura do trapézio (apenas números): ")
      );

      area = trapezio(bMaior, bMenor, altura);
      break;
    case "5":
      let raio = parseFloat(
        prompt("Digite a medida do raio do circulo (apenas números): ")
      );

      area = circulo(raio);
      break;
    case "6":
      alert("Saindo do programa.");
      break;
    default:
      alert("Opção inválida.");

      alert("Área = " + area);
  }
} while (option != "6");
