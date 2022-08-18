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
export default function YesNoComponent(key) {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        id={"user-target-handle-" + key.data.node_id}
        isValidConnection={key.data.validationCallback}
      />
      <Card sx={{ maxWidth: "90vw" }} key={key}>
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
          </CardContent>
        </CardActionArea>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
          sx={{ paddingBottom: 1 }}
        >
          <Chip label="Yes" size="small" sx={{ fontSize: 10 }} />
          <Chip
            label="No"
            size="small"
            variant="outlined"
            sx={{ fontSize: 10 }}
          />
        </Stack>
      </Card>
      <Handle
        type="source"
        position={Position.Bottom}
        id={"0"}
        /*id={"user-source-handle-"+key.data.node_id+'-1'}*/ style={{
          left: 50,
        }}
        isValidConnection={key.data.validationCallback}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id={"1"}
        /*id={"user-source-handle-"+key.data.node_id+'-2'}*/ style={{
          left: 150,
        }}
        isValidConnection={key.data.validationCallback}
      />
    </>
  );
}
