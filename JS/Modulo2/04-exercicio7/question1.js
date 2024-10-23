let queue = [];
let option = "";

do {
  let patients = "";
  for (let i = 0; i < queue.length; i++) {
    patients += i + 1 + "º - " + queue[i] + "\n";
  }

  option = prompt(
    "Pacientes:\n" +
      patients +
      "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  );

  switch (option) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?");
      queue.push(novoPaciente);
      break;
    case "2":
      const pacienteConsultado = queue.shift();
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila!");
      } else {
        alert(pacienteConsultado + " foi removido da fila.");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (option !== "3");
