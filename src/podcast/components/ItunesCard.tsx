import { Grid, Box, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  artist: string;
  url_img: string;
  autor: string;
  key: string;
}

export const ItunesCard: FC<Props> = ({ artist, url_img, autor, key }) => {
  return (
    <Grid key={`${artist} - ${key}`} item xs={6} sm={4}>
      <Box position={`relative`} marginBottom={`15vh`} width={`75%`}>
        <img
          src={url_img}
          alt={url_img}
          width={100}
          height={`130px`}
          style={{
            margin: "auto",
            display: "block",
            borderRadius: "100%",
            width: "50%",
            position: "absolute",
            top: "0%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginTop: "10px",
            boxShadow: "0px 2px 10px 2px #cecece",
            padding: "80px  10px 20px 10px",
          }}
        >
          <Typography variant="h6">{artist}</Typography>
          <Typography>{`Author: ${autor}`}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};
