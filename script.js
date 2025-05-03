const newQuoteBtn = document.getElementById("new-quote");
const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const tweetQuote = document.getElementById("tweet-quote");
const colorRoot = document.querySelector(":root")


const quotesList = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const getRandomNumber = (value, startValue = 0) => {
  return Math.floor((Math.random() * value) + startValue)
}

const fetchData = async () => {
  try {
    const res = await fetch(quotesList);
    const data = await res.json();
    const dataQuote = data.quotes[getRandomNumber(data.quotes.length)]
    setTwitterBtn(dataQuote.quote, dataQuote.author);
    quoteText.innerText = dataQuote.quote;
    quoteAuthor.innerText = dataQuote.author;
  } catch (err) {
    console.log(err)
    alert("Server not found");
  }
}

const setTwitterBtn = (quote, author) => {
  const linkValue = ` https://twitter.com/intent/tweet?hashtags=quotes&related=&text="${quote}" ~ ${author}`
  tweetQuote.setAttribute("href", linkValue)
}

const changeColorBackground = () => {
  const color = `rgb(${getRandomNumber(110, 50)}, ${getRandomNumber(110, 50)}, ${getRandomNumber(110, 50)})`
  colorRoot.style.setProperty("--background-color", color)
}

fetchData();
changeColorBackground();

newQuoteBtn.addEventListener("click", () => {
  getRandomNumber();
  fetchData();
  changeColorBackground();
})

