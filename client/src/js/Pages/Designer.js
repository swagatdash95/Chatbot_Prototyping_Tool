import React, { useCallback } from "react";
import DrawerComponent from "../Components/DesignerComponents/Drawer";
import BotComponent from "../Components/DesignerComponents/BotComponent";
import DrawingComponent from "../Components/DesignerComponents/DrawingContainer";
import YesNoComponent from "../Components/DesignerComponents/YesNoComponent";
import ButtonResponseComponent from "../Components/DesignerComponents/ButtonResponseComponent";
import UserTextComponent from "../Components/DesignerComponents/UserTextComponent";
import StartComponent from "../Components/DesignerComponents/StartComponent";
import { addEdge, useNodesState, useEdgesState } from "react-flow-renderer";
import EndComponent from "../Components/DesignerComponents/EndComponent";

const nodeTypes = {
  yesNoNode: YesNoComponent,
  buttonNode: ButtonResponseComponent,
  botNode: BotComponent,
  userText: UserTextComponent,
  startNode: StartComponent,
  endNode: EndComponent,
};

export default function DesignTime() {
  const validateConnection = (connection) => {
    console.log("validation callback at app.js");
    if (
      (connection.source.indexOf("Start") > -1 &&
        connection.target.indexOf("User") > -1) ||
      (connection.source.indexOf("User") > -1 &&
        connection.target.indexOf("User") > -1)
    )
      return false;
    return true;
  };

  const updateTextInState = (responseType, node_id, text) => {
    setNodes((currentNodes) => {
      console.log("currentNodes:" + currentNodes);
      let updatedNode = {};
      let filteredNodes = currentNodes.filter((node) => {
        return node.id !== node_id;
      });
      for (let node of currentNodes) {
        if (node.id == node_id) {
          updatedNode = node;
        }
      }

      return [...filteredNodes, { ...updatedNode, text }];
    });
  };
  const initialNodes = [
    {
      id: "Start",
      type: "startNode", // input node
      name: "startNode",
      data: { label: "Start Node", validationCallback: validateConnection },
      position: { x: 100, y: 0 },
      children: [],
      parent: null,
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const saveFlow = () => {
    const nodesData = JSON.stringify(nodes);
    const blobNodes = new Blob([nodesData], { type: "text/plain" });
    const linkNodes = document.createElement("a");
    const urlNodes = URL.createObjectURL(blobNodes);
    linkNodes.download = "nodesStructure.json";
    linkNodes.href = urlNodes;
    linkNodes.click();

    // const edgesData = JSON.stringify(edges);
    // const blobEdges = new Blob([edgesData], {type: "text/plain"});
    // const urlEdges = URL.createObjectURL(blobEdges);
    // const linkEdges = document.createElement('a');
    // linkEdges.download = 'edgesStructure.json';
    // linkEdges.href = urlEdges;
    // linkEdges.click();
  };

  const onConnect = useCallback((params) => {
    console.log("OnConnect Called!!!");
    setEdges((edges) => {
      console.log({ ...params });
      return [
        ...edges,
        {
          ...params,
          id: Math.random().toString(),
          // source,
          // target,
          // sourceHandle,
          // targetHandle
        },
      ];
    });

    //update Children of source
    setNodes((currentNodes) => {
      console.log("currentNodes:" + currentNodes);
      let parentNode = {},
        childNode = {};
      let filteredNodes = currentNodes.filter((node) => {
        return node.id !== params.source && node.id !== params.target;
      });
      for (let node of currentNodes) {
        if (node.id == params.source) {
          parentNode = node;
        } else if (node.id == params.target) {
          childNode = node;
        }
      }
      let nodeChildren = parentNode.children;
      if (params.target.indexOf("end") == -1) {
        nodeChildren = [
          ...nodeChildren,
          { [params.sourceHandle]: params.target },
        ];
      }
      // nodeChildren.push({[params.sourceHandle]:params.target})

      return [
        ...filteredNodes,
        { ...parentNode, children: nodeChildren },
        { ...childNode, parent: params.source },
      ];
    });
  }, []);

  const clickEvent = (event, responseType) => {
    if (responseType == "save") {
      saveFlow();
      return;
    }
    setNodes((currentNodes) => {
      console.log(currentNodes);
      const node_id = Math.random();
      switch (responseType) {
        case "Bot":
          {
            return [
              ...currentNodes,
              {
                id: "Bot-" + node_id,
                position: { x: 100, y: 100 },
                type: "botNode",
                text: "",
                children: [],
                parent: "",
                // data:{label: (
                //       <>
                //       {/* <BotComponent /> */}
                //       <YesNoComponent />
                //       </>
                //   )},
                style: {
                  background: "#D6D5E6",
                  width: 200,
                },
                data: {
                  validationCallback: validateConnection,
                  node_id,
                  updateTextInState,
                },
              },
            ];
          }
          break;
        case "YesNo":
          {
            return [
              ...currentNodes,
              {
                id: "User-" + node_id,
                position: { x: 100, y: 100 },
                type: "yesNoNode",
                children: [],
                parent: "",
                style: {
                  background: "#D6D5E6",
                  width: 200,
                },
                data: {
                  validationCallback: validateConnection,
                  node_id,
                },
              },
            ];
          }
          break;
        case "button":
          {
            return [
              ...currentNodes,
              {
                id: "User-" + node_id,
                position: { x: 100, y: 100 },
                type: "buttonNode",
                text: [],
                children: [],
                parent: "",
                style: {
                  background: "#D6D5E6",
                  width: 200,
                },
                data: {
                  validationCallback: validateConnection,
                  node_id,
                  updateTextInState,
                },
              },
            ];
          }
          break;
        case "UserText":
          {
            return [
              ...currentNodes,
              {
                id: "User-" + node_id,
                position: { x: 100, y: 100 },
                type: "userText",
                children: [],
                parent: "",
                style: {
                  background: "#D6D5E6",
                  width: 200,
                },
                text: [],
                isNLP: true,
                name: "userText",
                data: {
                  validationCallback: validateConnection,
                  node_id,
                  updateTextInState,
                },
              },
            ];
          }
          break;
        case "end":
          {
            return [
              ...currentNodes,
              {
                id: "end_" + node_id,
                position: { x: 100, y: 100 },
                type: "endNode",
                name: "end",
                children: null,
                parent: "",
                data: {
                  validationCallback: validateConnection,
                  node_id,
                },
              },
            ];
          }
          break;
      }
    });
  };
  return (
    <div className="app-body" style={{ display: "flex" }}>
      <DrawerComponent clickEvent={clickEvent} />
      <div
        className="drawing-space"
        style={{ height: "100vh", width: "100vw" }}
      >
        <DrawingComponent
          nodes={nodes}
          setNodes={setNodes}
          edges={edges}
          setEdges={setEdges}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
        />
      </div>
      <br />
    </div>
  );
}
