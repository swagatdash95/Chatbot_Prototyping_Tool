import React from "react";
import Chip from "@mui/material/Chip";
import { Handle, Position } from "react-flow-renderer";
export default function EndComponent(key) {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        id={"end-" + key.data.node_id}
        isValidConnection={key.data.validationCallback}
      />
      <Chip label="End Node" variant="outlined" />
    </>
  );
}
