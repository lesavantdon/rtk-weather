// rootReducer.js
import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import anotherReducer from './anotherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  another: anotherReducer,  
});

export default rootReducer;
