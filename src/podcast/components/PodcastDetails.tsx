import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { PodcastSideDescription } from "./PodcastDescription";
import { ThemeTable } from "../../ui";
import { useParams } from "react-router-dom";
import { useGetByIdPodcastQuery } from "../../store/apis";
import { CheckingAuth } from "../../ui/components/CheckingPodcast";

export const PodcastDetails = () => {
  const { id } = useParams();
  const { data, isSuccess } = useGetByIdPodcastQuery(id);
  console.log({data})
  return (
    <Box marginTop={"40px"}>
      <Grid container spacing={2} justifyContent={"space-between"}>
        {isSuccess ? (
          data.results.map((item: any, key: any) => {
            const img = data.results[0].artworkUrl600;
            const description = data.results[key].description;
            const name = data.results[0].artistName;
            {
              if (key === 1) {
                return (
                  <React.Fragment key={key}>
                    <Grid item xs={3}>
                      <PodcastSideDescription
                        img={img}
                        description={description}
                        name={name}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Card sx={{ marginBottom: "20px" }}>
                        <CardContent>
                          <Typography fontWeight={"bold"} variant="h4">
                            {isSuccess && `Episodies:${data.resultCount}`}
                          </Typography>
                        </CardContent>
                      </Card>
                      <ThemeTable results={isSuccess && data.results} />
                    </Grid>
                  </React.Fragment>
                );
              }
            }
          })
        ) : (
          <CheckingAuth />
        )}
      </Grid>
    </Box>
  );
};
