import { createSlice } from '@reduxjs/toolkit';

interface ItemsNumberState {
  value: number;
}

const initialState: ItemsNumberState = {
  value: 20,
};

const itemsNumberSlice = createSlice({
  name: 'itemsNumber',
  initialState,
  reducers: {
    setItemsNumber: (state: ItemsNumberState, action) => {
      state.value = action.payload;
    },
  },
});

export const { setItemsNumber } = itemsNumberSlice.actions;
export default itemsNumberSlice.reducer;
