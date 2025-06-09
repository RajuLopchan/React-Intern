import React, { useState, useCallback } from "react";

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const showAlert = useCallback(() => {
    alert(`Current count is: ${count}`);
  }, [count]); // Function re-created only if count changes

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={showAlert}>Show Alert</button>
    </div>
  );
}

export default UseCallbackExample;
