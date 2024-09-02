import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../../types/user';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], string>({
      query: (endpoint) => `${endpoint}`,
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
