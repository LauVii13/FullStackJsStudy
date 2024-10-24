let pessoa = {
  nome: "Vinícius",
  idade: 19,
  metodoExemplo() {
    console.log("Hello " + this.nome + "!");
  },
};

pessoa.metodoExemplo();
