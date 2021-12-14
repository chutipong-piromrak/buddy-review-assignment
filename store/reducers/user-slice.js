import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    subscribes: [
      {
        restaurantId: 'test',
        queueId: '1234',
        queue: 1,
      },
    ],
  },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    addSubscribe(state, action) {
      state.subscribes.push(action.payload);
    },
    removeSubscribe(state, action) {
      state.subscribes = state.subscribes.filter((item) => item.queueId != action.payload.queueId);
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
