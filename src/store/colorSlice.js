import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { COLORS_URL } from '../const';

const initialState = {
  status: 'idle',
  colorList: [],
  error: null,
};

export const fetchColors = createAsyncThunk(
  'color/fetchColors',
  async () => {
  const res = await fetch(COLORS_URL);
  const data = await res.json();
  return data;
});

const colorSlice = createSlice({
  name: 'color',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchColors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.status = 'success';
        state.colorList = action.payload;
      })
      .addCase(fetchColors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default colorSlice.reducer;
