import React, { useState } from "react";
import "reactflow/dist/style.css";

import InputNode from "./InputNode";
import ResultNode from "./ResultNode";
import { askAI, saveData } from "../services/api";

function FlowCanvas() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const nodes = [
    {
      id: "1",
      position: { x: 100, y: 120 },
      data: {
        label: <InputNode input={input} setInput={setInput} />
      },
      style: {
        width: 300,
        border: "2px solid #4CAF50",
        borderRadius: "12px",
        background: "#e8f5e9",
        padding: "15px",
        boxShadow: "0px 6px 12px rgba(0,0,0,0.15)"
      }
    },
    {
      id: "2",
      position: { x: 500, y: 120 },
      data: {
        label: (
          <ResultNode result={loading ? "Generating..." : result} />
        )
      },
      style: {
        width: 350,
        border: "2px solid #2196F3",
        borderRadius: "12px",
        background: "#e3f2fd",
        padding: "15px",
        boxShadow: "0px 6px 12px rgba(0,0,0,0.15)"
      }
    }
  ];

  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "straight", 
      style: { stroke: "#555", strokeWidth: 2 }
    }
  ];

  const handleRun = async () => {
    if (!input) return alert("Enter a prompt");

    setLoading(true);

    try {
      const res = await askAI(input);
      setResult(res.data.result);
    } catch {
      alert("Error fetching AI response");
    }

    setLoading(false);
  };

  const handleSave = async () => {
    if (!input || !result) return alert("Nothing to save");

    try {
      await saveData(input, result);
      alert("Saved successfully!");
    } catch {
      alert("Save failed");
    }
  };

  return (
    <div style={{ padding: "30px", background: "#f5f7fa", minHeight: "100vh" }}>
      
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        AI Flow Dashboard
      </h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={handleRun}
          style={{
            background: "#4CAF50",
            color: "white",
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Run Flow
        </button>

        <button
          onClick={handleSave}
          style={{
            marginLeft: "10px",
            background: "#2196F3",
            color: "white",
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Save
        </button>
      </div>

      <div
        style={{
          height: "550px",
          border: "2px solid #ddd",
          borderRadius: "15px",
          background: "white"
        }}
      >
        <ReactFlow nodes={nodes} edges={edges} fitView>
         
        </ReactFlow>
      </div>
    </div>
  );
}

export default FlowCanvas;