import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import columnReducer from './feature/columnSlice';
import orderReducer from './feature/directionSlice';
import queryReducer from './feature/querySlice';
import { userApi } from './services/userApi';

export const store = configureStore({
  reducer: {
    order: orderReducer,
    column: columnReducer,
    query: queryReducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
