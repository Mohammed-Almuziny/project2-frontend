import React from 'react';
import {Link ,Typography, Container} from "@mui/material"

export const Create = () => {
  return (
    <div>
      <Container>
        <Link  color="inherit" underline="none" href="/create/quiz">create new quize</Link>
        <Typography align="center" variant="h2">your Quiz</Typography>
      </Container>
    </div>
  )
}
