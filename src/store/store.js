import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { setStatusServer } from './statusServerSlice';

const errorMiddleware = (store) => (next) => (action) => {
  //отлавливаем ошибки при нерабочем сервере
  if (action.type.endsWith('/rejected')) {
    store.dispatch(setStatusServer(false));
  }

  if (action.type.endsWith('/fulfilled')) {
    store.dispatch(setStatusServer(true));
  }

  return next(action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorMiddleware),
});

export default store;
