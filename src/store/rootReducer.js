import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from './navSlice'

const rootReducer = combineReducers({
  navigation: navigationReducer,
});

export default rootReducer;
