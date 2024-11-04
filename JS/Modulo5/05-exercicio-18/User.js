class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login successful!");
      return true;
    } else {
      console.log("Invalid email or password.");
      return false;
    }
  }
}
