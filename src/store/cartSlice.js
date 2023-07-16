import { createSlice } from '@reduxjs/toolkit';

const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

const initialState = {
  status: 'idle',
  cartItems,
  countItems: cartItems.length,
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
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
