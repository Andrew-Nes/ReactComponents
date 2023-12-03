import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { yupUncontrolledSchema } from '../../services/yupUncontrolledSchema';
import * as yup from 'yup';

type FormUncontrolledData = yup.InferType<typeof yupUncontrolledSchema>;

interface FormUncontrolledDataState {
  value: FormUncontrolledData;
}

const initialState: FormUncontrolledDataState = {
  value: {
    name: '',
    age: 0,
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    picture: 'any',
    gender: '',
    country: '',
  },
};

const formUncontrolledDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormUncontrolledData: (
      state: FormUncontrolledDataState,
      action: PayloadAction<FormUncontrolledData>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setFormUncontrolledData } = formUncontrolledDataSlice.actions;
export default formUncontrolledDataSlice.reducer;
