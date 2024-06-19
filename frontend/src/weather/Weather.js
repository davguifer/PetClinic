import React, { useState } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState([
    { day: "Sunday", temperature: 27.5, condition: "Cloudy", humidity: 70, windSpeed: 15, feelsLike: 26 },
    { day: "Monday", temperature: 25.5, condition: "Sunny", humidity: 30, windSpeed: 10, feelsLike: 24 },
    { day: "Tuesday", temperature: 22.8, condition: "Cloudy", humidity: 75, windSpeed: 12, feelsLike: 21 },
    { day: "Wednesday", temperature: 20.3, condition: "Rainy", humidity: 80, windSpeed: 20, feelsLike: 19 },
    { day: "Thursday", temperature: 23.6, condition: "Cloudy", humidity: 65, windSpeed: 18, feelsLike: 22 },
    { day: "Friday", temperature: 26.7, condition: "Sunny", humidity: 28, windSpeed: 8, feelsLike: 25 },
    { day: "Saturday", temperature: 28.2, condition: "Sunny", humidity: 22, windSpeed: 14, feelsLike: 27 },
  ]);

  const [index, setIndex] = useState(new Date().getDay());

  const weatherContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px"
  };

  const cardStyles = {
    backgroundColor: "#E0E5EC", 
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "30px", 
    padding: "10px",
    width: "300px", 
    margin: "auto", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imageStyles = {
    width: "50px",
    height: "auto",
    marginRight: "10px",
  };

  const cardTextStyle = {
    marginBottom: "5px",
  };

  const imageContainerStyles = {
    textAlign: "center"
  };

  const handleNextDay = () => {
    setIndex(prevIndex => {
      if (prevIndex < weatherData.length - 1) {
        return prevIndex + 1;
      } else {
        return 0; 
      }
    });
  };

  return (
    <div className="weather-container" style={weatherContainerStyles}>
      <h2 style={{ marginBottom: "40px" }}>Weather Forecast for {weatherData[index].day} </h2> {/* Añadimos margen inferior */}
      <div style={cardStyles} key={weatherData[index].day}>
        <h3>{weatherData[index].day}</h3>
        <div style={imageContainerStyles}>
          {weatherData[index].condition === "Sunny" && <img src="../../sunny.png" alt="Sunny" style={imageStyles} />}
          {weatherData[index].condition === "Rainy" && <img src="../../rainy.png" alt="Rainy" style={imageStyles} />}
          {weatherData[index].condition === "Cloudy" && <img src="../../cloudy.png" alt="Cloudy" style={imageStyles} />}
        </div>
        <p style={cardTextStyle}>{weatherData[index].condition}</p>
        <p style={cardTextStyle}>Temperature: {weatherData[index].temperature}°C</p>
        <p style={cardTextStyle}>Feels Like: {weatherData[index].feelsLike}°C</p>
        <p style={cardTextStyle}>Wind Speed: {weatherData[index].windSpeed} km/h</p>
        <p style={cardTextStyle}>Humidity: {weatherData[index].humidity}%</p>
      </div>
      <button onClick={handleNextDay} style={{ marginTop: "40px", padding: "5px 10px", backgroundColor: "#4682B4", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Next Day</button>
    </div>
  );
}
