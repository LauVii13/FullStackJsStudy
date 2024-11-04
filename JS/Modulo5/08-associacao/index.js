// const Address = require("./Address");
const Person = require("./Person");

// const addr = new Address(
//   "Adalberto Panzan",
//   505,
//   "Bela Vista",
//   "Sorocaba",
//   "SP"
// );

const person = new Person(
  "Vinícius Laureano",
  "Adalberto Panzan",
  505,
  "Bela Vista",
  "Sorocaba",
  "SP"
);
console.log(person);
console.log(person.address.fullAddress());
