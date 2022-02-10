const openPrompt = document.querySelector(".open-prompt");
const userForm = document.querySelector(".user-form");
const addBook = document.querySelector(".add-book");
const titleData = document.querySelector(".book-title");
const authorData = document.querySelector(".author");
const pageData = document.querySelector(".pages");
const readData = document.querySelector(".read");
const theLibrary = [];

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

openPrompt.addEventListener("click", () => {
  userForm.classList.remove("hidden");
  openPrompt.classList.add("hidden");
});

addBook.addEventListener("click", () => {
  userForm.classList.add("hidden");
  openPrompt.classList.remove("hidden");
  const newBook = new Book(
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

function displayBooks() {
  const userBook = document.querySelector(".user-book");
  userBook.innerHTML = "";
  for (let i = 0; i < theLibrary.length; i++) {
    const titleDisplay = document.createElement("div");
    const authorDisplay = document.createElement("div");
    const pageDisplay = document.createElement("div");
    const bookDisplay = document.createElement("div");
    const removeBtn = document.createElement("button");
    const checkboxLabel = document.createElement("label");
    const readCheckbox = document.createElement("input");

    checkboxLabel.classList.add("checkbox-label");
    checkboxLabel.appendChild(document.createTextNode("Book Read: "));
    readCheckbox.setAttribute("type", "checkbox");
    readCheckbox.classList.add("check");
    removeBtn.classList.add("remove-button");
    bookDisplay.classList.add("book-display");

    titleDisplay.textContent = `Title: "${theLibrary[i].title}"`;
    authorDisplay.textContent = `Author: ${theLibrary[i].author}`;
    pageDisplay.textContent = `Length: ${theLibrary[i].pages} pages.`;
    removeBtn.innerText = "Remove Book";

    if (theLibrary[i].read === true) {
      readCheckbox.setAttribute("checked", true);
    }

    userBook.appendChild(bookDisplay);
    bookDisplay.appendChild(titleDisplay);
    bookDisplay.appendChild(authorDisplay);
    bookDisplay.appendChild(pageDisplay);
    bookDisplay.appendChild(checkboxLabel);
    bookDisplay.appendChild(readCheckbox);
    bookDisplay.appendChild(removeBtn);

    readCheckbox.addEventListener("change", (e) => {
      theLibrary[i].read = e.target.checked;
      console.log("hehe");
    });

    removeBtn.addEventListener("click", () => {
      userBook.removeChild(bookDisplay);
      theLibrary.splice(i, 1);
    });
  }
}
