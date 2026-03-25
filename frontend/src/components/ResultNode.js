import React from "react";

function ResultNode({ result }) {
  return (
    <div>
      <b>AI Response</b>
      <div
        style={{
          marginTop: "10px",
          maxHeight: "200px",
          overflowY: "auto",
          padding: "10px",
          background: "#fff",
          borderRadius: "6px",
          border: "1px solid #ddd",
          fontSize: "14px",
          lineHeight: "1.5",
          
        }}
      >
        {result || "Response will appear here..."}
      </div>
    </div>
  );
}

export default ResultNode;