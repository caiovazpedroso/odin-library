const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID()
    this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}.`
  }
  // the constructor...

function addBookToLibrary(title, author, pages, isRead) {
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pages, isRead)
  myLibrary.push(newBook)
}

function handleButton(){
  let bookIsRead = false
  if (UI.userRead.checked) {bookIsRead = true}
  addBookToLibrary(UI.userTitle.value, UI.userAuthor.value, UI.userPages.value, bookIsRead);
}

function iterateLibrary(){
  UI.collection.textContent = ""
  for (const book of myLibrary) {
    let newDiv = document.createElement("div")
    newDiv.classList.add("card")
    let newTitle = document.createElement("div");
    newTitle.classList.add("title")
    newTitle.textContent = book.title
    let newAuthor = document.createElement("div")
    newAuthor.classList.add("author");
    newAuthor.textContent = book.author
    let newPages = document.createElement("div")
    newPages.classList.add("pages")
    newPages.textContent = `${book.pages} pages`
    let newIsRead = document.createElement("div");
    newIsRead.classList.add("isRead");
    if (book.isRead === true) {newIsRead.textContent = "Has been read"} 
    else {newIsRead.textContent = "Not read"}
    newDiv.append(newTitle, newAuthor, newPages, newIsRead)
    UI.collection.appendChild(newDiv)
  } 
  myLibrary.forEach(x => console.log(x))

}

const UI = {
  newBookButton: document.querySelector("#new-book"),
  seeLibrary: document.querySelector("#iterate"),
  collection: document.querySelector("#collection"),
  myDialog: document.querySelector("#my-dialog"),
  myForm: document.querySelector("#my-form"),
  userTitle: document.querySelector("#user-title"),
  userAuthor: document.querySelector("#user-author"),
  userPages: document.querySelector("#user-pages"),
  userRead: document.querySelector("#user-read"),
}

UI.newBookButton.addEventListener("click", () => {UI.myForm.reset(); UI.myDialog.close(); UI.myDialog.showModal()});
UI.myDialog.addEventListener("cancel", () => {UI.myForm.reset()});
UI.myDialog.addEventListener("close", () => {UI.myDialog.returnValue === "confirm" ? handleButton() : null});
UI.seeLibrary.addEventListener("click", () => iterateLibrary());

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("Project Hail Mary", "Andy Weir", 496, false);
addBookToLibrary("Dune", "Frank Herbert", 412, true);
addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", 662, false);
addBookToLibrary("Educated", "Tara Westover", 334, true);
addBookToLibrary("Sapiens", "Yuval Noah Harari", 443, false);
addBookToLibrary("The Left Hand of Darkness", "Ursula K. Le Guin", 304, true);
addBookToLibrary("Atomic Habits", "James Clear", 320, false);
