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
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";

const IsLogIn = ({ user, setUser }) => {
  const handleLogOut = () => {
    localStorage.clear();
    setUser();
  };
  // const user = localStorage.getItem("user");
  return user ? (
    <>
      <h1>{user} </h1>

      <Link color="inherit" underline="none" href="/setting" mr={2}>
        <IconButton color="inherit">
          <SettingsApplicationsRoundedIcon />
        </IconButton>
      </Link>

      <Button color="inherit" onClick={handleLogOut}>
        log out
      </Button>
    </>
  ) : (
    <>
      <Link color="inherit" underline="none" href="/register" ml={2}>
        Register
      </Link>

      <Link color="inherit" underline="none" href="/logIn" ml={2}>
        Log in
      </Link>
    </>
  );
};

export const Header = ({ user, setUser }) => {
  // const user = localStorage.getItem("user");
  return (
    <header className="App">
      <Box sx={{ flexGrow: 1, pb: 4 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" mr={2}>
              QUIZSITE
            </Typography>

            <Link color="inherit" underline="none" href="/" mr={2}>
              home
            </Link>

            <Link color="inherit" underline="none" href="/history" mr={2}>
              your history
            </Link>

            <Link color="inherit" underline="none" href="/create">
              ctreate
            </Link>

            <Typography sx={{ flexGrow: 1 }}></Typography>

            <IsLogIn user={user} setUser={setUser} />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
