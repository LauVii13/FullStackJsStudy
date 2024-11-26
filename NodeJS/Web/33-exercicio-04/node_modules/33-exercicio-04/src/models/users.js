const users = [
  {
    id: "1",
    name: "Vinicius",
    email: "viniciusglaureano@gmail.com",
    password: "1234",
    role: "admin",
  },
];

module.exports = {
  findAll: () => users,

  findById: (id) => users.find((user) => user.id === id),

  findByEmail: (email) => users.find((user) => user.email === email),

  createUser: (name, email, password, role) => {
    const emailAlreadyRegistered = findByEmail(email);

    if (emailAlreadyRegistered) return null;

    const newUser = {
      id: Math.floor(Math.random() * 99999).toString(),
      name,
      email,
      password,
      role,
    };

    users.push(newUser);
    return newUser;
  },

  registerUser: (name, email, password) =>
    createUser(name, email, password, "standard"),

  deleteUser: (id) => {
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) return null;

    const [deletedUser] = users.splice(userIndex, 1);

    return deletedUser;
  },
};
