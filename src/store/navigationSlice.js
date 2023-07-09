import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeGender: 'women',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveGender(state, action) {
      state.activeGender = action.payload;
    },
  },
});

export const { setActiveGender } = navigationSlice.actions;
export default navigationSlice.reducer;