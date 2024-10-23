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
