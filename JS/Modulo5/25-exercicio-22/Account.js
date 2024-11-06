class Account {
  #balance;

  constructor(user) {
    this.owner = user;
    this.#balance = 0;
    this.deposits = [];
    this.loans = [];
    this.transfers = [];
  }

  get balance() {
    return this.#balance;
  }

  addDeposit(deposit) {
    this.#balance += deposit;
    this.deposits.push(deposit);
  }

  addLoan(loan) {
    this.#balance += loan.amount;
    this.loans.push(loan);
  }

  addTransfer(transfer) {
    if (transfer.receiver.email === this.owner.email) {
      this.#balance += transfer.amount;
      this.transfers.push(transfer);
    } else if (transfer.sender.email === this.owner.email) {
      this.#balance -= transfer.amount;
      this.transfers.push(transfer);
    }
  }
}

module.exports = Account;
