let option = 0;
let cont = 0;
let houses = [];

do {
  option = prompt(
    "Totais de imóveis cadastrados:" +
      cont +
      "\n1 - Adicionar novo imóvel" +
      "\n2 - Listar todos os imóveis" +
      "\n3 - Sair"
  );

  switch (option) {
    case "1":
      let house = {};
      house.owner = prompt("Informe o nome do proprietário do imóvel:");
      house.rooms = parseFloat(prompt("Informe o total de quartos:"));
      house.toilets = parseFloat(prompt("Informe o total de banheiros:"));
      house.garage =
        prompt("Possui garagem?(S/N)").toUpperCase() == "S" ? true : false;

      houses.push(house);
      cont++;
      break;
    case "2":
      let message = "Imóveis cadastrados até o momento:\n";
      for (let i = 0; i < houses.length; i++) {
        message +=
          "Proprietário: " +
          houses[i].owner +
          "\nQuartos: " +
          houses[i].rooms +
          "\nBanheiros: " +
          houses[i].toilets +
          "\nGaragem: " +
          (houses[i].garage ? "Sim" : "Não") +
          "\n\n";
      }

      alert(message);
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (option != "3");
