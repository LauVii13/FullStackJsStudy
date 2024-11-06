const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");
const User = require("./User");

class App {
  static #users = [];

  static findUser(email) {
    const user = this.#users.find((u) => u.email === email);
    return user ?? null;
  }

  static createUser(email, fullName) {
    const userExists = App.findUser(email);
    if (!userExists) {
      this.#users.push(new User(email, fullName));
    }
  }

  static deposit(email, value) {
    const user = App.findUser(email);
    if (user) {
      const newDeposit = new Deposit(value);
      user.account.addDeposit(newDeposit);
    }
  }

  static transfer(senderEmail, receiverEmail, amount) {
    const fromUser = App.findUser(senderEmail);
    const toUser = App.findUser(receiverEmail);

    if (fromUser && toUser) {
      const newTransfer = new Transfer(fromUser, toUser, amount);
      fromUser.account.addTransfer(newTransfer);
      toUser.account.addTransfer(newTransfer);
    }
  }

  static takeLoan(email, value, numberOfInstallments) {
    const user = App.findUser(email);
    if (user) {
      const newLoan = new Loan(value, numberOfInstallments);
      user.account.addLoan(newLoan);
    }
  }

  static changeLoanFee(newFeePercentage) {
    Loan.fee = newFeePercentage;
  }
}

module.exports = App;
