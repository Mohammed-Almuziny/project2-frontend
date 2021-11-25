import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

export const History = () => {
  const [quizzes, setQuizzes] = useState([]);

  const navigate = useNavigate();

  const getData = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/users/gethistory/moh`
    );
    setQuizzes(result.data);
  };

  const handleClick = (id) => {
    navigate(`/quiz/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return quizzes[0] ? (
    <Container>
      <h1>history</h1>
      <Grid container spacing={2}>
        {quizzes.map((quiz, i) => (
          <Grid item lg={4} xs={12} key={i}>
            <Card>
              <CardContent>{quiz.quizTitle}</CardContent>
              <CardContent>{quiz.score}</CardContent>
              <CardActions>
                {" "}
                <Button
                  onClick={() => {
                    handleClick(quiz.quizId);
                  }}
                >
                  {" "}
                  restart{" "}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  ) : (
    <Container>
      <CircularProgress />
    </Container>
  );
};
