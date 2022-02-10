import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

export const HomePage: React.FunctionComponent = () => {
  return (
    <div>
      <Typography variant="h2" noWrap>
        React + MUI template
      </Typography>
      <Typography
        sx={{ fontSize: 16, fontStyle: "italic" }}
        color="text.secondary"
      >
        By leo.polymath
      </Typography>
      <Box paddingBottom={5} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
        }}
      >
        <Card
          sx={{
            borderRadius: 6,
            border: "grey solid 1px",
            width: "400px",
          }}
        >
          <CardContent sx={{ textAlign: "center", margin: "0 auto" }}>
            <Link
              sx={{ color: "white", textDecoration: "none", fontSize: 22 }}
              component={RouterLink}
              to="/products"
            >
              Products
            </Link>
          </CardContent>
        </Card>
        <Box paddingBottom={5} />
        <Card
          sx={{ borderRadius: 6, border: "grey solid 1px", width: "400px" }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Link
              sx={{ color: "white", textDecoration: "none", fontSize: 22 }}
              component={RouterLink}
              to="/links-to-other-place"
            >
              Links to other place
            </Link>
          </CardContent>
        </Card>

        <Box paddingBottom={5} />
      </Box>
    </div>
  );
};
