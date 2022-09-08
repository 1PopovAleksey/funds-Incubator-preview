import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/index';

interface PaginatedBadgeState {
  value: number;
}

const initialState: PaginatedBadgeState = {
  value: 10
};

export const PaginatedBadgeSlice = createSlice({
  name: 'Paginated',
  initialState,
  reducers: {
    badgeSwitching: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    }
  }
});

export const { badgeSwitching } = PaginatedBadgeSlice.actions;
export const selectCount = (state: RootState) => state.paginatedBadge.value;

export default PaginatedBadgeSlice.reducer;
