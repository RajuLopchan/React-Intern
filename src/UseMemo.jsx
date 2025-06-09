import React, { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  const Square = useMemo(() => {
    console.log(" Calculating square...");
    return number * number;
  }, [number]);

  return (
    <div>
      <h2>Number: {number}</h2>
      <h3>Square: {Square}</h3>

      <button onClick={() => setNumber(number + 1)}>Increase Number</button>

      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
