import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchTermState {
  value: string;
}

const getInitialState = () => {
  const storage = window.localStorage.getItem('searchWord');
  return storage ? storage : '';
};

const initialState: SearchTermState = {
  value: getInitialState(),
};

const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    setSearchTerm: (state: SearchTermState, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
