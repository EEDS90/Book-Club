// async function getBook(userInput) {
//   try {
//     const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userInput}`)
//     console.log(response.data.items[0].searchInfo)
//     const data= response.data.items[0].searchInfo
//   } catch (error) {
//     console.log(`Error: ${error}`)
//   }
// }
// getBook()

const DOMAIN = 'https://www.googleapis.com/books/v1/volumes?q=${userInput}'
const BASE_URL = `${DOMAIN}`;


// grabing our classes and our ID's
const input = document.querySelector("#blank");
const button = document.querySelector("#search");

// I need to add an event listener to our button.
button.addEventListener('click', async () => {
  let userInput = input.value;
  const response = await axios.get(`${BASE_URL}s=${userInput}`);
  // console.log(response.data.items[0].searchInfo)
  renderList(response.data.items[0].searchInfo)
});

const bookScript = document.querySelector(".book-title");

// here I created a container to display the book script.
const renderScript = books => {
  books.forEach(book => {
    const bookContainer = document.createElement('div');
    bookContainer.className = "book-container";

    bookScript.appendChild(bookContainer);
  })
}



















// Created a variable to grab my form
// const form = document.querySelector('#Toolbar');
// form.addEventListener("submit", (e) => {  
//   e.preventDefault();
//   const inputValue = document.querySelector('#search').value; // ON my HTML document grag my input ID
//   document.querySelector('#search').value = "Title";
//   getBook(inputValue)
// }); 

// let resultDiv = document.querySelector('#Toolbar');
// function displayResults(e) {
//   let results = e.map((data) => {
//     const image = document.createElement('img');
//     image.setAttribute('src, data.')
//   })
// } 
