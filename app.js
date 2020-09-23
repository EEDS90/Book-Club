async function getBook(userInput) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userInput}`)
    console.log(response.data.items[0].searchInfo)
    const data= response.data.items[0].searchInfo
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
getBook()

// Created a variable to grab my form
const form = document.querySelector('#Toolbar');
form.addEventListener("submit", (e) => {  
  e.preventDefault();
  const inputValue = document.querySelector('#search').value; // ON my HTML document grag my input ID
  document.querySelector('#search').value = "Title";
  getBook(inputValue)
}); 

let resultDiv = document.querySelector('#Toolbar');
function displayResults(e) {
  let results = e.map((data) => {
    const image = document.createElement('img');
    image.setAttribute('src, data.')
  })
} 
