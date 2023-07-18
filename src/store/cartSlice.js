import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ORDER_URL } from '../const';

const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

export const sendOrder = createAsyncThunk('cart/sendOrder', async (data) => {
  const url = new URL(ORDER_URL);
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return await res.json();
});

const initialState = {
  status: 'idle',
  cartItems,
  countItems: cartItems.length,
  orderStatus: 'idle',
  order: {}, //данные о заказе
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, color, size, count } = action.payload; //получаем данные

      const item = state.cartItems.find(
        (item) => item.id === id && item.color === color && item.size === size //если они совпадают с уже находящимся в стайте...
      );

      if (item) {
        item.count = count; // ...то изменяем только количество
      } else {
        state.cartItems.push({ id, color, size, count }); // ...иначе добавляем новые данные
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
      state.countItems = state.cartItems.length;
    },
    removeFromCart(state, action) {
      const { id, color, size } = action.payload;

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === id && item.color === color && item.size === size
      );

      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
      state.countItems = state.cartItems.length;
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
      state.countItems = state.cartItems.length;
      state.orderStatus = 'idle';
      state.order = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOrder.pending, (state) => {
        state.orderStatus = 'loading';
        state.order = {};
        state.error = null;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.orderStatus = 'success';
        state.order = action.payload;
        state.error = null;
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.orderStatus = 'failed';
        state.order = {};
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
