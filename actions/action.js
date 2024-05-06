// Async Action Creator
export const fetchWeatherData = (cityName) => {
  
  return async (dispatch) => {
    dispatch(fetchWeatherRequest());
    try {
      const apiKey = '281a2c6bad4d09515b929ae2c5dc15be';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
      
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      // Extract specific weather metrics
      const temperature = extractTemperature(data);
      const humidity = extractHumidity(data);
      const pressure = extractPressure(data);

      // Dispatch success action with extracted data
      dispatch(fetchWeatherSuccess({ temperature, humidity, pressure }));
    } catch (error) {
      dispatch(fetchWeatherFailure(error.message));
    }
  };
};

// Helper functions to extract specific weather metrics
const extractTemperature = (data) => {
  // Extract temperature from data (example, you may need to convert units or access nested objects based on the API response structure)
  return data.main.temp;
};

const extractHumidity = (data) => {
  // Extract humidity from data
  return data.main.humidity;
};

const extractPressure = (data) => {
  // Extract pressure from data
  return data.main.pressure;
};
