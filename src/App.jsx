import React from "react";
import Parent from "./component/parent.jsx";

function App() {
  const user = { name: "Raju" };
  return <Parent user={user} />;
}

export default App;
