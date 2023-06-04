import { Box, Container, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export const PodcastLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Container>
        <Link to={"/"} style={{ textDecoration:"none"}}>
          <Typography color={"#27A4F2"} fontWeight={"bold"} variant="h4">
            Podcaster
          </Typography>
        </Link>
        <Box component={"hr"} sx={{ borderColor: "#f8f8f8" }} />
      </Container>
      <Box component="main">
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};
