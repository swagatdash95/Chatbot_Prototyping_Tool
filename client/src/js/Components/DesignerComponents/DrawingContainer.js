import { useState, useRef, useCallback } from 'react';
import ReactFlow,  { applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';


function DrawingContainer({nodes,setNodes, edges, setEdges, onConnect, nodeTypes}) {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState([]);
//   const yPos = useRef(0);

//   const addNode = useCallback(() => {
//     yPos.current += 50;
//     setNodes((currentNodes) => {
//       console.log(currentNodes);
//       return [
//         ...currentNodes,
//         {
//           id: Math.random().toString(),
//           position: { x: 100, y: yPos.current },
//           data:{label: (
//                 <>
//                 <BotComponent />
//                 </>
//             )},
//             style: {
//                 background: '#D6D5E6',
//                 width: 200,
//             }
//         }
//       ];
//     });
//   }, []);


  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  return (<>
    <ReactFlow 
      nodes={nodes} 
      edges={edges} 
      onConnect={onConnect} 
      onNodesChange={onNodesChange} 
      onEdgesChange={onEdgesChange} 
      nodeTypes = {nodeTypes}
      fitView 
    />
    </>);
}

export default DrawingContainer;
