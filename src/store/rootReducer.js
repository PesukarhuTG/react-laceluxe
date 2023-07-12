import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from './navSlice';
import colorReducer from './colorSlice';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorReducer,
});

export default rootReducer;
