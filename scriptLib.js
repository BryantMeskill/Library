const openPrompt = document.querySelector(".open-prompt");
const userForm = document.querySelector(".user-form");
const addBook = document.querySelector(".add-book");
const titleData = document.querySelector(".book-title");
const authorData = document.querySelector(".author");
const pageData = document.querySelector(".pages");
const readData = document.querySelector(".read");
const theLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

openPrompt.addEventListener("click", () => {
  userForm.classList.remove("hidden");
  openPrompt.classList.add("hidden");
});

addBook.addEventListener("click", () => {
  userForm.classList.add("hidden");
  openPrompt.classList.remove("hidden");
  let newBook = new Book(
    titleData.value,
    authorData.value,
    pageData.value,
    readData.checked
  );
  addLibraryBook(newBook);
  displayBooks(newBook);
  titleData.value = "";
  authorData.value = "";
  pageData.value = "";
  readData.checked = false;
});

function addLibraryBook(book) {
  theLibrary.push(book);
}

function displayBooks(Book) {
  const userBook = document.querySelector(".user-book");
  userBook.innerHTML = "";
  for (let i = 0; i < theLibrary.length; i++) {
    const titleDisplay = document.createElement("div");
    const authorDisplay = document.createElement("div");
    const pageDisplay = document.createElement("div");
    const readDisplay = document.createElement("div");
    const bookDisplay = document.createElement("div");
    bookDisplay.classList.add("book-display");
    titleDisplay.textContent = theLibrary[i].title;
    authorDisplay.textContent = theLibrary[i].author;
    pageDisplay.textContent = `${theLibrary[i].pages} pages.`;
    readDisplay.textContent = theLibrary[i].read;
    userBook.appendChild(bookDisplay);
    bookDisplay.appendChild(titleDisplay);
    bookDisplay.appendChild(authorDisplay);
    bookDisplay.appendChild(pageDisplay);
    bookDisplay.appendChild(readDisplay);
  }
}

//add event listener to div for checkbox
//book removal
