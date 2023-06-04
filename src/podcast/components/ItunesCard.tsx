import { Grid, Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  artist: string;
  url_img: string;
  autor: string;
  id: string;
}

export const ItunesCard: FC<Props> = ({ artist, url_img, autor, id }) => {
  return (
    <Grid key={artist} item xs={12} sm={4} lg={3}>
      <Link to={`/podcast/${id}`} style={{ width: "100%" , textDecoration:"none" , color: "unset"}}>
        <Box
          position={`relative`}
          margin={"auto"}
          marginBottom={`15vh`}
          width={`100%`}
        >
          <img
            src={url_img}
            alt={url_img}
            width={100}
            className="itunes-list-img"
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
      </Link>
    </Grid>
  );
};
