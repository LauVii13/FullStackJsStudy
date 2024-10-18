const result = prompt(
  "Escolha uma alternativa: \na)Questao 1\nb)Questao 2\nc)Questao 3"
);

switch (result) {
  case "a":
    alert("Questao 1");
    break;
  case "b":
    alert("Questao 2");
    break;
  case "c":
    alert("Questao 3");
    break;
  default:
    alert("Sem alternativa definido");
}
