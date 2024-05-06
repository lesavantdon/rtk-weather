import React from 'react';
import { Line } from 'react-chartjs-2';

const WeatherSparkline = ({ weatherData }) => {
  // Extract temperature values for sparkline
  const temperatures = weatherData.map(data => data.temperature);

  // Define chart data
  const data = {
    labels: weatherData.map(data => data.day),
    datasets: [{
      label: 'Temperature',
      data: temperatures,
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      fill: false
    }]
  };

  // Define chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    }
  };

  return (
    <Line data={data} options={options} />
  );
};

export default WeatherSparkline;

