let balance = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"));
let option = "";

do {
  option = prompt(
    "balance disponível: R$ " +
      balance +
      "\n1 - Adicionar dinheiro" +
      "\n2 - Remover dinheiro" +
      "\n3 - Sair"
  );

  switch (option) {
    case "1":
      balance += parseFloat(prompt("Informe o valor a ser adicionado:"));
      break;
    case "2":
      balance -= prompt("Informe o valor a ser removido:");
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Entrada inválida.");
      break;
  }
} while (option !== "3");
