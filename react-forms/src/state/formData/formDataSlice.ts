import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { yupUncontrolledSchema } from '../../services/yupUncontrolledSchema';
import * as yup from 'yup';

type FormData = yup.InferType<typeof yupUncontrolledSchema>;
interface FormDataState {
  value: FormData;
}

const initialState: FormDataState = {
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

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData: (state: FormDataState, action: PayloadAction<FormData>) => {
      state.value = action.payload;
    },
  },
});

export const { setFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
