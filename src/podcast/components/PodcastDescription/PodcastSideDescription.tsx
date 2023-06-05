import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { generateLink } from "../../../helpers";

interface Props {
  img: string;
  description: string;
  name: string;
}

export const PodcastSideDescription: FC<Props> = ({
  img,
  description,
  name,
}) => {
  description = generateLink(description)
  return (
    <Card sx={{ padding: "10px"  , marginBottom:"20px"}}>
      <CardMedia sx={{ padding: "10px 25px" }} component={"img"} image={img} />
      <Box component={"hr"} />
      <CardContent>
        <Typography fontWeight={"bold"}>{name}</Typography>
        <Typography fontStyle={"italic"}>{`By: ${name}`}</Typography>
      </CardContent>
      <Box component={"hr"} />
      <CardContent>
        <Typography>
          <Box component={"span"} fontWeight={"bold"}>
            Description:
          </Box>
          <Box component={"br"} />
        </Typography>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </CardContent>
    </Card>
  );
};
