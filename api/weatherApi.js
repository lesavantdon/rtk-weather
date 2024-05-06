// api/weatherApi.js

import { fetchWeatherSuccess, fetchWeatherFailure } from '../redux/weatherActions';
import { extractTemperature, extractHumidity, extractPressure } from './apiUtils';

const apiKey = '281a2c6bad4d09515b929ae2c5dc15be';
const apiUrl = (cityName) => `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

export const fetchWeatherData = async (cityName, dispatch) => {
  try {
    const response = await fetch(apiUrl(cityName));
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    const temperature = extractTemperature(data);
    const humidity = extractHumidity(data);
    const pressure = extractPressure(data);
    
    dispatch(fetchWeatherSuccess({ temperature, humidity, pressure }));
  } catch (error) {
    dispatch(fetchWeatherFailure(error.message));
  }
};

