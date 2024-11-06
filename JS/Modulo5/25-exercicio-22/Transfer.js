class Transfer {
  constructor(sender, receiver, amount) {
    this.sender = sender;
    this.receiver = receiver;
    this.amount = amount;
    this.createdAt = new Date();
  }
}

module.exports = Transfer;
