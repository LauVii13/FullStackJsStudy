const HttpError = require("../errors/HttpError");
const booksModel = require("../models/books-model");
const loansModel = require("../models/loans-model");

module.exports = {
  // GET /api/loans
  index: (req, res) => res.json(loansModel.getAllLoans()),

  // GET /api/loans/:id
  show: (req, res) => {
    const { id } = req.params;

    const loan = loansModel.getLoanById(id);

    if (!loan) throw new HttpError(404, "Empréstimo não encontrado");
    res.json(loan);
  },

  // POST /api/loans
  save: (req, res) => {
    const user = req.user;
    const { bookId } = req.body;

    if (typeof bookId !== "string") throw new HttpError(400, "Invalid book");

    const book = booksModel.getBookById(bookId);

    if (!book) throw new HttpError(400, "Book does not exists");

    const newLoan = loansModel.createLoan(user, book);

    res.status(201).json(newLoan);
  },

  // POST /api/loans/:id/return

  return: (req, res) => {
    const { id } = req.params;

    const loan = loansModel.returnLoan(id);

    res.json(loan);
  },
};
