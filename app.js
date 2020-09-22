async function getBook() {
  try {
    const reponse = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${alchemist}`)
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}
getBook()