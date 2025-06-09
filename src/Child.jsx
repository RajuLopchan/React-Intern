import React from "react";

function Child({ sendMessage }) {
  return (
    <div>
      <button onClick={() => sendMessage("Hello from Child!")}>
        Send Message to Parent
      </button>
    </div>
  );
}

export default Child;
