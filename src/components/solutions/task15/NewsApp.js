import React, { useEffect, useState } from "react";

function NewsApp() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "a5a4a937admsh43206b5aeb29189p15126fjsnfe784eb0305e",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    fetch(
      "https://bing-news-search1.p.rapidapi.com/news/search?q=%3CREQUIRED%3E&freshness=Day&textFormat=Raw&safeSearch=Off",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.value))
      .catch((err) => console.error(err));
  }, []);

  let arr = [];

  for (let i = 0; i < data.length; i++) {
    arr.push(data[i]);
  }
  // console.log(arr);
  // // console.log(arr[0].image.thumbnail.contentUrl);
  // arr.map((data) => {
  //   console.log(data.image);
  //   // console.log(data.image.thumbnail.contentUrl);
  // });
  // console.log(arr[0].image.thumbnail.contentUrl);
  return (
    <div className="NewsApp">
      <div className="NewsApp_nav">
        <h1>Latest News</h1>
        <button>incodeks</button>
      </div>
      <div className="container">
        <div className="row news_container">
          {arr.map((data, i) => (
            <div key={i} className="col-lg-3 news_card">
              <div className="col-lg-12 news_card_img">
                <img
                  src={`${data.image.thumbnail.contentUrl}`}
                  alt="articleImage"
                />
              </div>
              <div className="col-lg-12 news_card_body">
                <h5>{data.name}</h5>
                <p>{data.description}</p>
              </div>
              <div className="col-lg-12 news_card_footer">
                <small>{data.datePublished}</small>
                <small>{data.datePublished}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default NewsApp;
