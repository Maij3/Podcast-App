import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetByIdPodcastQuery } from "../../store/apis";
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RootState } from "../../store";
import { filterPodcastById } from "../../helpers/filterPodcastById";
import { Box, Grid } from "@mui/material";
import { PodcastSideDescription } from "./PodcastDescription";
import { PodcastByIdDescription } from "./PodcastByIdDescription";

export const PodcastById = () => {
  const { id, episodeId } = useParams();
  const { data, isSuccess } = useGetByIdPodcastQuery(id);
  useEffect(() => {
    setpodcastById(isSuccess && data.results);
  }, [data, isSuccess]);
  const { setpodcastById } = useActions();

  const podcastById = useTypedSelector(
    (state: RootState) => state.podcast.podcastById
  );
  const filterById = filterPodcastById(podcastById, episodeId);
  console.log(filterById);
  return (
    <Box marginTop={"40px"}>
      <Grid container spacing={2} justifyContent={"space-between"}>
        {filterById.map((item: any, key: any) => {
          const img = item.artworkUrl600;
          const audio = item.episodeUrl;
          const description = item.description;
          const name = item.trackName;
          return (
            <React.Fragment key={`${key}-${name}`}>
              <Grid item xs={12} md={3} >
                <PodcastSideDescription
                  img={img}
                  description={description}
                  name={name}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <PodcastByIdDescription
                  audio={audio}
                  description={description}
                  name={name}
                />
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
    </Box>
  );
};
