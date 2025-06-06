import React from "react";
import Child from "./child.jsx";
function parent({ user }) {
  return <Child user={user} />;
}

export default parent;
