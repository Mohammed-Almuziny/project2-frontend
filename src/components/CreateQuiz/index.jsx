import { react, useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Paper,
  Box,
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
  const [questions, setQuestions] = useState([
    // {
    //   question: "",
    //   answers: [],
    //   correctAnswer: "",
    // },
  ]);
  const [useAwait, setUseAwait] = useState(0);

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
    console.log(questions);
    console.table({ title, category });
    console.table([...questions]);

    const newObj = {
      createrName: localStorage.getItem("user"),
      title,
      category,
      questions,
    };
    await axios.post(`${process.env.REACT_APP_BASE_URL}/quizzes/create`, newObj);
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
    <div>
      <Container>
        <h1>create Quiz</h1>

        <form onSubmit={handleSubmit}>
          <Paper>
            <Box p={2}>
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
                  >
                    a
                  </TextField>
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
                    <MenuItem value={"Thirty"}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
            </Box>
          </Paper>

          {questionNumber.map((form) => {
            return form;
          })}

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={() => handleAddMore()}>add more</Button>
            <Button type="submit">submit</Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};
