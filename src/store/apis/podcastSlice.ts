import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Podcast } from "./interface";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RootState } from "..";

interface PodcastState {
  podcast: Podcast[];
  search: Podcast | string | null;
}

const initialState: PodcastState = {
  podcast: [],
  search: "",
};

export const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    setPodcast: (state: PodcastState, action: PayloadAction<Podcast[]>) => {
      state.podcast = action.payload;
    },
    setSearch: (state: PodcastState, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setPodcast } = podcastSlice.actions;
export default podcastSlice.reducer;

export const useProductSelector = () =>
  useTypedSelector((state: RootState) => state.podcast.podcast);
