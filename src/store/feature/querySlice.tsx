import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface QueryState {
  value: string;
}

const initialState: QueryState = {
  value: '',
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQueryValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    clearQueryValue: (state) => {
      state.value = '';
    },
  },
});

export const { setQueryValue, clearQueryValue } = querySlice.actions;

export const selectQuery = (state: RootState) => state.query.value;

export default querySlice.reducer;
