import React from "react";
// import { Link } from "react-router-dom";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  IconButton,
  Link,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const IsLogIn = ({user, setUser}) => {

  const handleLogOut = () => {
    localStorage.clear()
    setUser()
  }
  // const user = localStorage.getItem("user");
  return user ? (
    <>
    <h1>{user} </h1>
    <Button color="inherit" onClick={handleLogOut}> log out </Button>
    </>
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

export const Header = ({user, setUser}) => {
  // const user = localStorage.getItem("user");
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

            <IsLogIn user={user} setUser={setUser}/>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
