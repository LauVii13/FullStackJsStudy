// process.stdout.write("Hello World!");
// process.stdin.on("data", (data) => {
//   process.stdout.write(`Você digitou: ${data}`);
// });

const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.on("line", (input) => {
//   rl.write(`Você digitou: ${input}`);
// });

// rl.question("Qual o seu nome? ", (answer) => {
//   rl.write(`Olá ${answer}!\n`);
//   rl.close();
// });

// rl.on("close", () => {
//   rl.write("Saindo...");
//   process.exit(0);
// });

rl.on("SIGINT", () => {
  rl.question("Deseja realmente sair? (s/n)\n", (answer) => {
    if (answer.trim().toLowerCase() === "s") process.exit(0);
    else rl.write("Você escolheu continuar");
  });
});
