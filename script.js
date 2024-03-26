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

const createDefaultTable = () => {
  myLibrary.forEach((book, idx) => {
    const table = document.querySelector("tbody");
    const row = document.createElement("tr");
    const bookTitle = document.createElement("td");
    const bookAuthor = document.createElement("td");
    const bookPages = document.createElement("td");
    const bookStatus = document.createElement("td");
    const bookDelete = document.createElement("td");

    row.setAttribute("data-bookid", idx);
    bookDelete.setAttribute("data-delete-bookid", idx);
    row.classList.add("book");

    bookTitle.innerText = `${book.title}`;
    bookAuthor.innerText = `${book.author}`;
    bookPages.innerText = `${book.pages}`;
    bookStatus.innerText = `${book.read}`;
    bookDelete.innerHTML = `<button class="bin-button" data-delete-bookid="${idx}">
    <svg
      class="bin-top"
      viewBox="0 0 39 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="5" x2="39" y2="5" stroke="white" stroke-width="4"></line>
      <line
        x1="12"
        y1="1.5"
        x2="26.0357"
        y2="1.5"
        stroke="white"
        stroke-width="3"
      ></line>
    </svg>
    <svg
      class="bin-bottom"
      viewBox="0 0 33 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_8_19" fill="white">
        <path
          d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
        ></path>
      </mask>
      <path
        d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
        fill="white"
        mask="url(#path-1-inside-1_8_19)"
      ></path>
      <path d="M12 6L12 29" stroke="white" stroke-width="4"></path>
      <path d="M21 6V29" stroke="white" stroke-width="4"></path>
    </svg>
  </button>`;

    table.appendChild(row);
    row.append(bookTitle, bookAuthor, bookPages, bookStatus, bookDelete);
  });
};

const updateTable = (book) => {
  const table = document.querySelector("tbody");
  const row = document.createElement("tr");
  const bookTitle = document.createElement("td");
  const bookAuthor = document.createElement("td");
  const bookPages = document.createElement("td");
  const bookStatus = document.createElement("td");
  const bookDelete = document.createElement("td");

  row.setAttribute("data-bookid", myLibrary.length - 1);
  row.classList.add("book");

  bookTitle.innerText = `${book.title}`;
  bookAuthor.innerText = `${book.author}`;
  bookPages.innerText = `${book.pages}`;
  bookStatus.innerText = `${book.read}`;
  bookDelete.innerHTML = `<button class="bin-button" data-delete-bookid="${
    myLibrary.length - 1
  }">
    <svg
      class="bin-top"
      viewBox="0 0 39 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="5" x2="39" y2="5" stroke="white" stroke-width="4"></line>
      <line
        x1="12"
        y1="1.5"
        x2="26.0357"
        y2="1.5"
        stroke="white"
        stroke-width="3"
      ></line>
    </svg>
    <svg
      class="bin-bottom"
      viewBox="0 0 33 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_8_19" fill="white">
        <path
          d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
        ></path>
      </mask>
      <path
        d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
        fill="white"
        mask="url(#path-1-inside-1_8_19)"
      ></path>
      <path d="M12 6L12 29" stroke="white" stroke-width="4"></path>
      <path d="M21 6V29" stroke="white" stroke-width="4"></path>
    </svg>
  </button>`;

  table.appendChild(row);
  row.append(bookTitle, bookAuthor, bookPages, bookStatus, bookDelete);
};

createDefaultTable();

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

const submitBtn = document.querySelector(".submit");

const clearForm = () => {
  const form = document.querySelector(".form");

  form.reset();
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  let title = document.querySelector(".title");
  let author = document.querySelector(".author");
  let pages = document.querySelector(".pages");
  let status = document.querySelector('input[name="status"]:checked');

  let book = new Book(title.value, author.value, pages.value, status.value);
  addBookToLibrary(book);

  clearForm();
  updateTable(book);
  modal.style.display = "none";

  console.log(myLibrary);
};

submitBtn.addEventListener("click", handleFormSubmit);

const deleteBtn = document.querySelectorAll(".bin-button");

const handleBookDelete = (e) => {
  //grab row index
  //delete row using index
  //modify myLibrary to remove book using index
  const table = document.querySelector(".book-table");

  const deleteBookBtn = e.currentTarget;
  let bookIdx = deleteBookBtn.dataset.deleteBookid;

  table.deleteRow(Number(bookIdx) + 1);

  if (bookIdx > -1) {
    myLibrary.splice(Number(bookIdx) + 1, 1);
  }

  console.log(bookIdx);
  console.log(myLibrary);
};

deleteBtn.forEach((button) => {
  button.addEventListener("click", handleBookDelete);
});
