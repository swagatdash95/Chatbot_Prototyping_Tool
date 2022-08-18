import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function YesNoRunTime(props) {
  //   const handleClick = (event) => {
  //     console.info('You clicked the Chip.');
  //     console.log(event.target)
  //   };

  return (
    <Stack>
      <Chip
        id={0}
        label="Yes"
        onClick={(event) => {
          props.handleFlow(event);
        }}
        sx={{ fontSize: "1em" }}
      />
      <Chip
        id={1}
        label="No"
        variant="outlined"
        onClick={(event) => {
          props.handleFlow(event);
        }}
        sx={{ fontSize: "1em" }}
      />
    </Stack>
  );
}
