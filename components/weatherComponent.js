// WeatherComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from './actions/weatherActions';
import WeatherSparkline from './weatherSparkline';

const WeatherComponent = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather.weatherData);
  const humidityData = useSelector(state => state.weather.humidityData);
  const pressureData = useSelector(state => state.weather.pressureData);
  const loading = useSelector(state => state.weather.loading);
  const error = useSelector(state => state.weather.error);

  useEffect(() => {
    dispatch(fetchWeatherData('weather')); // Fetch weather data
    dispatch(fetchWeatherData('humidity')); // Fetch humidity data
    dispatch(fetchWeatherData('pressure')); // Fetch pressure data
  }, [dispatch]);

  if (loading) return <div>Loading forecasts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Weather Forecast</h2>
      <WeatherSparkline weatherData= {weatherData}/>
      
      <h2>Humidity Forecast</h2>
      <WeatherSparkline humidityData = {humidityData}/>
      
      <h2>Pressure Forecast</h2>
      <WeatherSparkline pressureData = {pressureData}/>
    </div>
  );
};

export default WeatherComponent;
