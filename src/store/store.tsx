import { configureStore } from "@reduxjs/toolkit";
import { ItunesApi } from "./apis";
import podcastSlice from "./apis/podcastSlice";

export const store = configureStore({
  reducer: {
    [ItunesApi.reducerPath]: ItunesApi.reducer,
    podcast: podcastSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ItunesApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
