const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    isRead: true,
    id: "a1b2c3d4-e5f6-4789-a012-345678901234",
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    isRead: false,
    id: "b2c3d4e5-f6a7-4890-b123-456789012345",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    pages: 496,
    isRead: false,
    id: "c3d4e5f6-a7b8-4901-c234-567890123456",
  },
];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID()
    console.log(this.id)
    myLibrary.push(this)
    console.log(myLibrary)
    info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}.`
  // the constructor...
}

function addBookToLibrary(title, author, pages, isRead) {
  // take params, create a book then store it in the array
  new Book(title, author, pages, isRead)
}

function iterateLibrary(){
  UI.collection.textContent = ""
  for (const book of myLibrary) {
    let newDiv = document.createElement("div")
    newDiv.textContent += `${book.title}, ${book.author}, ${book.pages}, ${book.isRead}`
    UI.collection.appendChild(newDiv)
  } 
  myLibrary.forEach(x => console.log(x))

}

const UI = {
  newBookButton: document.querySelector("#new-book"),
  seeLibrary: document.querySelector("#iterate"),
  collection: document.querySelector("#collection"),
}

UI.newBookButton.addEventListener("click", () => addBookToLibrary());
UI.seeLibrary.addEventListener("click", () => iterateLibrary());

/*
Write a constructor for making “Book” objects. We will revisit this in the next project. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

Put a function info() into the constructor that can report the book info like so:

console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
*/
