import React from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import UserInformation from "./UserInformation";

function App() {
  return (
    <div>
      <UserInformation>
        <h1>User Information</h1>
        <ComponentA />
        <br />
        <br />
        <ComponentB />
        <br />
        <br />
        <ComponentC />
      </UserInformation>
    </div>
  );
}

export default App;
