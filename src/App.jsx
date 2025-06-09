import React, { useState, createContext, useContext } from "react";

// Step 1: Create context
const ThemeContext = createContext();

// Step 2: App (provider)
function App() {
  const [theme, setTheme] = useState("light");

  // Toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Step 3: Apply dynamic class to whole app
  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#121212",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    transition: "all 0.3s ease",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={appStyle}>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
}

// Step 4: Child (consumer)
function Child() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          cursor: "pointer",
          background: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#000",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Toggle Theme
      </button>
    </>
  );
}

export default App;
