import { createSlice } from '@reduxjs/toolkit';

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    items: [],
  },
  reducers: {
    getRestaurants(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const restaurantsActions = restaurantsSlice.actions;

export default restaurantsSlice;
