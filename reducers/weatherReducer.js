import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from '../actions/weatherActions';

const initialState = {
  weatherData: null, // Change from array to object or null
  humidityData: null, // Change from array to object or null
  pressureData: null, // Change from array to object or null
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: action.payload.weatherData,
        humidityData: action.payload.humidityData,
        pressureData: action.payload.pressureData,
        loading: false,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
