import React, { useEffect, useState } from "react";

function WeatherApp() {
  const city = "Ferizaj";
  const key = "768455ddf8164cf48d984030232802";

  //   const [currentWeather, setCurrentWeather] = useState({});

  const [url, setUrl] = useState(
    `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
  );

  useEffect(() => {
    const getWeather = async () => {
      try {
        let response = await fetch(url);
        response = await response.json();
        let data = {
          city: response.location.name,
          country: response.location.country,
          temperatureOnC: response.current.temp_c,
          temperatureOnF: response.current.temp_f,
        };
        console.log(data.city);
        // console.log(response);
      } catch (e) {
        alert(e);
      }
    };
    getWeather();
  }, [url]);

  const handleClick = () => {};
  return (
    <div>
      <h1>Weather for :{city}</h1>

      <input type="text" placeholder="Enter City name" />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default WeatherApp;
