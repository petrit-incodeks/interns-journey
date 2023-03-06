import React, { useState } from "react";

function RandQuoteApp() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  function getQuote() {
    return new Promise((resolve, reject) => {
      fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
        .then((response) => response.json())
        .then((response) => {
          let rand = Math.floor(Math.random() * response.quotes.length);
          let randomQuote = response.quotes[rand];
          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  return (
    <div className="RandomQuote">
      <div className="RandomQuote-header">
        <h2>Click To get a random Quote </h2>
        <button className="RandomQuote-header-button" onClick={getQuote}>
          New Quote
        </button>
      </div>
      <h3 className="RandomQuote-h3">
        {quote} <sub> ~{author}</sub>
      </h3>
    </div>
  );
}
export default RandQuoteApp;
