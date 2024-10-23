function doble(x) {
  alert("O dobro de " + x + "é " + 2 * x);
}

doble(5);
doble(20);
doble(7);
doble(); //x  == undefined

function sayHello(name = "World") {
  alert("Hello " + name);
}

sayHello("John");
sayHello(); //name == Word by default

function sum(x, y) {
  alert("Sum: " + x + " + " + y + " = " + (x + y));
}

sum(5, 3);
