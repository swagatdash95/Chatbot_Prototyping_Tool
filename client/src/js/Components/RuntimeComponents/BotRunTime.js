import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

export default function BotRunTime(props) {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: "35px 0px 35px 0px",
        backgroundColor: "#edc991",
        // width: "60%",
        width: "max-content",
        maxWidth: "60%",
        margin: "2%",
        padding: "1% 5%",
      }}
    >
      <Box p={1}>
        {/* <Typography variant="h5">{props.text}</Typography> */}
        <Typography sx={{ fontSize: "1rem" }}>{props.text}</Typography>
      </Box>
    </Paper>
  );
}
