const Vehicle = require("./Vehicle");

class Ship extends Vehicle {
  move(velocity) {
    console.log(`The ship is moving at ${velocity} km/h`);
  }
}

module.exports = Ship;
