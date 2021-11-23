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

const IsLogIn = () => {
  const user = localStorage.getItem("user");
  return user ? (
    <h1>{user} </h1>
  ) : (
    <>
      <Link color="inherit" underline="none" href="/signUp" ml={2}>
        Sign Up
      </Link>

      <Link color="inherit" underline="none" href="/logIn" ml={2}>
        Log in
      </Link>
    </>
  );
};

export const Header = () => {
  const user = localStorage.getItem("user");
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

            <Link color="inherit" underline="none" href="/quizzes" mr={2}>
              quizzes
            </Link>

            <Link color="inherit" underline="none" href="/history">
              your history
            </Link>

            <Typography sx={{ flexGrow: 1 }}></Typography>

            <IsLogIn />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
