import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <h2>{value}</h2>

      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
