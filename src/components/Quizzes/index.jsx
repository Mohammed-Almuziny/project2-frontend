import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { Filter } from "../Filter";

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
      <Filter setQuizzes={setQuizzes} />

      <Grid container spacing={2}>
        {quizzes.map((quiz, i) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={i}>
            <Card sx={{ height: 270, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <CardContent>
                <Typography variant="h6">Title: {quiz.title}</Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body1">
                  category: {quiz.category}
                </Typography>
              </CardContent>

              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <CardContent>creater: {quiz.createrName}</CardContent>
                <CardContent>totalQuestions: {quiz.totalQuestions}</CardContent>
              </Box>

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
    <Container sx={{ mx: "auto", width: 200 }}>
      <CircularProgress />
    </Container>
  );
};
