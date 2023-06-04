import { Card, CardContent, Typography } from "@mui/material";
import { ThemeTable } from "../../../ui/components";

export const PodcastTableDescription = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography fontWeight={"bold"} variant="h4">
            Episodies 66
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <ThemeTable results={[]} />
        </CardContent>
      </Card>
    </>
  );
};
