import { configureStore } from '@reduxjs/toolkit';
import itemsNumberReducer from './itemsNumber/itemsNumberSlice';
import searchTermReducer from './searchTerm/searchTermslice';

export const store = configureStore({
  reducer: {
    itemsNumber: itemsNumberReducer,
    searchTerm: searchTermReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
