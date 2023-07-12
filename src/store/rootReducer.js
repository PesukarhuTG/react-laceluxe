import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from './navSlice';
import colorReducer from './colorSlice';
import goodsReducer from './goodSlice';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorReducer,
  goods: goodsReducer,
});

export default rootReducer;
