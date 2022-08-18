import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import YesNoRunTime from "./YesNoRunTime";
import BotRunTime from "./BotRunTime";
import UserRunTimeWrapper from "./UserRunTimeWrapper";
import UserTextRunTime from "./UserTextRunTime";
import UserButtonRunTime from "./UserButtonRunTime";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typing from "../../../img/Typing3.gif";

export default function ChatBubbleComponent(props) {
  const [botTimeout, setbotTimeout] = useState(false);
  console.log("Insinde Chat Bubble");
  if (props.currentStage.type == "yesNoNode") {
    return (
      <UserRunTimeWrapper
        ChildComponent={<YesNoRunTime handleFlow={props.handleFlow} />}
      />
    );
  } else if (props.currentStage.type == "userText") {
    return (
      <UserRunTimeWrapper
        ChildComponent={
          <UserTextRunTime
            handleFlow={props.handleFlow}
            currentStage={props.currentStage}
          />
        }
      />
    );
  } else if (props.currentStage.type == "buttonNode") {
    return (
      <UserRunTimeWrapper
        ChildComponent={
          <UserButtonRunTime
            handleFlow={props.handleFlow}
            buttons={props.currentStage.text}
          />
        }
      />
    );
  } else {
    if (!botTimeout) {
      setTimeout(function () {
        // return <BotRunTime text={props.currentStage.text} />;
        setbotTimeout(true);
        props.handleFlow();
      }, 1000);
    }

    if (botTimeout) return <BotRunTime text={props.currentStage.text} />;
    else
      return (
        <img src={Typing} style={{ width: "120px", marginLeft: "120px" }} />
        // <BotRunTime
        //   text={
        //     <img src={Typing} />
        //     // <Box sx={{ display: "flex" }}>
        //     //   <CircularProgress />
        //     // </Box>
        //   }
        // />
      );
  }
}
