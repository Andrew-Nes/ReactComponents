import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './formData/formDataSlice';
import countriesReducer from './countries/countriesSice';

export const store = configureStore({
  reducer: {
    FormData: formDataReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
