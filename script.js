const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${title} by ${author}, ${pages} pages, ${read}.`;
  };
}

const addBookToLibrary = (book) => {
  return myLibrary.push(book);
};

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const donQuixote = new Book("Don Quixote", "Miguel de Cervantes", 1072, "read");
const alice = new Book(
  "Alice's Adventures in Wonderland",
  "Lewis Carroll",
  352,
  "not read yet"
);

addBookToLibrary(hobbit);
addBookToLibrary(donQuixote);
addBookToLibrary(alice);
console.log(myLibrary);

myLibrary.forEach((book, idx) => {
  const table = document.querySelector("tbody");
  const row = document.createElement("tr");
  const bookTitle = document.createElement("td");
  const bookAuthor = document.createElement("td");
  const bookPages = document.createElement("td");
  const bookStatus = document.createElement("td");

  row.setAttribute("data-bookid", idx);

  bookTitle.innerText = `${book.title}`;
  bookAuthor.innerText = `${book.author}`;
  bookPages.innerText = `${book.pages}`;
  bookStatus.innerText = `${book.read}`;

  table.appendChild(row);
  row.append(bookTitle, bookAuthor, bookPages, bookStatus);
});

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector(".addBookBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
