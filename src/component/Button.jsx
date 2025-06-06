import React from "react";

function Button({ label, bgColor = "#0d6efd", textColor = "#fff", style }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-sm"
        style={{
          backgroundColor: bgColor,
          color: textColor,
          ...style,
        }}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
