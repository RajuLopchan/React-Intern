import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick }) => {
  console.log(" Button re-rendered");
  return <button onClick={onClick}>Increase Count</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //  ------useCallback----------

  const handleClick = useCallback(() => {
    console.log("hello");
    setCount((prev) => prev + 1);
  }, []);

  // ------useState---------

  //       const handleClick = () => {
  //     setCount(prev => prev + 1);
  //   };

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
