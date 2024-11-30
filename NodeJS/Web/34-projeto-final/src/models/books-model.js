const HttpError = require("../errors/HttpError");

const uuid = require("uuid").v4;

let books = [
  { id: "1", title: "Book 1", author: "Author 1", quantityAvailable: 4 },
  { id: "2", title: "Book 2", author: "Author 2", quantityAvailable: 3 },
];

module.exports = {
  getAllBooks: () => books.map((book) => ({ id: book.id, title: book.title })),

  getBookById: (id) => books.find((book) => book.id === id),

  createBook: (title, author, quantityAvailable) => {
    const newBook = {
      id: uuid(),
      title,
      author,
      quantityAvailable,
    };

    books.push(newBook);

    return newBook;
  },

  updateBook: (id, updatedBook) => {
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1)
      throw new HttpError(404, "Livro não encontrado no sistema");

    books[bookIndex] = { ...books[bookIndex], ...updatedBook };
    return books[bookIndex];
  },

  deleteBook: (id) => {
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1)
      throw new HttpError(404, "Livro não encontrado no sistema");

    const deleteBook = books[bookIndex];

    books = books.filter((book) => book.id !== id);

    return deleteBook;
  },

  takeBook: (id) => {
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1)
      throw new HttpError(404, "Livro não encontrado no sistema");

    books[bookIndex].quantityAvailable--;
  },

  returnBook: (id) => {
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1)
      throw new HttpError(404, "Livro não encontrado no sistema");

    books[bookIndex].quantityAvailable++;
  },
};
