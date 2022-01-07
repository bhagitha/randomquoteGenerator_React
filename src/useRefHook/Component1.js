// The useRef Hook allows you to persist values between renders.
//It can be used to store a mutable value that does not cause a re-render when updated.

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function Component1() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));

/*
Try typing in the input field, and you will
see the application render conut increase.
*/