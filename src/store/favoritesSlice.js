import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorite(state, action) {
      const id = action.payload.id;

      if (!state.includes(id)) {
        state.push(id);
      }
    },
    removeFromFavorite(state, action) {
      const id = action.payload.id;
      const index = state.indexOf(id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
