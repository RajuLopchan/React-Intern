import React, { useState } from "react";
import Child from "./Child";

function App() {
  const [message, setMessage] = useState("");

  // Function to receive data from child
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <Child sendMessage={handleMessage} />
      <p>Message from child: {message}</p>
    </div>
  );
}

export default App;
