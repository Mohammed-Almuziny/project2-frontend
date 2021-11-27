import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { AnswersButton } from "../AnswersButton";

dotenv.config();

export const Quiz = () => {
  const [quiz, setQuiz] = useState({});
  const [answers, setAnswers] = useState(Array(10));

  const { id } = useParams();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const getData = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/quizzes/quizById/${id}`
    );

    setQuiz(result.data);
  };

  const handleSubmit = () => {
    let score = 0;
    quiz.questions.map((elm, i) => {
      elm.correctAnswer === answers[i] && score++;
    });

    const body = {
      userName: user,
      quizTitle: quiz.title,
      quizId: quiz._id,
      totalQuestions: quiz.totalQuestions,
      score,
    };
    console.log(body);
    console.log("your score is " + score);
    axios.post(`${process.env.REACT_APP_BASE_URL}/users/saveresult`, body);
    navigate("/");
  };

  useEffect(() => {
    getData();
  }, []);

  return quiz._id ? (
    <Container>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        {quiz.title}
      </Typography>

      <Grid container>
        {quiz.questions.map((elm, i) => (
          <Grid item key={elm._id} lg={12} md={12} xs={12} mb={5}>
            <Card sx={{ p: 2 }}>
              <CardContent>
                <Typography variant="h6">{elm.question}</Typography>
              </CardContent>

              <AnswersButton
                elm={elm}
                i={i}
                answers={answers}
                setAnswers={setAnswers}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mx: "auto", width: 200 }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleSubmit()}
          sx={{ mb: 4 }}
        >
          submit
        </Button>
      </Box>
    </Container>
  ) : (
    <Container sx={{ mx: "auto", width: 200 }}>
      <CircularProgress />
    </Container>
  );
};
