import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from './navigationSlice'

const rootReducer = combineReducers({
  navigation: navigationReducer,
});

export default rootReducer;
