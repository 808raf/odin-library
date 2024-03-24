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

const hobbit = new Book("Hobbit", "J.R.R. Tolken", 295, "not read yet");
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

myLibrary.forEach((book) => {
  const table = document.querySelector("tbody");
  const row = document.createElement("tr");
  const bookTitle = document.createElement("td");
  const bookAuthor = document.createElement("td");
  const bookPages = document.createElement("td");
  const bookStatus = document.createElement("td");

  bookTitle.innerText = `${book.title}`;
  bookAuthor.innerText = `${book.author}`;
  bookPages.innerText = `${book.pages}`;
  bookStatus.innerText = `${book.read}`;

  table.appendChild(row);
  row.append(bookTitle, bookAuthor, bookPages, bookStatus);
});
