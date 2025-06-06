import React from "react";
import { useState } from "react"; //import useState from react
function App() {
  const [count, setCount] = useState(0); //initialize the state with a number
  const [name, setname] = useState("ram"); //initialize the state with a string
  const [myname, setName] = useState("raju");
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <br />
      <div>
        <h1>{name}</h1>
        <button onClick={() => setname("shyam")}>Change Name</button>
      </div>
      <br />
      <div>
        <input
          type="text"
          value={myname}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => setName("")}>Clear Name</button>
      </div>
    </>
  );
}

export default App;
