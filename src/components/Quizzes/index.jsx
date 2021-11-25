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
import CircularProgress from "@mui/material/CircularProgress";

dotenv.config();

export const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  const navigate = useNavigate();

  const getData = async () => {
    const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/quizzes`);
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
      <Grid container spacing={2}>
        {quizzes.map((quiz, i) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={i}>
            <Card>
              <CardContent>{quiz.title}</CardContent>
              <CardActions>
                {" "}
                <Button
                  onClick={() => {
                    handleClick(quiz._id);
                  }}
                >
                  {" "}
                  start{" "}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  ) : (
    <Container sx={{ mx: "auto", width: 200 }} >
      <CircularProgress />
    </Container>
  );
};
