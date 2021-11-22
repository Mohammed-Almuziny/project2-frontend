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
    <div>
      <Container>
        <Grid container spacing={2}>
          {quizzes.map((quiz, i) => (
            <Grid item lg={4} xs={12} key={i}>
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
    </div>
  ) : (
    <div>
      <h1>lodaing</h1>
    </div>
  );
};
