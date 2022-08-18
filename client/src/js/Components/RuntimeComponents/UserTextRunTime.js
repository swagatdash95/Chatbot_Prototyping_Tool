import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Stack } from "@mui/material";
import axios from "axios";

async function checkNLPSimilarity(user_input, options) {
  let response = await axios.post("http://127.0.0.1:8000/getComparision", {
    options,
    user_input,
  });
  return response;
}

export default function UserTextRunTime(props) {
  const [responseValue, setresponseValue] = useState("");
  return (
    <Box
    //   sx={{
    //     display: "flex",
    //     alignItems: "center",
    //     "& > :not(style)": { m: 1 },
    //   }}
    >
      <Stack spacing={2}>
        <TextField
          helperText="Please enter your response"
          id="user-text-response"
          label="Response"
          multiline
          maxRows={2}
          fullWidth
          value={responseValue}
          onChange={(event) => {
            return setresponseValue(event.target.value);
          }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={(event) => {
            checkNLPSimilarity(
              responseValue,
              props.currentStage.text
              // prevStage[prevStage.length - 1].text
            )
              .then((resp) => {
                props.handleFlow(event, responseValue, resp.data);
                // props.handleFlow(event, props.currentStage.text[resp.data]);
              })
              .catch(function (error) {
                console.log("Errorredd!!");
                console.log(error);
              });
          }}
        >
          Send
        </Button>
      </Stack>
    </Box>
  );
}
