import { react, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

import { CreateQuestion } from "../CreateQuestion";

export const CreateQuiz = () => {
  const [questionNumber, setQuestionNumber] = useState([]);
  const [title, setTitle] = useState();
  const [category, setCategory] = useState("General Knowledge");
  const [questions, setQuestions] = useState([]);
  const [useAwait, setUseAwait] = useState(0);

  const navigate = useNavigate();

  const handleAddMore = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        answers: Array(4),
        correctAnswer: "",
      },
    ]);
    setUseAwait(useAwait + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");

    const newObj = {
      createrName: localStorage.getItem("user"),
      title,
      category,
      questions,
      totalQuestions: questions.length,
    };
    console.log(newObj);
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/quizzes/create`,
      newObj
    );

    navigate("/create");
  };

  const handleChangeCate = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
    console.log(e);
  };

  useEffect(() => {
    handleAddMore();
  }, []);

  useEffect(() => {
    console.log("useEffect for questions");
    console.log(questions);
  }, [questions]);

  useEffect(() => {
    console.log(title);
  }, [title]);

  useEffect(() => {
    if (useAwait !== 0) {
      setQuestionNumber([
        ...questionNumber,
        <CreateQuestion
          i={questionNumber.length}
          questions={questions}
          setQuestions={setQuestions}
          key={questionNumber.length}
        />,
      ]);
    }
  }, [useAwait]);

  return (
    <Container>
      <Typography variant="h3" align="center" sx={{ mb: 2 }}>
        create Quiz
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ bgcolor: "background.paper", p: 2, mb: 2 }}>
          <FormGroup>
            <FormControl>
              <FormLabel> title </FormLabel>
              <TextField
                id="title"
                label="title"
                placeholder="title"
                margin="normal"
                fullWidth
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
          </FormGroup>

          <FormGroup>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select
                id="title"
                label="title"
                placeholder="title"
                value={category}
                autoWidth={false}
                required
                onChange={handleChangeCate}
              >
                <MenuItem value={"General Knowledge"}>
                  General Knowledge
                </MenuItem>
                <MenuItem value={"Film"}>Film</MenuItem>
                <MenuItem value={"Television"}>Television</MenuItem>
                <MenuItem value={"Sports"}>Sports</MenuItem>
                <MenuItem value={"Video Games"}>Video Games</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>
        </Box>

        {questionNumber.map((form) => {
          return form;
        })}

        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleAddMore()}
            sx={{ mr: 2 }}
          >
            add more
          </Button>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            sx={{ ml: 2 }}
          >
            submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};
