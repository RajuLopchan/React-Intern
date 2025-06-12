// import React, { useEffect, useRef, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   // let val = 1;
//   let val = useRef(1);

//   let buttonRef = useRef();

//   function handleIncrement() {
//     setCount(count + 1);
//     // val = val + 1;
//     val.current = val.current + 1;
//     // console.log("Value:", val);
//     console.log("Value:", val.current);
//   }

//   function changeColor() {
//     buttonRef.current.style.backgroundColor = "red";
//   }

//   useEffect(() => {
//     console.log("Component rendered");
//   });
//   return (
//     <>
//       <h2>Count: {count}</h2>
//       <button ref={buttonRef} onClick={handleIncrement}>
//         Increment
//       </button>
//       <br />
//       <br />
//       <button onClick={changeColor}>Change color of first button</button>
//     </>
//   );
// }

// export default App;


import React, { useRef, useEffect } from 'react';

function UseRef() {
  const inputRef = useRef(null);// Create a ref to hold the input element(object)

    useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleFocus = () => {
    inputRef.current.focus(); // This sets focus to the input
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter text here"
      />
      <button onClick={handleFocus}>
        submit
      </button>
    </div>
  );
}

export default UseRef;