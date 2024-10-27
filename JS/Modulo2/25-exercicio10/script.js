const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += "(" + vaga.candidatos.length + "candidatos)";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  const nomeVaga = prompt("Nome da vaga:");
  const description = prompt("Descrição da vaga:");
  const dataLimite = prompt("Informe uma data limite:");

  const confirm = confirm(
    "Você realmente deseja cadastrar a vaga:\nNome: " +
      nomeVaga +
      "\nDescricao: " +
      description +
      "\nData limite: " +
      dataLimite +
      "?"
  );

  if (confirm) {
    const vaga = {
      nome: nomeVaga,
      description: description,
      dataLimite,
      candidatos: [],
    };
    vagas.push(vaga);
    alert("Vaga cadastrada com sucesso!");
  }
}

function exibirVaga() {
  const indexVaga = prompt("Informe o índice da vaga:");
  const vaga = vagas[indexVaga];

  const candiatosEmTexto = vagas.candidatos.reduce(function (
    textoFinal,
    candidate
  ) {
    return textoFinal + "\n- " + candidate;
  },
  "");

  alert(
    "Vaga: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.description +
      "\nData limite: " +
      vaga.dataLimite +
      "\nTotal de candidatos: " +
      vagas.candiatos.length +
      "\nCandidatos:" +
      candiatosEmTexto
  );
}

function adicionarCandidato() {
  const indexVaga = prompt("Informe o índice da vaga:");
  const vaga = vagas[indexVaga];
  const nomeCandidato = prompt("Nome do candidato:");

  const confirm = confirm(
    "Você realmente deseja adicionar o candidato:\nNome: " + nomeCandidato + "?"
  );

  if (confirm) {
    vaga.candidatos.push(nomeCandidato);
    alert("Candidato adicionado com sucesso!");
  }
}

function excluirVaga() {
  const indexVaga = prompt("Informe o índice da vaga:");
  const vaga = vagas[indexVaga];
  const confirm = confirm(
    "Você realmente deseja excluir a vaga:\nNome: " + vaga.nome + "?"
  );
  if (confirm) {
    vagas.splice(indexVaga, 1);
    alert("Vaga excluída com sucesso!");
  }
}

function menu() {
  const option = prompt(
    "Cadastro de Vaga de Emprego:" +
      "\n\nEscolha uma das Opções: " +
      "\n1 - Listar Vagas" +
      "\n2 - Cadastrar Vaga" +
      "\n3 - Visualizar Vaga" +
      "\n4 - Inscrever um Candidato" +
      "\n5 - Excluir uma Vaga" +
      "\n6 - Sair"
  );

  return option;
}

function executar() {
  let option;
  do {
    option = menu();
    switch (option) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        adicionarCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida!");
    }
  } while (option != "6");
}

executar();
