const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID()
    console.log(this.id)
  // the constructor...
}

function addBookToLibrary(title, author, pages, isRead) {
  // take params, create a book then store it in the array
  new Book(title, author, pages, isRead)
}

const UI = {
  newBookButton: document.querySelector("#new-book")
}

UI.newBookButton.addEventListener("click", () => addBookToLibrary());

/*
Write a constructor for making “Book” objects. We will revisit this in the next project. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

Put a function info() into the constructor that can report the book info like so:

console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
*/
