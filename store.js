import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import rootReducer from './reducers/weatherReducer'; 
import { clear } from 'console';

const store = configureStore({
  reducer: rootReducer, // Pass the root reducer directly
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add thunk middleware
});

export default store;

