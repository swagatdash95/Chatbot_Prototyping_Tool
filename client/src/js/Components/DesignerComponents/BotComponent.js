import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AppBar from "@mui/material/AppBar";
// import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Handle, Position } from "react-flow-renderer";
import { fontSize } from "@mui/material/node_modules/@mui/system";

export default function BotComponent(key) {
  const [textValue, setTextValue] = useState("");
  const [isSaved, setIsSaved] = useState(true);

  const handleChange = (event) => {
    setTextValue(event.target.value);
    setIsSaved(false);
  };

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        id={"bot-target-handle-" + key.data.node_id}
      />
      <Card sx={{ maxWidth: "90vw" }} key={key}>
        <CardContent sx={{ padding: "8px 15px" }}>
          <AppBar
            position="static"
            sx={{ marginBottom: "6px", borderRadius: "10px" }}
          >
            <Toolbar
              variant="dense"
              sx={{ minHeight: "5%", justifyContent: "center" }}
            >
              <Typography
                variant="subtitle1"
                color="black"
                component="div"
                sx={{ lineHeight: "15px", fontSize: "0.75rem" }}
              >
                Bot Response
              </Typography>
            </Toolbar>
          </AppBar>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter Response"
            multiline
            fullWidth
            maxRows={4}
            size="Small"
            value={textValue}
            onChange={handleChange}
          />
        </CardContent>
        <CardActions
          sx={{ padding: 0, display: "flex", justifyContent: "space-between" }}
        >
          <Button
            onClick={() => {
              key.data.updateTextInState(
                key.type,
                "Bot-" + key.data.node_id,
                textValue
              );
              setIsSaved(true);
            }}
            size="small"
          >
            Save
          </Button>
          {isSaved ? (
            <></>
          ) : (
            <span style={{ fontSize: 8, fontStyle: "italic", marginRight: 8 }}>
              Please Save
            </span>
          )}
        </CardActions>
      </Card>
      <Handle
        type="source"
        position={Position.Bottom}
        id={"0"} /*id={"bot-source-handle-"+key.data.node_id}*/
      />
    </>
  );
}
