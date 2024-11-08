function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age) resolve(age > 18);
    else reject(new Error("age is required"));
  });
}

function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      resolve(currentYear - birthYear);
    } else reject(new Error("birthday is required"));
  });
}

getAge("1999-02-02")
  .then((age) => checkAge(age))
  .then((isOver18) => {
    if (isOver18) console.log("É maior de idade");
    else console.log("É menor de idade");
  })
  .catch((err) => {
    console.log(err.message);
  });
