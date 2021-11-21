import React from "react";
// import { Link } from "react-router-dom";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  IconButton,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  return (
    <header className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Link color="inherit" underline="none" href="/quizzes">
              quizzes
            </Link>

            <Typography sx={{ flexGrow: 1 }}></Typography>

            <Link color="inherit" underline="none" href="/signOn" ml={2}>
              Sign On
            </Link>

            <Link color="inherit" underline="none" href="/logIn" ml={2}>
              Log in
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
