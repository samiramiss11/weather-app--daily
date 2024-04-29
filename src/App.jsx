import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import HourlyForecast from './components/HourlyForecast';
import UnitToggle from './components/UnitToggle';

function App() {
  const [unit, setUnit] = useState('C');
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const toggleUnit = () => {
    setUnit(prevUnit => prevUnit === 'C' ? 'F' : 'C');
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherData(latitude, longitude);
    });
  }, [unit]);

  const fetchWeatherData = async (latitude, longitude) => {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=3a705832ad334d1b962185301242404&days=6&hourly=1&q=${latitude},${longitude}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data); 
      setWeatherData({
        ...data.current,
        location: data.location, 
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset      });
      setForecastData(data.forecast.forecastday);
      // Check if hourly data is available before setting the state
      if (data.forecast.forecastday.length > 0) {
        const firstForecastDay = data.forecast.forecastday[0];
        
          setHourlyData(firstForecastDay.hour);
        } else {
          setHourlyData([]); // If hourly data is empty, set it to an empty array
        }
     
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
    }
  };

  return (
    <div>
    
    <WeatherDisplay weatherData={weatherData} unit={unit} toggleUnit={toggleUnit} />
   {hourlyData.length > 0 && <HourlyForecast hourlyData={hourlyData} unit={unit} />}
    <Forecast fiveDayForecast={forecastData} unit={unit} />
  </div>
);
}

export default App;
