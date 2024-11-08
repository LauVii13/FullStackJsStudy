async function imc(weight, height) {
  if (typeof weight != "number" || typeof height != "number")
    return Promise.reject("Arguments must be a number");
  return weight / (height * height);
}

async function showImc(weight, height) {
  try {
    const result = await imc(weight, height);
    console.log("Calculando...");

    console.log(`Your IMC is: ${result.toFixed(2)}`);

    if (imc < 18.5) console.log("Situação: MAGREZA");
    else if (imc < 25) console.log("Situação: NORMAL");
    else if (imc < 30) console.log("Situação: SOBREPESO");
    else if (imc < 40) console.log("Situação: OBESIDADE");
    else console.log("Situação: OBESIDADE GRAVE");
  } catch (err) {
    console.log(err);
  }
}

showImc(80, 1.75);
showImc("teste", 1.8);
showImc(120, 1.9);
showImc(60, 1.78);
