import React, { useState } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Button re-rendered");
  return <button onClick={onClick}>Increase Count</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleClick = () => {
    console.log("Button clicked");
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={handleClick} />

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
