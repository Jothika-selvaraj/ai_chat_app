import React from "react";

function InputNode({ input, setInput }) {
  return (
    <div>
      <b>Enter Prompt</b>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your question..."
        rows={5}
        style={{
          width: "80%",
          marginTop: "10px",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "14px"
        }}
      />
    </div>
  );
}

export default InputNode;