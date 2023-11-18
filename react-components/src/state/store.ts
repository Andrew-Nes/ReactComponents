import { configureStore } from '@reduxjs/toolkit';
import itemsNumberReducer from './itemsNumber/itemsNumberSlice';

export const store = configureStore({
  reducer: {
    itemsNumber: itemsNumberReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
