import React, { useState, useCallback, useMemo, useEffect } from "react";

function Operation() {
  // State variables
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  // useCallback to memoize the functions so they don't get recreated on every render
  const add = useCallback(() => {
    return a + b;
  }, [a, b]);

  const subtract = useCallback(() => {
    return a - b;
  }, [a, b]);

  const multiply = useCallback(() => {
    return a * b;
  }, [a, b]);

  // useMemo to memoize the results, recalculates only when a or b change
  const additionResult = useMemo(() => add(), [add]);
  const subtractionResult = useMemo(() => subtract(), [subtract]);
  const multiplicationResult = useMemo(() => multiply(), [multiply]);

  // useEffect to log results when they change
  useEffect(() => {
    console.log("Addition:", additionResult);
    console.log("Subtraction:", subtractionResult);
    console.log("Multiplication:", multiplicationResult);
  }, [additionResult, subtractionResult, multiplicationResult]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Calculator using useCallback, useMemo, and useEffect</h2>
      <div>
        <label htmlFor="a">
          A:
          <input
            type="number"
            value={a}
            onChange={(e) => {
              const value = e.target.value;
              setA(value === "" ? "" : Number(value));
            }}
          />
        </label>
      </div>
      <div>
        <label>
          B:{" "}
          <input
            type="number"
            value={b}
            onChange={(e) => {
              const value = e.target.value;
              setB(value === "" ? "" : Number(value));
            }}
          />
        </label>
      </div>

      <h3>Results:</h3>
      <p>Addition: {additionResult}</p>
      <p>Subtraction: {subtractionResult}</p>
      <p>Multiplication: {multiplicationResult}</p>
    </div>
  );
}

export default Operation;
