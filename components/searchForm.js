import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../reducers/weatherReducer';

const SearchForm = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      dispatch(fetchWeather(city.trim()));
      setCity(''); // Clear input after dispatch
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
