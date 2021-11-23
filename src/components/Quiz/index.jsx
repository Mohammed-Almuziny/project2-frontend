import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
import { Container, Grid, Card, CardContent, Button } from "@mui/material";

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
      quizId: quiz._id,
      answers,
      score,
    };
    console.log(body);
    console.log("your score is " + score);
    axios.post(`${process.env.REACT_APP_BASE_URL}/users/saveresult`, body);
    navigate("/quizzes");
  };

  useEffect(() => {
    getData();
  }, []);

  return quiz._id ? (
    <div>
      <h1>quiz</h1>
      <Container>
        <Grid container>
          {quiz.questions.map((elm, i) => (
            <Grid item key={elm._id} lg={12} md={12} xs={12} mb={5}>
              <Card>
                <CardContent>{elm.question}</CardContent>
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
        <Button onClick={() => handleSubmit()}> submit</Button>
      </Container>
    </div>
  ) : (
    <div>
      <h1>lodaing</h1>
    </div>
  );
};
