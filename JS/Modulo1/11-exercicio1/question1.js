let firstName = prompt("What is your first name:");
let lastName = prompt("What is your last name:");
let studyArea = prompt("What is your study area:");
let birthYear = prompt("What is your birth year:");

alert(
  "Sucessfully registered!" +
    "\nFull name: " +
    firstName +
    " " +
    lastName +
    "\nStudy area: " +
    studyArea +
    "\nAge: " +
    (2024 - birthYear)
);
console.log(2024 - birthYear);
