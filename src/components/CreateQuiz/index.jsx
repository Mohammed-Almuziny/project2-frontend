import { react, useState, useEffect } from "react";
import {
  Container,
  Box,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  TextField,
  FormControlLabel,
} from "@mui/material";

import { CreateQuestion } from "../CreateQuestion";

export const CreateQuiz = () => {
  const [questionNumber, setQuestionNumber] = useState([]);
  const [title, setTitle] = useState();
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
