import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const GridContainer: React.FunctionComponent = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Box>
  );
};
