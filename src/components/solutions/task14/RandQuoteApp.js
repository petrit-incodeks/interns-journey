import React, { useState } from "react";

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
function RandQuoteApp() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  async function getQuote() {
    try {
      let response = await fetch(url);
      response = await response.json();

      let rand = Math.floor(Math.random() * response.quotes.length);
      let randomQuote = response.quotes[rand];
      console.log(randomQuote);
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Click To get a random Quote : </h2>
      <button onClick={getQuote}>New Quote</button>
      <h3>
        {quote} <span>{author}</span>
      </h3>
    </div>
  );
}
export default RandQuoteApp;
