import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from './navSlice';
import colorReducer from './colorSlice';
import goodsReducer from './goodSlice';
import productReducer from './productSlice';
import favoritesReducer from './favoritesSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorReducer,
  goods: goodsReducer,
  product: productReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
});

export default rootReducer;
