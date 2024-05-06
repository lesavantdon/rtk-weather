// PressureSparkline.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const PressureSparkline = ({ pressureData }) => {
  const pressureValues = pressureData.map(data => data.pressure); // Assuming pressureData is an array of objects with 'pressure' property

  const data = {
    labels: pressureData.map(data => data.day),
    datasets: [{
      label: 'Pressure',
      data: pressureValues,
      borderColor: 'rgba(255, 99, 132, 1)',
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

export default PressureSparkline;
