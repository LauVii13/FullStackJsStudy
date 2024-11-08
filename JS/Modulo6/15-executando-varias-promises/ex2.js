const numbers = [4, 9, 5, 13, 77];

function asyncSquare(x) {
  return new Promise((resolve, reject) => {
    resolve(x * x);
  });
}

Promise.all(numbers.map((number) => asyncSquare(number))).then((squares) => {
  console.log(squares);
});
