// const book = {
//   title: "A Game of Thrones",
//   pages: 734,
//   published: true,
//   inStock: 20,
//   tags: ["fantasy", "adventure", "series"],
//   author: {
//     name: "George R. R. Martin",
//     birthYear: 1955,
//   },
//   addOnStock(quantity) {
//     this.inStock += quantity;
//   },
// };

function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function (quantity) {
    this.inStock += quantity;
  };

  this.save = function () {
    //save the book to a database
  };
}

const tags = ["Fantasy", "Adventure", "Series"];
const author = { name: "George R. R. Martin", birthYear: 1955 };

const gameOfThrones = new Book("A Game of Thrones", 734, tags, author);

console.log(gameOfThrones);

const tags2 = ["Investigação", "Policial", "Series"];
const author2 = { name: "Arthur Conan Doyle", birthYear: 1936 };
const estudoEmVermelho = new Book(
  "Estudo em Vermelho - Sherlock Holmes",
  247,
  tags2,
  author2
);

console.log(estudoEmVermelho);
