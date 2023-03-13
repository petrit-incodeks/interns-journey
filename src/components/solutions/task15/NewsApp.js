import React, { useEffect, useState } from "react";

function NewsApp() {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState(
    `https://bing-news-search1.p.rapidapi.com/news/search?q=politics&freshness=Day&textFormat=Raw&safeSearch=Off`
  );

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setUrl(
      `https://bing-news-search1.p.rapidapi.com/news/search?q=${searchTerm}&freshness=Day&textFormat=Raw&safeSearch=Off`
    );
    setSearchTerm("");
  }

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "a5a4a937admsh43206b5aeb29189p15126fjsnfe784eb0305e",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setData(response.value))
      .catch((err) => console.error(err));
  }, [url]);

  let arr = [];

  for (let i = 0; i < data.length; i++) {
    arr.push(data[i]);
  }

  return (
    <div className="NewsApp">
      <div className=" NewsApp_nav">
        <h1>Latest News</h1>
        <form className="NewsApp_nav_form" onSubmit={handleSubmit}>
          <input
            className="searchInput"
            type="text"
            placeholder="Search News.."
            name="searchTerm"
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>

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
          <div key={i} className=" news_card">
            <div className=" news_card_img">
              <img
                src={
                  data?.image?.thumbnail?.contentUrl ||
                  "https://www.brightlysoftware.com/sites/default/files/styles/small_hq/public/image/2022-08/TSR-News-Default.png?itok=Drok0IMH"
                }
                alt="articleImage"
              />
            </div>
            <div className=" news_card_body">
              <h5>{data.name.substring(0, 40).concat("...")}</h5>
              <p>{data.description.substring(0, 250).concat("...")}</p>
            </div>
            <div className=" news_card_footer">
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
