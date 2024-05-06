// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import WeatherComponent from './WeatherComponent';
import { fetchWeatherData } from './weatherApi';

function App() {
  const [forecastData, setForecastData] = useState([]);

  onst [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData();
        setForecastData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError(error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  
  return (
    <Provider store={store}>
      <div className="App">
        <WeatherComponent />
      </div>
    </Provider>
  );
}

export default App;

