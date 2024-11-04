class Book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }

  publish() {
    this.published = true;
  }
}

const eragon = new Book("Eragon");
const sherlockHolmes = new Book("Sherlock Holmes");

eragon.publish();

console.log(eragon);
console.log(sherlockHolmes);

console.log(eragon instanceof Array);
console.log(sherlockHolmes instanceof Book);
