import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export const AnswersButton = ({ elm, i, answers, setAnswers }) => {
  const handelAnswers = (e, i) => {
    const newArr = [...answers];
    newArr[i] = e.target.value;
    setAnswers([...newArr]);
  };

  return (
    <FormControl component="fieldset" >
      <FormLabel component="legend">answers</FormLabel>

      <RadioGroup
        row
        aria-label="gender"
        name="row-radio-buttons-group"
        onChange={(event) => {
          handelAnswers(event, i);
        }}
      >
        <FormControlLabel
          value={elm.answers[0]}
          control={<Radio />}
          label={elm.answers[0]}
        />
        <FormControlLabel
          value={elm.answers[1]}
          control={<Radio />}
          label={elm.answers[1]}
        />
        <FormControlLabel
          value={elm.answers[2]}
          control={<Radio />}
          label={elm.answers[2]}
        />
        <FormControlLabel
          value={elm.answers[3]}
          control={<Radio />}
          label={elm.answers[3]}
        />
      </RadioGroup>
    </FormControl>
  );
};
