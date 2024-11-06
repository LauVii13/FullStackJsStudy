const Account = require("./Account");

class User {
  constructor(email, fullName) {
    this.email = email;
    this.fullName = fullName;
    this.account = new Account(this);
  }
}

module.exports = User;
