const age = prompt("Insira sua idade:");

// if (age > 18) {
//   console.log("Você é maior de idade");
// } else {
//   if(age >= 12){
//   alert("Você é menor de idade");
//   }else{
//     alert("Você é criança");}
// }

if (age > 18) {
  console.log("Você é maior de idade");
} else if (age >= 12) {
  alert("Você é menor de idade");
} else {
  alert("Você é criança");
}

const result = 6 === 6 ? "Verdadeiro" : "Falso";
console.log(result);
