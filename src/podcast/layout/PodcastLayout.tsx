import { Box, Container, Toolbar, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const PodcastLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Container>
        <Typography color={'#27A4F2'} fontWeight={"bold"} variant="h4">Podcaster</Typography>
        <Box component={"hr"} sx={{borderColor:"#f8f8f8"}}></Box>
      </Container>
      <Box component="main">
        <Toolbar />
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};
