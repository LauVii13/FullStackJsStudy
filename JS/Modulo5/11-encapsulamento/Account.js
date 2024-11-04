class Account {
  #password;
  #balance = 0;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) return this.#balance;
    else return null;
  }

  #authenticate(email, password) {
    return email === this.email && password === this.#password;
  }
}

const user = { email: "email@gmail.com", password: "123456" };

const account = new Account(user);

console.log(account);
