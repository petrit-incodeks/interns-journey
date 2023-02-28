import React, { useEffect, useState } from "react";

function WeatherApp() {
  //   const city = "Ferizaj";
  const key = "768455ddf8164cf48d984030232802";

  const [city, setCity] = useState("ferizaj");
  const [currentWeather, setCurrentWeather] = useState({});

  const [url, setUrl] = useState(
    `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
  );
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setUrl(
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
    );

    setCity("");
  };

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
          icon: response.current.condition.icon,
          text: response.current.condition.text,
        };
        setCurrentWeather(data);
        // console.log(currentWeather);
        // console.log(data.city, ":", data.temperatureOnC, "C");
        // console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    getWeather();
  }, [url]);

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City name"
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <h2>{currentWeather.city}</h2>
      <h3>{currentWeather.temperatureOnC} C</h3>
      <img src={currentWeather.icon} alt=" weather icon" />
      <p> {currentWeather.text}</p>
    </div>
  );
}

export default WeatherApp;
