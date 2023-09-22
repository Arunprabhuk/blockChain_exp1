// Store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Slice'; 
  const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;


