import { configureStore } from '@reduxjs/toolkit';
import paginatedBadgeReducer from '../reducer/PaginatedBadgeSlice';

const store = configureStore({
  reducer: {
    paginatedBadge: paginatedBadgeReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
