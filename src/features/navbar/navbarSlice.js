import { createSlice } from '@reduxjs/toolkit';

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    page: 'products'
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    }
  },
});

export const { setPage } = navbarSlice.actions;

export const page = state => state.navbar.page;

export default navbarSlice.reducer;
