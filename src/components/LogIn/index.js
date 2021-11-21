import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import "./style.css";

export const LogIn = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userNameOrEmail = event.target.userName.value;
    const password = event.target.password.value;
    let notErr = true;

    let res = await axios
      .get(`http://localhost:5000/users/${userNameOrEmail}/${password}`)
      .catch((err) => {
        if (err) {
          alert(err.response.data);
          notErr = false;
        }
      });

    if (notErr) {
      localStorage.setItem("user", res.data);
      navigate("/");
    }
  };

  return (
    <div className="fromCard">

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="userName"
          label="user Name Or Email"
          placeholder="user Name Or Email"
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
      </form>
    </div>
  );
};
