import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ItunesApi = createApi({
  reducerPath: "itunes",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://itunes.apple.com",
  }),  
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getPodcast: builder.query({
      query: (limit) => `/us/rss/toppodcasts/limit=${limit}/genre=1310/json`,
      transformResponse: (response: any) => {
        return response.feed.entry;
      },
    }),
    getByIdPodcast: builder.query({
      query: (id) =>
        `/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20&time=${new Date()}`,
    }),
  }),
});

export const { useGetPodcastQuery, useGetByIdPodcastQuery } = ItunesApi;
