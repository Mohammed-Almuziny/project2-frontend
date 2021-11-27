import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Link,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const Create = ({ user }) => {
  const [quizzes, setQuizzes] = useState([]);

  const navigate = useNavigate();

  const getData = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/users/Creations/${user}`
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
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        <Link
          color="primary"
          underline="none"
          align="center"
          href="/create/quiz"
        >
          create new quize +
        </Link>
      </Typography>
      <Typography align="center" variant="h2" sx={{ mb: 2 }}>
        your Quiz
      </Typography>
      <Grid container spacing={2}>
        {quizzes.map((quiz, i) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={i}>
            <Card>
              <CardContent>title: {quiz.title}</CardContent>
              <CardContent>total Questions: {quiz.totalQuestions}</CardContent>
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

  // <div>
  //   <Container>
  //     <Link  color="inherit" underline="none" href="/create/quiz">create new quize</Link>
  //     <Typography align="center" variant="h2">your Quiz</Typography>
  //   </Container>
  // </div>
};
