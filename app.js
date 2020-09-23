
const DOMAIN = 'https://www.googleapis.com/books/v1/volumes?q=${userInput}'
const BASE_URL = `${DOMAIN}`;


// grabing our classes and our ID's
const input = document.querySelector("#blank");
const button = document.querySelector("#search");

// I need to add an event listener to our button.
button.addEventListener('click', async () => {
  let userInput = input.value;
  const response = await axios.get(`${BASE_URL}s=${userInput}`);
  console.log(response)
  renderList(response.data.items)
});

const bookScript = document.querySelector(".book-title");

// here I created a container to display the book script.
const renderList = books => {
  books.forEach(book => {
    const bookContainer = document.createElement('div');
    bookContainer.className = "book-container";
    // here I created an element to display the book title
    const bookTitle = document.createElement('p')
    bookTitle.innerHTML = book.volumeInfo.title
    bookContainer.appendChild(bookTitle)
    // This element will display the author
    if (book.volumeInfo.authors) {
      const bookAuthor = document.createElement('p2')
      bookAuthor.innerHTML = book.volumeInfo.authors[0]
      bookContainer.appendChild(bookAuthor)
    }
    // here I display the movie poster/image
    if (book.volumeInfo.imageLinks !== "N/A") {
      const bookImage = document.createElement('img');
      bookImage.innerHTML = book.volumeInfo.imageLinks
      bookContainer.appendChild(bookImage);
    }

    bookScript.appendChild(bookContainer);
  })
}






