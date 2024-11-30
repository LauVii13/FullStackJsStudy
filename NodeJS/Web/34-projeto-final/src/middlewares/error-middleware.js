const HttpError = require("../errors/HttpError");

module.exports = (error, req, res, next) => {
  if (error) {
    let status = 400;
    if (error instanceof HttpError) status = error.status;

    res.status(status).json({ message: error.message });
  } else {
    next();
  }
};
