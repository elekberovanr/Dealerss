import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../redux/reducers/productSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});