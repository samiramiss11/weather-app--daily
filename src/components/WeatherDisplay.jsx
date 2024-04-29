import React from 'react';
import './style/WeatherDisplay.css';
import UnitToggle from './UnitToggle';
import { FaSun, FaWater, FaWind, FaMoon } from 'react-icons/fa';
function WeatherDisplay({ weatherData, unit, toggleUnit  }) {
  const convertTemperature = (temperature, unit) => {
    return unit === 'C' ? temperature : (temperature * 9 / 5) + 32;
  };

  if (!weatherData || !weatherData.condition) {
    return <p>Loading weather data...</p>;
  }

  
  const temperature = convertTemperature(weatherData.temp_c, unit);
  const iconUrl = `https:${weatherData.condition.icon}`;

  return (
    <div className="weather-display">
      <h1 className="location">{weatherData.location.name}</h1>
      <div className="current-temp">{temperature.toFixed(1)}°{unit}</div>
      <img src={iconUrl} alt="Weather Icon" className="weather-icon" />
<p><FaWind /> {weatherData.wind_kph} km/h</p>
<p><FaWater /> {weatherData.humidity}%</p>
<p><FaSun /> {weatherData.sunrise}</p>
<p><FaMoon /> {weatherData.sunset}</p>
      <UnitToggle unit={unit} toggleUnit={toggleUnit} />
      </div>
    
  );

}


export default WeatherDisplay;
