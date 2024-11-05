const Character = require("./Character");

class Warrior extends Character {
  constructor(name, health, attack, defense, shieldPoints) {
    super(name, health, attack, defense);
    this.shieldPoints = shieldPoints;
    this.position = "attacking";
  }

  attackEnemy(enemy) {
    if (this.position == "attacking") super.attackEnemy(enemy);
  }

  switchPosition() {
    if (this.position == "attacking") {
      this.position = "defending";
      this.defense += this.shieldPoints;
    } else {
      this.position = "attacking";
      this.defense -= this.shieldPoints;
    }
  }
}

module.exports = Warrior;
