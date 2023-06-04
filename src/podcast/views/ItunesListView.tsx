import { Box, Grid } from "@mui/material";
import { ItunesCard, PodcastSearch } from "../components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RootState } from "../../store";
import { filterPodcast } from "../../helpers";
import { useGetPodcastQuery } from "../../store/apis";
import { CheckingAuth } from "../../ui/components/CheckingPodcast";

export const ItunesListView = () => {
  const podcast = useTypedSelector((state: RootState) => state.podcast.podcast);
  const search = useTypedSelector((state: RootState) => state.podcast.search);
  const podcastList = filterPodcast(podcast, search);
  const { isSuccess } = useGetPodcastQuery(100);

  return (
    <Box>
      <PodcastSearch />
      <Grid container spacing={4}>
        {isSuccess ? (
          podcastList.map((item: any, key: any) => {
            const artist = item["im:name"];
            const url_img = item["im:image"];
            const autor = item["im:artist"];
            const id = item.id.attributes;
            {
              return (
                <ItunesCard
                  artist={artist.label}
                  url_img={url_img[2].label}
                  autor={autor.label}
                  id={id["im:id"]}
                  key={key}
                />
              );
            }
          })
        ) : (
          <CheckingAuth />
        )}
      </Grid>
    </Box>
  );
};
