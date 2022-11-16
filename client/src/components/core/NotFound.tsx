import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

const NotFound = () => {
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h4">Page not found</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default NotFound;
