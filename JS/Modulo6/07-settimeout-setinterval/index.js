console.log("Programa iniciado");

// const timeoutId = setTimeout(() => {
//   console.log("Três segundos se passaram desde o inicio do programa");
// }, 1000 * 3);

// clearTimeout(timeoutId);

let seconds = 0;
const intervalId = setInterval(() => {
  seconds += 3;
  console.log(`Passaram ${seconds} segundos.`);
  if (seconds > 10) {
    clearInterval(intervalId);
    console.log("Tempo Esgotado! Programa finalizado...");
  }
}, 1000 * 3);
