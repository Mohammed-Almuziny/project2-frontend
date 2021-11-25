import React from "react";
import axios from "axios";
import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
} from "@mui/material";

export const Setting = ({ user }) => {
  const handelDelete = async (e) => {
    e.preventDefault();
    if (e.target.newPasword.value === e.target.checkNewPasword.value) {
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}/users/changepassword`,
        { userName: user, newPassword: e.target.newPasword.value }
      );
    } else alert("not equal");
  };

  return (
    <Container>
      <Typography> setting</Typography>
      <form onSubmit={handelDelete}>
        <Paper>
          <Box p={2}>
            <FormGroup>
              <FormControl>
                <FormLabel>change password</FormLabel>
                <TextField
                  fullWidth
                  type="password"
                  id="newPasword"
                  label="newPasword"
                  placeholder="new pasword"
                  margin="normal"
                  required
                >
                  {" "}
                  new password
                </TextField>

                <TextField
                  fullWidth
                  type="password"
                  id="checkNewPasword"
                  label="check new pasword"
                  placeholder="ckeck new pasword"
                  margin="normal"
                  required
                >
                  {" "}
                  new password
                </TextField>
                <Button type="submit"> change</Button>
              </FormControl>
            </FormGroup>
          </Box>
        </Paper>
      </form>
    </Container>
  );
};
