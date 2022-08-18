import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function UserRunTimeWrapper(props) {
  //   const handleClick = (event) => {
  //     console.info('You clicked the Chip.');
  //     console.log(event.target)
  //   };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ justifyContent: "flex-end", padding: "20px" }}
    >
      <Paper
        elevation={3}
        sx={{
          borderRadius: "0px 35px 0px 35px;",
          // backgroundColor: "#a7c0cf",
          backgroundColor: "#808080",
          width: "30%",
          margin: "2%",
          padding: "2%",
        }}
      >
        {props.ChildComponent}
        {/* <Box p={1}>
          <Typography variant="h5">{props.ChildComponent}</Typography>
        </Box> */}
      </Paper>
    </Stack>
  );
}
