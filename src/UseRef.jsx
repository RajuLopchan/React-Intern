import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    console.log("Focusing input...");
    inputRef.current.focus(); // Access the DOM node
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;
