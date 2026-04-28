class Library {
  constructor(){
    this.content = []
  }

  addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead)
    this.content.push(newBook)
  }

 removeBook(id){
    let el = document.querySelector(`[data-book-id="${id}"]`)
    el.remove()
    const index = this.content.findIndex(item => item.id === id)
    this.content.splice(index, 1)
  }
}

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID()
    this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}.`
  }
  toggleRead() {
    this.isRead = !this.isRead;
    display.renderLibrary();
  }  
}


class DisplayController{
  constructor(){
    this.newBookButton = document.querySelector("#new-book")
    this.seeLibrary = document.querySelector("#iterate")
    this.collection = document.querySelector("#collection")
    this.myDialog = document.querySelector("#my-dialog")
    this.myForm = document.querySelector("#my-form")
    this.userTitle = document.querySelector("#user-title")
    this.userAuthor = document.querySelector("#user-author")
    this.userPages = document.querySelector("#user-pages")
    
    this.newBookButton.addEventListener("click", () => {this.myForm.reset(); this.myDialog.close(); this.myDialog.showModal()});
    this.myDialog.addEventListener("cancel", () => {this.myForm.reset()});
    this.myDialog.addEventListener("close", () => {this.myDialog.returnValue === "confirm" ? this.handleButton() : null});
    this.seeLibrary.addEventListener("click", () => this.renderLibrary());
  }

  renderLibrary(){
    this.collection.textContent = ""
    for (const book of myLibrary.content) {
      this.collection.appendChild(this.createCard(book));
    }
  }

  handleButton(){
    const selected = this.myForm.querySelector('input[name="user-read"]:checked');
    const bookIsRead = selected?.value === "yes";
    myLibrary.addBookToLibrary(this.userTitle.value, this.userAuthor.value, this.userPages.value, bookIsRead);
    this.renderLibrary();
  }

  createCard(book){
    let newCard = document.createElement("div")
    newCard.classList.add("card")
    let newCardHeader = document.createElement("div")
    newCardHeader.classList.add("card-header")
    let newCardBody = document.createElement("div")
    newCardBody.classList.add("card-body")
    let newCardFooter = document.createElement("div")
    newCardFooter.classList.add("card-footer")
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
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-button")
    removeButton.textContent = "X";
    newCard.dataset.bookId = book.id;
    removeButton.addEventListener("click", () => myLibrary.removeBook(book.id))
    let readButton = document.createElement("button")
    readButton.textContent = "Read"
    readButton.addEventListener("click", () => book.toggleRead())
    newIsRead.textContent = book.isRead ?  "Has been read" : "Not read";
    newCardHeader.append(newTitle, removeButton)
    newCardBody.append(newAuthor, newPages, newIsRead)
    newCardFooter.append(readButton)
    newCard.append(newCardHeader, newCardBody, newCardFooter)
    return newCard
  } 
}

let myLibrary = new Library();
let display = new DisplayController();


myLibrary.addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
myLibrary.addBookToLibrary("1984", "George Orwell", 328, false);
myLibrary.addBookToLibrary("Project Hail Mary", "Andy Weir", 496, false);
myLibrary.addBookToLibrary("Dune", "Frank Herbert", 412, true);
myLibrary.addBookToLibrary("The Name of the Wind", "Patrick Rothfuss", 662, false);
myLibrary.addBookToLibrary("Educated", "Tara Westover", 334, true);
myLibrary.addBookToLibrary("Sapiens", "Yuval Noah Harari", 443, false);
myLibrary.addBookToLibrary("The Left Hand of Darkness", "Ursula K. Le Guin", 304, true);
myLibrary.addBookToLibrary("Atomic Habits", "James Clear", 320, false);
