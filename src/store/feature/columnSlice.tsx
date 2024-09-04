import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SortField } from '../../types/filtered-params';
import type { RootState } from '../store';

interface ColumnState {
  value: SortField;
}

const initialState: ColumnState = {
  value: 'none',
};

export const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    setColumnValue: (state, action: PayloadAction<SortField>) => {
      state.value = action.payload;
    },
    clearColumnValue: (state) => {
      state.value = 'none';
    },
  },
});

export const { setColumnValue, clearColumnValue } = columnSlice.actions;

export const selectColumn = (state: RootState) => state.column.value;

export default columnSlice.reducer;
