const App = require("./App");

App.createUser("viniciusglaureano@gmail.com", "Vinícius Laureano");
App.createUser("teste1@gmail.com", "Teste 1");
App.createUser("teste2@gmail.com", "Teste 2");

App.deposit("viniciusglaureano@gmail.com", 500);

App.transfer("viniciusglaureano@gmail.com", "teste1@gmail.com", 100);

App.changeLoanFee(15);
App.takeLoan("viniciusglaureano@gmail.com", 2000, 24);

console.log(App.findUser("viniciusglaureano@gmail.com"));
console.log(App.findUser("viniciusglaureano@gmail.com").account);

console.log(App.findUser("teste1@gmail.com"));
console.log(App.findUser("teste1@gmail.com").account);

console.log(App.findUser("teste2@gmail.com"));
console.log(App.findUser("teste2@gmail.com").account);
