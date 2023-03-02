import React, { useState } from "react";
const quotes = [
  "Life isn’t about getting and having, it’s about giving and being.",
  "Whatever the mind of man can conceive and believe, it can achieve.",
  "If you do what you’ve always done, you’ll get what you’ve always gotten.",
  "You may be disappointed if you fail, but you are doomed if you don’t try.",
  "If you do what you’ve always done, you’ll get what you’ve always gotten.",
];
function RandQuoteApp() {
  const [quote, setQuote] = useState("");
  function getQuote() {
    let randQuote = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randQuote];
    setQuote(randomQuote);
  }
  return (
    <div>
      <h2>Click To get a random Quote : </h2>
      <button onClick={getQuote}>New Quote</button>
      <h3>{quote}</h3>
    </div>
  );
}
export default RandQuoteApp;
