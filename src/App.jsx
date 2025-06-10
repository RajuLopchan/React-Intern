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
        <div style={{ display: "flex", justifyContent:"space-between", gap: "20px" }}>
        <ComponentA />
        <br />
        <br />
        <ComponentB />
        <br />
        <br />
        <ComponentC />
        </div>
      </UserInformation>
    </div>
  );
}

export default App;
