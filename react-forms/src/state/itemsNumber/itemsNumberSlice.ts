import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FormDataState {
  value: object;
}

const initialState: FormDataState = {
  value: {},
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData: (state: FormDataState, action: PayloadAction<object>) => {
      state.value = action.payload;
    },
  },
});

export const { setFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
