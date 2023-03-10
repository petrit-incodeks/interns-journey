import React, { useEffect, useState } from "react";

function NewsApp() {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
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

  return (
    <div className="NewsApp">
      <div className=" NewsApp_nav">
        <h1>Latest News</h1>
        <button
          onClick={() => {
            window.location.href = "https://incodeks.com/";
            setIsClicked(!isClicked);
          }}
        >
          {isClicked ? "Loading..." : "Incodeks >"}
        </button>
      </div>

      <div className=" news_container">
        {arr.map((data, i) => (
          <div key={i} className="col-lg-3 col-md-4 col-xs-12 news_card">
            <div className="col news_card_img">
              <img
                src={`${data.image.thumbnail.contentUrl}`}
                alt="articleImage"
              />
            </div>
            <div className="col news_card_body">
              <h5>{data.name.substring(0, 40).concat("...")}</h5>
              <p>{data.description.substring(0, 250).concat("...")}</p>
            </div>
            <div className="col news_card_footer">
              <small>
                {new Date(data.datePublished).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </small>
              <small>{data._type}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default NewsApp;
