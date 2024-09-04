import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SortOrder } from '../../types/filtered-params';
import type { RootState } from '../store';

interface SortState {
  value: SortOrder;
}

const initialState: SortState = {
  value: 'none',
};

export const directionSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setSortOrder: (state, action: PayloadAction<SortOrder>) => {
      state.value = action.payload;
    },
    clearSortOrder: (state) => {
      state.value = 'none';
    },
  },
});

export const { setSortOrder, clearSortOrder } = directionSlice.actions;

export const selectOrder = (state: RootState) => state.order.value;

export default directionSlice.reducer;
