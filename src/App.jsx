import React, { createContext, useContext } from "react";

const UserContext = createContext();

function GrandChild() {
  // 3. Consume context here
  const user = useContext(UserContext);
  return <p>User name is: {user.name}</p>;
}

function Child() {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild />
    </div>
  );
}

function App() {
  return (
    <UserContext.Provider value={{ name: "Raju" }}>
      <div>
        <h1>Context API Example</h1>
        <Child />
      </div>
    </UserContext.Provider>
  );
}

export default App;
