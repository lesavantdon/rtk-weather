// HumiditySparkline.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const HumiditySparkline = ({ humidityData }) => {
  const humidityValues = humidityData.map(data => data.humidity); 
  const labels = humidityData.map(data => data.day);


  const data = {
    labels: humidityData.map(data => data.day),
    datasets: [{
      label: 'Humidity',
      data: humidityValues,
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      fill: false
    }]
  };

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

export default HumiditySparkline;
