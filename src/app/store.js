import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import navbarReducer from '../features/navbar/navbarSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    navbar: navbarReducer,
  },
});
