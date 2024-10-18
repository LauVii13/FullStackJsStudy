const meters = parseFloat(prompt("Insira a medida em metros"));
const option = prompt(
  "Escolha para qual unidade de medida deseja converter:\na)mm\nb)cm\nc)dm\nd)dam\ne)hm\nf)km"
);

switch (option) {
  case "a":
    alert(meters + "m = " + meters * 1000 + "mm");
    break;
  case "b":
    alert(meters + "m = " + meters * 100 + "cm");
    break;
  case "c":
    alert(meters + "m = " + meters * 10 + "dm");
    break;
  case "d":
    alert(meters + "m = " + meters / 10 + "dam");
    break;
  case "e":
    alert(meters + "m = " + meters / 100 + "hm");
    break;
  case "f":
    alert(meters + "m = " + meters / 1000 + "km");
    break;
  default:
    alert("Opção inválida");
}
