import { React, useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  FormGroup,
  FormControl,
  FormLabel,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

export const Filter = ({ setQuizzes }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("all category");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeCate = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/quizzes/getQuizzes?title=${title}&category=${category}`
    );
    console.log(result.data);
    if (result.data[0]) setQuizzes(result.data);
    else alert("no result");
  };

  useEffect(() => {
    console.log(title);
  }, [title]);

  return (
    <Box sx={{ bgcolor: "background.paper", mb: 2, p: 2 }}>
      <form onSubmit={handleSearch}>
        <FormGroup>
          <FormControl>
            <FormLabel>search</FormLabel>
            <TextField
              fullWidth
              id="titel"
              label="titel"
              placeholder="titel"
              margin="normal"
              onChange={handleChange}
            />
            <FormLabel>Category</FormLabel>
            <Select
              id="category"
              label="category"
              placeholder="category"
              value={category}
              autoWidth={false}
              required
              onChange={handleChangeCate}
            >
              <MenuItem value={"all category"}> all category</MenuItem>
              <MenuItem value={"General Knowledge"}>General Knowledge</MenuItem>
              <MenuItem value={"film"}>Film</MenuItem>
              <MenuItem value={"Thirty"}>Thirty</MenuItem>
            </Select>
            <Button type="submit">submit</Button>
          </FormControl>
        </FormGroup>
      </form>
    </Box>
  );
};