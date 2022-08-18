import React, { useState, useEffect } from "react";
import nodeStructure from "../../nodesStructureTrinity.json";
// import nodeStructure from "../../nodesStructureLong.json";
import ChatBubbleComponent from "../Components/RuntimeComponents/ChatBubbleComponent";
import ChatBackground from "../../img/chat_background.jpg";
import axios from "axios";

export default function RunTime() {
  const [executedStages, setExecutedStages] = useState([nodeStructure[0]]);
  const handleFlow = (event, textValue = "", nlpID = null) => {
    console.log("Handle Flow called!!!");
    setExecutedStages((prevStage) => {
      let newStage = prevStage;
      if (
        prevStage[prevStage.length - 1].type == "startNode" ||
        prevStage[prevStage.length - 1].type == "botNode"
      ) {
        for (let obj of nodeStructure) {
          if (
            prevStage[prevStage.length - 1].children.length &&
            Object.values(prevStage[prevStage.length - 1].children[0])[0] ==
              obj.id &&
            prevStage[prevStage.length - 1] != obj
          )
            newStage = [...prevStage, obj];
        }
      } else if (prevStage[prevStage.length - 1].type == "yesNoNode") {
        if (event && event.target.parentElement.id === "0") {
          for (let obj of nodeStructure) {
            if (
              prevStage[prevStage.length - 1].children.length &&
              Object.values(prevStage[prevStage.length - 1].children[0])[0] ==
                obj.id &&
              prevStage[prevStage.length - 1] != obj
            )
              newStage = [...prevStage, obj];
          }
        } else if (event && event.target.parentElement.id === "1") {
          for (let obj of nodeStructure) {
            if (
              prevStage[prevStage.length - 1].children.length &&
              Object.values(prevStage[prevStage.length - 1].children[1])[0] ==
                obj.id &&
              prevStage[prevStage.length - 1] != obj
            )
              newStage = [...prevStage, obj];
          }
        }
      } else if (event && prevStage[prevStage.length - 1].type == "userText") {
        let correctIndex = null;
        if (nlpID == "No Match") {
          newStage = [
            ...prevStage,
            prevStage[prevStage.length - 2],
            prevStage[prevStage.length - 1],
          ];
        } else {
          if (event && prevStage[prevStage.length - 1].isNLP) {
            correctIndex = nlpID;
          } else {
            for (let index in prevStage[prevStage.length - 1].text) {
              if (prevStage[prevStage.length - 1].text[index] == textValue)
                correctIndex = index;
            }
          }
          for (let obj of nodeStructure) {
            if (
              correctIndex !== null &&
              prevStage[prevStage.length - 1].children.length &&
              Object.values(
                prevStage[prevStage.length - 1].children[correctIndex]
              )[0] == obj.id &&
              prevStage[prevStage.length - 1] != obj
            ) {
              newStage = [...prevStage, obj];
            }
          }
        }
      } else if (
        event &&
        prevStage[prevStage.length - 1].type == "buttonNode"
      ) {
        console.log("Button Clicked!!");
        let correctIndex = null;
        for (let index in prevStage[prevStage.length - 1].text) {
          if (
            prevStage[prevStage.length - 1].text[index] ==
            event.target.textContent
          )
            correctIndex = index;
        }
        for (let obj of nodeStructure) {
          if (
            correctIndex &&
            prevStage[prevStage.length - 1].children.length &&
            Object.values(
              prevStage[prevStage.length - 1].children[correctIndex]
            )[0] == obj.id &&
            prevStage[prevStage.length - 1] != obj
          ) {
            newStage = [...prevStage, obj];
          }
        }
      }
      return newStage;
    });
  };

  useEffect(
    () => {
      // handleFlow();
      // return () => {
      // };
    } /*, []*/ // Auto render on update to print next Bot Component
  );
  return (
    <div
      className="runtime-container"
      style={{
        backgroundImage: `url(${ChatBackground})`,
        backgroundRepeat: "repeat",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        overflow: "scroll",
      }}
    >
      {executedStages.map((currentStage, index) => {
        console.log("Above");
        return (
          <ChatBubbleComponent
            key={index}
            currentStage={currentStage}
            handleFlow={handleFlow}
          />
        );
      })}
    </div>
  );
}
