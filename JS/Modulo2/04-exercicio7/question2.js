const deck = [];
let option = "";

do {
  option = prompt(
    "Cartas no baralho: " +
      deck.length +
      "\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair"
  );

  switch (option) {
    case "1":
      const novaCarta = prompt("Qual é a carta?");
      deck.push(novaCarta);
      break;
    case "2":
      const cartaPuxada = deck.pop();
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho!");
      } else {
        alert("Você puxou um(a) " + cartaPuxada);
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (option !== "3");
