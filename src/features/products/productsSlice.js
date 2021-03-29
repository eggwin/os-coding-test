import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productsInCart: [],
  },
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      state.productsInCart.push(action.payload);
    }
  },
});

export const { loadProducts, addToCart } = productsSlice.actions;

export const retrieveProducts = () => dispatch => {
  fetch("https://os-coding-test.s3-us-west-1.amazonaws.com/json/productList.json")
  .then(response => response.json())
  .then(data => { console.log('data', data); dispatch(loadProducts(data))});
}

export const productsList = state => state.products.products;
export const productsInCartList = state => state.products.productsInCart;

export default productsSlice.reducer;
