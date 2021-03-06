import { React, useEffect } from "react";
import {
  Box,
  FormGroup,
  FormControl,
  FormLabel,
  TextField,
  FormControlLabel,
} from "@mui/material";

export const CreateQuestion = ({ questions, setQuestions, i }) => {
  const handleChange = (e) => {
    let newArr = questions;
    console.log(e.target.value);

    if (e.target.id === "question") newArr[i].question = e.target.value;
    if (e.target.id === "answer1")
      newArr[i].answers.splice(0, 1, e.target.value);
    if (e.target.id === "answer2")
      newArr[i].answers.splice(1, 1, e.target.value);
    if (e.target.id === "answer3")
      newArr[i].answers.splice(2, 1, e.target.value);
    if (e.target.id === "answer4")
      newArr[i].answers.splice(3, 1, e.target.value);
    if (e.target.id === "correctAnswer")
      newArr[i].correctAnswer = e.target.value;

    console.log(newArr);
    setQuestions(newArr);
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);
  return (
    <Box p={2} sx={{ bgcolor: "background.paper", mb: 2 }}>
      <FormGroup onSubmit={() => console.log("sum")}>
        <FormControl>
          <FormLabel> question {i + 1} </FormLabel>

          <TextField
            fullWidth
            id="question"
            label="question"
            placeholder="question"
            margin="normal"
            required
            onChange={handleChange}
          />
        </FormControl>

        <FormGroup row sx={{ justifyContent: "space-between" }}>
          <TextField
            id="answer1"
            label="answer 1"
            placeholder="answer1"
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            id="answer2"
            label="answer 2"
            placeholder="answer 2"
            margin="normal"
            required
            onChange={handleChange}
          />

          <TextField
            id="answer3"
            label="answer 3"
            placeholder="answer 3"
            margin="normal"
            required
            onChange={handleChange}
          />

          <TextField
            id="answer4"
            label="answer 4"
            placeholder="answer 4"
            margin="normal"
            required
            onChange={handleChange}
          />
        </FormGroup>

        <TextField
          id="correctAnswer"
          label="correct Answer"
          placeholder="correct Answer"
          margin="normal"
          fullWidth={false}
          required
          onChange={handleChange}
        />
      </FormGroup>
    </Box>
  );
};
