import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './ReduxReducers.ts';

const store = configureStore({
  reducer: todoReducer,
});

export default store;