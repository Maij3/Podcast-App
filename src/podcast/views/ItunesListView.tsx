import { Grid } from "@mui/material";
import { podcast } from "../../data";
import { ItunesCard } from "../components";

export const ItunesListView = () => {
  const { entry } = podcast.feed;
  return (
    <Grid container spacing={4}>
      {entry.map((item, key) => {
        const artist = item["im:name"];
        const url_img = item["im:image"];
        const autor = item["im:artist"];
        {
          return (
            <ItunesCard
              artist={artist.label}
              url_img={url_img[2].label}
              autor={autor.label}
              key={`${artist.label} - ${key}`}
            />
          );
        }
      })}
    </Grid>
  );
};
