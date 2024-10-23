const arr = [
  "single value",
  ["a", "b", "c"],
  ["a", "b", "c"],
  ["a", "b", "c"],
  [["a", ["x", "y", "z"]]],
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1][2]);
console.log(arr[4][0]);
console.log(arr[4][1][1]);

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];

console.table(matriz);
