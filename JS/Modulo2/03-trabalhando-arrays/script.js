const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

//Insert elements
//push
const arrSize = arr.push("z");

//unshift
arrSize = arr.unshift("aa");

//Remove elements
//pop
const lastElement = arr.pop();

//shift
const firstElement = arr.shift();

//Searched for elements
//includes
const includes = arr.includes("j");

//indexOf
const index = arr.indexOf("j");

//Cut and Concat
//slice
const slice = arr.slice(3, 7);
const sliceLast = arr.slice(-5);

//concat
const concat = arr.concat(sliceLast, slice, "u");

//slice & replace
//splice
const removedElements = arr.splice(4, 2, "Potato", "Potato2");

//Iterate by elements
for (const i = 0; i < arr.length; i++) {
  const element = arr[i];
}
