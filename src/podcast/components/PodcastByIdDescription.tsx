import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { generateLink } from "../../helpers";

interface Props {
  audio: string;
  description: string;
  name: string;
}

export const PodcastByIdDescription: FC<Props> = ({
  audio,
  description,
  name,
}) => {
  description = generateLink(description);
  return (
    <Card sx={{ marginBottom: "20px" }}>
      <CardContent>
        <Typography variant="h4">{name}</Typography>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        <audio src={audio} controls style={{ width: "100%" }}></audio>
      </CardContent>
    </Card>
  );
};
