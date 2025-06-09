import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // This effect runs after every render
  useEffect(() => {
    console.log("Component rendered");
  });

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
