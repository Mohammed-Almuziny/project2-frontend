import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  FormGroup,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";

export const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      userName: e.target.userName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    axios.post("http://localhost:5000/users/", inputData).catch((err) => {
      if (err) {
        alert(err.response.data);
      }
    });
    navigate("/logIn");
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" mb={2}>
        register
      </Typography>
      <Box sx={{ bgcolor: "background.paper", p: 2 }}>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              fullWidth
              id="userName"
              label="userName"
              placeholder="userName"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              type="email"
              id="email"
              label="email"
              placeholder="Email"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              type="password"
              id="password"
              label="password"
              placeholder="password"
              margin="normal"
              required
            />
          </FormGroup>
          <Typography align="center" my={2}>
            <Button color="primary" variant="contained" type="submit">
              register
            </Button>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};
