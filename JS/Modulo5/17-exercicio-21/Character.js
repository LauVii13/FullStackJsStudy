class Character {
  constructor(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }

  attackEnemy(enemy) {
    if (this.attack > enemy.defense)
      enemy.health -= this.attack - enemy.defense;
  }
}

module.exports = Character;
