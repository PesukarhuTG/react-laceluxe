import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from '../const';

const initialState = {
  status: 'idle',
  goodsList: [],
  error: null,
}

export const fetchGoods = createAsyncThunk(
  'goods/fetchGoods',
  async (gender) => {
    const res = await fetch(`${GOODS_URL}?gender=${gender}`);
    const data = await res.json();
    return data;
  }
)

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = 'success';
        state.goodsList = action.payload;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default goodsSlice.reducer;