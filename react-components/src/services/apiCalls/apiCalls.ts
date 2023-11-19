import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  DetailedData,
  DetailedResponse,
  SearchResponse,
  SearchResponseData,
} from '../../types/types';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://yts.mx/api/v2/' }),
  endpoints: (builder) => ({
    getList: builder.query<SearchResponseData, string>({
      query: (parameters: string) => `list_movies.json?${parameters}`,
      transformResponse: (response: SearchResponse) => response.data,
    }),
    getDetails: builder.query<DetailedData, string>({
      query: (id: string) => `movie_details.json?movie_id=${id}`,
      transformResponse: (response: DetailedResponse) => response.data,
    }),
  }),
});

export const { useGetListQuery, useGetDetailsQuery } = searchApi;
