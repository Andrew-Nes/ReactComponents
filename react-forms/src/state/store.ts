import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './formData/formDataSlice';
import countriesReducer from './countries/countriesSice';
import formUncontrolledDataReducer from './formUncontrolledData/formUncontrolledDataSlice';

export const store = configureStore({
  reducer: {
    FormData: formDataReducer,
    countries: countriesReducer,
    FormUncontrolledData: formUncontrolledDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
