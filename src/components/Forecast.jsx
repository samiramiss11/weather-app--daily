import React from 'react';
import './style/Forecast.css';
// Define the function to convert temperatures at the top of the file
const convertTemperature = (temperature, unit) => {
  return unit === 'C' ? temperature : (temperature * 9 / 5) + 32;
};

function Forecast({ fiveDayForecast, unit }) {
  return (
    <div className="forecast-container">
      <h2>6-Day Forecast</h2>
      <div className="forecast-items">
      {fiveDayForecast.map((day, index) => {
        // Use the function to convert temperature
        const iconUrl = day.day.condition.icon;
        
        const avgTemp = unit === 'C' ? day.day.avgtemp_c : (day.day.avgtemp_f - 32) * 5 / 9;
        return (
          <div key={index} className="forecast-day">
            <p>{day.date}</p>
            <p>{avgTemp.toFixed(1)}°{unit}</p>
            <img src={iconUrl} alt={day.day.condition.text} className="weather-icons" />

          </div>
        );
      })}
    </div>
    </div>
  );
}

export default Forecast;
