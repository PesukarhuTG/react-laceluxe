import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openSearch: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    toggleSearch(state) {
      state.openSearch = !state.openSearch;
    },
  },
});

export const { toggleSearch } = searchSlice.actions;
export default searchSlice.reducer;
