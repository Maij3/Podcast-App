import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "white", padding: 4 }}
    >
      <Grid item  >
        <CircularProgress color='warning' />
      </Grid>
    </Grid>
  );
};