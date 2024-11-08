function imc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight != "number" || typeof height != "number")
      reject("Arguments must be a number");
    else resolve(weight / (height * height));
  });
}

function showImc(weight, height) {
  imc(weight, height)
    .then((imc) => {
      console.log(`Your IMC is: ${imc.toFixed(2)}`);
      if (imc < 18.5) console.log("Situação: MAGREZA");
      else if (imc < 25) console.log("Situação: NORMAL");
      else if (imc < 30) console.log("Situação: SOBREPESO");
      else if (imc < 40) console.log("Situação: OBESIDADE");
      else console.log("Situação: OBESIDADE GRAVE");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("Calculando...");
}

showImc(80, 1.75);
showImc("teste", 1.8);
showImc(120, 1.9);
showImc(60, 1.78);
