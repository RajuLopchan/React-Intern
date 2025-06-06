import React from "react";
import GrandChild from "./grandchild.jsx";
function child({ user }) {
  return <GrandChild user={user} />;
}

export default child;
