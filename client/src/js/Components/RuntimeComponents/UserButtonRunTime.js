import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function UserButtonRunTime(props) {
  //   const handleClick = (event) => {
  //     console.info('You clicked the Chip.');
  //     console.log(event.target)
  //   };

  return (
    <Stack>
      {props.buttons.map((button, index) => (
        <Button
          variant="contained"
          key={index}
          onClick={(event) => {
            props.handleFlow(event);
          }}
          sx={{ margin: "2%", fontSize: "0.8rem" }}
          color="info"
        >
          {button}
        </Button>
      ))}
    </Stack>
  );
}
