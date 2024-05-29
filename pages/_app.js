import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import WeatherComponent from '../components/weatherComponent';
import SearchForm from '../components/searchForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchForm />
        <WeatherComponent />
      </div>
    </Provider>
  );
}

export default App;
