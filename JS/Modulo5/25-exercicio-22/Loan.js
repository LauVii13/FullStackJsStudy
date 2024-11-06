const Installment = require("./Installment");

class Loan {
  static #fee = 1.05;

  constructor(value, installments) {
    this.value = value;
    this.installments = [];
    for (let i = 1; i <= installments; i++) {
      this.installments.push(
        new Installment((value * Loan.#fee) / installments, i)
      );
    }

    this.createdAt = new Date();
  }

  static get fee() {
    return Loan.#fee;
  }

  static set fee(newFeePercent) {
    Loan.#fee = 1 + newFeePercent / 100;
  }
}

module.exports = Loan;
