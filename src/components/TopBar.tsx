import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const home = { name: "Home", path: "/" };
const products = { name: "Products", path: "/products" };
const pages = [products];

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link
              sx={{
                color: "white",
                textDecoration: "none",
                padding: "5px 20px",
                fontSize: 30,
              }}
              component={RouterLink}
              to={home.path}
              key={home.name}
              onClick={handleCloseNavMenu}
            >
              {home.name}
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link
                    component={RouterLink}
                    to={page.path}
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      padding: "5px 20px",
                      fontSize: 18,
                    }}
                  >
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link
              sx={{
                color: "white",
                textDecoration: "none",
                padding: "5px 20px",
                fontSize: 18,
              }}
              component={RouterLink}
              to={home.path}
              key={home.name}
              onClick={handleCloseNavMenu}
            >
              {home.name}
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                sx={{
                  color: "white",
                  textDecoration: "none",
                  mr: 2,
                  padding: "5px 20px",
                  fontSize: 18,
                }}
                component={RouterLink}
                to={page.path}
                key={page.name}
                onClick={handleCloseNavMenu}
              >
                {page.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
