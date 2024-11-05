const Vehicle = require("./Vehicle");

class Car extends Vehicle {
  move() {
    console.log("Car is moving");
  }
}

module.exports = Car;
