const Comment = require("./Comment");
class Post {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.comments = new Array();
    this.createdAt = new Date();
  }

  addComment(username, content) {
    this.comments.push(new Comment(username, content));
  }
}

module.exports = Post;
