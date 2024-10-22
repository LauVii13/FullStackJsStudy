const name = prompt("Qual seu nome?");

let visited = prompt("Já visitou alguma cidade?(S/N)") == "S" ? true : false;
let cities = "";
let cont = 0;

while (visited) {
  let city = prompt("Qual a cidade?");
  cities += "- " + city + "\n";
  cont++;

  visited =
    prompt("Já visitou alguma outra cidade?(S/N)") == "S" ? true : false;
}

alert("Você visitou " + cont + " cidades.\n" + cities);
