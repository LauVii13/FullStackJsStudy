let word = prompt("Digite uma palavra: ").toUpperCase();
let palindrome = "";

for (let i = word.length - 1; i >= 0; i--) {
  palindrome += word[i];
}

if (word === palindrome) {
  alert(
    word +
      " é um palíndromo.\n" +
      "Original: " +
      word +
      "\nInvertido: " +
      palindrome
  );
} else {
  alert(
    word +
      " não é um palíndromo.\n" +
      "Original: " +
      word +
      "\nInvertido: " +
      palindrome
  );
}
