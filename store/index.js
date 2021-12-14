import { configureStore } from '@reduxjs/toolkit';

import restaurantsSlice from './reducers/restaurants-slice';
import userSlice from './reducers/user-slice';
import uiSlice from './reducers/ui-slice';

const store = configureStore({
  reducer: { user: userSlice.reducer, ui: uiSlice.reducer, restaurants: restaurantsSlice.reducer },
});

export default store;
