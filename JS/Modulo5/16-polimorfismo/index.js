const Vehicle = require("./Vehicle");
const Car = require("./Car");
const Ship = require("./Ship");

const vehicle = new Vehicle();
const car = new Car();
const ship = new Ship();

// console.log(vehicle.move());
// console.log(car.move());
// console.log(ship.move(60));

function start(vehicle) {
  console.log("Starting vehicle");
  vehicle.move();
}

start(vehicle);
start(car);
start(ship);
