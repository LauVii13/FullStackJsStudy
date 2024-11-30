const booksModel = require("../models/books-model");

module.exports = {
  // GET /api/books
  index: (req, res) => res.json(booksModel.getAllBooks()),

  // GET /api/books/:id
  show: (req, res) => {
    const { id } = req.params;
    const book = booksModel.getBookById(id);

    if (!book) return res.status(404).json({ message: "Book not found" });

    res.json(book);
  },

  // POST /api/books

  save: (req, res) => {
    const { title, author, quantityAvailable } = req.body;

    if (
      typeof title !== "string" ||
      typeof author !== "string" ||
      typeof quantityAvailable !== "number"
    )
      return res.status(400).json({ message: "Campos inválidos" });

    const newBook = booksModel.createBook(title, author, quantityAvailable);

    res.status(201).json(newBook);
  },

  // PUT /api/books/:id
  update: (req, res) => {
    const { id } = req.params;
    const { title, author, quantityAvailable } = req.body;

    const fieldToUpdate = {};

    if (title && typeof title === "string") fieldToUpdate.title = title;
    if (author && typeof author === "string") fieldToUpdate.author = author;
    if (quantityAvailable && typeof quantityAvailable === "number")
      fieldToUpdate.quantityAvailable = quantityAvailable;

    const updatedBook = booksModel.updateBook(id, fieldToUpdate);

    res.json(updatedBook);
  },

  // DELETE /api/books/:id
  delete: (req, res) => {
    const { id } = req.params;

    const deletedBook = booksModel.deleteBook(id);

    res.json(deletedBook);
  },
};
