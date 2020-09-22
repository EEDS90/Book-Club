async function getBook(userInput) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userInput}`)
    console.log(response)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
getBook()

button.addEventListener('click', async () => {
  let userInput = input.value;
  const response = await
  axios.get(`${BASE_URL}/search/${userInput}`); 
console.log(response.title.results[0]);
getBook(response.title.results[0])
});

const button = document.querySelector('.submit-button')