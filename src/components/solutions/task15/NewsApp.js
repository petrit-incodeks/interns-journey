import React, { useState } from "react";

function NewsApp() {
  const [state, setState] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "aac0c4e556msh8fcce3953d23e23p1bd9e3jsn772b0285dd9c",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  fetch(
    "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  // let rand = Math.floor(Math.random() * response.value.length);
  //       // let randArticle = response.value[rand].image.thumbnail.contentUrl;
  //       // let randArticleTitle = response.value[rand].name;
  //       // let randArticleData = response.value[rand].description;
  //       // setState(randArticle);
  //       // setTitle(randArticleTitle);
  //       // setDesc(randArticleData);

  return (
    <div>
      <h1>Latest News</h1>
      <button>incodeks</button>

      <article>
        <h3>{title}</h3>
        <img src={state} alt="articlepic" />
        <p>{desc}</p>
      </article>
      <article>
        <h3>Article 2</h3>
      </article>
      <article>
        <h3>Article 3</h3>
      </article>
    </div>
  );
}
export default NewsApp;
