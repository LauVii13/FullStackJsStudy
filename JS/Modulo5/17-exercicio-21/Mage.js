const Character = require("./Character");

class Mage extends Character {
  constructor(name, health, attack, defense, magicPoints) {
    super(name, health, attack, defense);
    this.magicPoints = magicPoints;
  }
  attackEnemy(enemy) {
    if (this.magicPoints + this.attack > enemy.defense) {
      enemy.health -= this.magicPoints + this.attack - enemy.defense;
    }
  }

  heal(ally) {
    ally.health += this.magicPoints * 2;
  }
}

module.exports = Mage;
