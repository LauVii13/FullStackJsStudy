const name1 = prompt("Insira o nome do primeiro personagem:");
const attackPower = parseFloat(
  prompt("Insira o poder de Ataque de " + name1 + ":")
);

const name2 = prompt("Insira o nome do segundo personagem:");
const lifePoints = parseFloat(
  prompt("Insira a quantidade de pontos de vida de " + name2 + ":")
);
const defensePoints = parseFloat(
  prompt("Insira os pontos de defesa de " + name2 + ":")
);
const haveShield =
  prompt("O " + name2 + " possui escudo? (Sim/Não)") == "Sim" ? true : false;

let damageCaused = 0;

if (attackPower > defensePoints) {
  damageCaused = attackPower - defensePoints;
}

if (haveShield) {
  damageCaused /= 2;
}

alert(
  "Vida de " +
    name2 +
    ": " +
    (lifePoints - damageCaused) +
    " após sofrer " +
    damageCaused +
    " pontos de dano"
);
