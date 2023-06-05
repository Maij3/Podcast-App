import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { generateLink } from "../../../helpers";
import { useNavigate } from "react-router-dom";

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
  description = generateLink(description);
  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };
  return (
    <Card sx={{ padding: "10px", marginBottom: "20px" }}>
      <CardMedia
        sx={{ padding: "10px 25px" }}
        component={"img"}
        image={img}
        onClick={onNavigateBack}
      />
      <Box component={"hr"} />
      <CardContent onClick={onNavigateBack}>
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
