import React from 'react';
import { useSelector } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// Convert Kelvin to Fahrenheit
const kelvinToFahrenheit = (kelvin) => {
  return ((kelvin - 273.15) * 9 / 5) + 32;
};

// Calculate mean of an array of numbers
const calculateMean = (data) => {
  if (data.length === 0) return 0;
  const sum = data.reduce((a, b) => a + b, 0);
  return sum / data.length;
};

const WeatherComponent = () => {
  const { entries, loading, error } = useSelector(state => state.weather);

  // Group entries by city
  const groupedEntries = entries.reduce((acc, entry) => {
    if (!acc[entry.city]) {
      acc[entry.city] = [];
    }
    acc[entry.city].push(entry);
    return acc;
  }, {});

  return (
    <div>
      <hr />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(groupedEntries).map(city => {
            const cityEntries = groupedEntries[city];
            const temperatureData = cityEntries.map(entry => kelvinToFahrenheit(entry.main.temp));
            const pressureData = cityEntries.map(entry => entry.main.pressure);
            const humidityData = cityEntries.map(entry => entry.main.humidity);

            const meanTemperature = calculateMean(temperatureData).toFixed(2);
            const meanPressure = calculateMean(pressureData).toFixed(2);
            const meanHumidity = calculateMean(humidityData).toFixed(2);

            return (
              <React.Fragment key={city}>
                {cityEntries.map((entry, index) => (
                  <tr key={entry.id}>
                    {index === 0 && (
                      <td rowSpan={cityEntries.length + 2}>{city}</td>
                    )}
                    <td>{kelvinToFahrenheit(entry.main.temp).toFixed(2).hide}</td>
                    <td>{entry.main.pressure.hide}</td>
                    <td>{entry.main.humidity.hide}</td>
                  </tr>
                ))}
                <tr key={`${city}-chart`}>
                  <td>
                    <Sparklines data={temperatureData}>
                      <SparklinesLine color="blue" />
                      <SparklinesReferenceLine type="mean" />
                    </Sparklines>
                  </td>
                  <td>
                    <Sparklines data={pressureData}>
                      <SparklinesLine color="green" />
                      <SparklinesReferenceLine type="mean" />
                    </Sparklines>
                  </td>
                  <td>
                    <Sparklines data={humidityData}>
                      <SparklinesLine color="red" />
                      <SparklinesReferenceLine type="mean" />
                    </Sparklines>
                  </td>
                </tr>
                <tr key={`${city}-mean`}>
                  <td>{meanTemperature}</td>
                  <td>{meanPressure}</td>
                  <td>{meanHumidity}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default WeatherComponent;
