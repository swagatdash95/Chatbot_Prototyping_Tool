import React, { useState, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Handle, Position } from "react-flow-renderer";
import TextField from "@mui/material/TextField";
const handleStyle = { left: 10 };

export default function ButtonResponseComponent(key) {
  const [buttons, setButtons] = useState([]);
  const [buttonCount, setButtonCount] = useState(0);
  const cardRef = useRef(null);
  const [isSaved, setIsSaved] = useState(true);

  const handleCountChange = (event, number) => {
    console.log("Count changed!!", buttonCount);
    setButtonCount(parseInt(event.target.value));
  };

  const handleTextChange = (event, index) => {
    console.log("Value changed for!!", index);
    var existingButtons = [...buttons];
    existingButtons[index] = event.target.value;
    setButtons(existingButtons);
  };

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        id={"user-target-handle-" + key.data.node_id}
        isValidConnection={key.data.validationCallback}
      />
      <Card sx={{ maxWidth: "90vw" }} key={key} ref={cardRef}>
        <CardActionArea>
          <CardContent sx={{ padding: "8px 15px" }}>
            <AppBar
              position="static"
              color="secondary"
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
                  User Response
                </Typography>
              </Toolbar>
            </AppBar>

            {/* <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={buttonCount}
                        label="Button Count"
                        // data-cy="select"
                        onChange={(event) => {
                            console.log('Value Changed')
                        }}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </Select> */}
            <label>
              Button Count&nbsp;
              <select
                id="demo-simple-select"
                value={buttonCount}
                label="Button Count"
                // data-cy="select"
                onChange={handleCountChange}
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </label>
            <br />
            <br />
            {[...Array(parseInt(buttonCount))].map((value, index) => (
              <TextField
                id="outlined-basic"
                label={"Button " + (index + 1)}
                required
                onChange={(event) => {
                  handleTextChange(event, index);
                  setIsSaved(false);
                }}
                variant="outlined"
                sx={{ margin: "10px" }}
              />
            ))}
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{ padding: 0, display: "flex", justifyContent: "space-between" }}
        >
          <Button
            onClick={() => {
              key.data.updateTextInState(
                key.type,
                "User-" + key.data.node_id,
                buttons
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
      {[...Array(parseInt(buttonCount))].map((value, index) => (
        <Handle
          type="source"
          position={Position.Bottom}
          id={index.toString()}
          /*id={"user-source-handle-"+key.data.node_id+'-'+index}*/ style={{
            left:
              (cardRef.current.offsetWidth / (buttonCount + 1)) * (index + 1),
          }}
          isValidConnection={key.data.validationCallback}
        />
      ))}
    </>
  );
}
