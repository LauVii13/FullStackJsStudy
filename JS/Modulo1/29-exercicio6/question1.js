const number = parseFloat(prompt("Digite um número: "));
let result = "Tabuada do" + number + ":\n";

for (let i = 1; i <= 20; i++) {
  result += number + " x " + i + " = " + number * i + "\n";
}

alert(result);
