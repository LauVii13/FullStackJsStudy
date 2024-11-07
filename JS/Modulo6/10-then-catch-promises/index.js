function execute() {
  //faz algo
  return new Promise((resolve, reject) => {
    console.log("A promisse está sendo executada...");
    setTimeout(() => {
      console.log("A promisse está sendo resolvida...");
      if (true) {
        reject(404);
      } else {
        resolve(42);
      }
    }, 1000 * 2);
  });
}

execute()
  .then((result) => {
    console.log(`A promise foi resolvida e seu resultado é ${result}`);
  })
  .catch((err) => {
    console.log(`A promise resultou no erro: ${err}`);
  })
  .finally(() => {
    console.log(`A promise foi encerrada`);
  });
