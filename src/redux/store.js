import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './slice';

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});

export default store;
