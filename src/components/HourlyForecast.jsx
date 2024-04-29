import React from 'react';
import PropTypes from 'prop-types';
import './style/HourlyForecast.css';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiStrongWind, WiHumidity } from 'react-icons/wi';

const convertTemperature = (temperature, unit) => {
  return unit === 'C' ? temperature : (temperature * 9 / 5) + 32;
};

function getWeatherIcon(condition) {
  switch (condition) {
    case 'Sunny':
      return <WiDaySunny />;
    case 'Cloudy':
      return <WiCloudy />;
    case 'Rain':
      return <WiRain />;
    case 'Snow':
      return <WiSnow />;
    default:
      return <WiCloudy />; // Default case, could be adjusted
  }
}

function HourlyForecast({ hourlyData, unit, toggleUnit  }) {
  return (
    
    <div className="hourly-forecast">
      
      <div ></div>
      {hourlyData.map((hour, index) => (
        <div className="hourly-temp" key={index}>
          <p>{hour.time.split(' ')[1]}</p>
          <p>{convertTemperature(hour.temp_c, unit)}°{unit}</p>
          <p>{getWeatherIcon(hour.condition.text)}</p>
          <p><WiStrongWind /> {hour.wind_kph} km/h</p>
          <p><WiHumidity /> {hour.humidity}%</p>
        </div>
        
      ))}
      
    </div>
  );
}
// Define PropTypes for the HourlyForecast component
HourlyForecast.propTypes = {
  hourlyData: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      temp_c: PropTypes.number,
      temp_f: PropTypes.number,
      condition: PropTypes.shape({
        text: PropTypes.string.isRequired
      }).isRequired,
      wind_kph: PropTypes.number,  // Add these as required by your data structure
      humidity: PropTypes.number,
    })
  ),
  unit: PropTypes.string.isRequired,
  
};

export default HourlyForecast;
