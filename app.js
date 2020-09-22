async function getBook(userInput) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userInput}`)
    console.log(response)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
getBook()

const form = document.querySelector("#search-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("#search").value;
  document.querySelector("#search").value = "";
  fetchData(inputValue);
})