import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Handle, Position } from "react-flow-renderer";
const handleStyle = { left: 10 };
export default function StartComponent(key) {
  return (
    <>
      <Chip label="Start Node" variant="outlined" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="start"
        isValidConnection={key.data.validationCallback}
      />
    </>
  );
}
