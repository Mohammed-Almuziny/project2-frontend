import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, FormGroup, TextField, Button } from "@mui/material";
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

            <Button type="submit">sumbit</Button>
          </FormGroup>
        </form>
      </Box>
    </Container>
  );
};
