const App = require("./App");

const app = new App();

app.createAuthor("J. R. R. Tolkien", "British", "...");
app.createAuthor("Rick Riordan", "American", "...");

const authors = app.getAuthors();

app.createBook(
  "The Hobbit",
  "...",
  "fantasy",
  300,
  authors[0],
  "...",
  19.99,
  100
);

app.createBook(
  "The Fellowship of the Ring",
  "...",
  "fantasy",
  400,
  authors[0],
  "...",
  29.99,
  100
);

app.createBook(
  "The Lightning Thief",
  "...",
  "fantasy",
  400,
  authors[1],
  "...",
  34.99,
  100
);

app.createBook(
  "The Battle of the Labyrinth",
  "...",
  "fantasy",
  300,
  authors[1],
  "...",
  24.99,
  100
);

const books = app.getBooks();

app.createUser("Vinicius", "viniciusglaureano@gmail.com", "12345");

const users = app.getUsers();

const items = [
  { product: books[0], quantity: 2 },
  { product: books[2], quantity: 10 },
  { product: books[1], quantity: 1 },
  { product: books[1], quantity: 5 },
  { product: books[0], quantity: 3 },
];

app.createOrder(items, users[0]);

app.showDatabase();
