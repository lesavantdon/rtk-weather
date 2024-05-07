import React from 'react';
import { useDispatch } from 'react-redux'; // Import the useDispatch hook
import styles from '@/page.module.css';
import SearchForm from '../../components/SearchForm';
import { fetchWeatherData } from '../../actions/weatherActions'; // Import the action creator

export default function Home() {
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const handleSubmit = (city) => {
    console.log('Submitted city:', city);
    dispatch(fetchWeatherData(city)); // Dispatch an action to fetch weather data based on the city
  };

  return (
    <main className={styles.main}>
      <SearchForm onSubmit={handleSubmit} />
    </main>
  );
}
