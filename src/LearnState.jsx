import React, { useState } from "react";

export default function LearnState() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");
  return (
    <div>
      {value} <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value > 0 ? value - 1 : value)}>
        Decrement
      </button>
      <input
        type="text"
        placeholder="change text"
        onChange={(e) => setText(e.target.value)}
      />{" "}
      {text}
    </div>
  );
}
