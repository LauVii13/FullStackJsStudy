const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const mage = new Mage("Mage1", 90, 4, 2, 14);
const thief = new Thief("Thief1", 140, 22, 8);
const warrior = new Warrior("Warrior1", 200, 14, 12, 4);

console.table({ mage, thief, warrior });

warrior.switchPosition();
mage.attackEnemy(thief);

console.table({ mage, thief, warrior });
