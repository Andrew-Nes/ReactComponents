import { configureStore } from '@reduxjs/toolkit';
import itemsNumberReducer from './itemsNumber/itemsNumberSlice';
import searchTermReducer from './searchTerm/searchTermslice';
import { searchApi } from '../services/apiCalls/apiCalls';

export const store = configureStore({
  reducer: {
    itemsNumber: itemsNumberReducer,
    searchTerm: searchTermReducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
