class Wallet {
  #amount;
  #username;
  constructor() {
    this.#amount = 100.99 * 100;
  }

  get amount() {
    return this.#amount / 100;
  }

  set username(newUsername) {
    if (typeof newUsername !== "string" || newUsername.trim() === "")
      console.log("Username must be a non-empty string.");
    else this.#username = newUsername;
  }

  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();

console.log(myWallet.amount);

myWallet.username = "Vinícius";
console.log(myWallet.username);

myWallet.username += " Laureano";
console.log(myWallet.username);
