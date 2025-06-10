import React, { createContext, useState } from "react";

// ✅ Create a context object named UserContext and export it for global access using useContext
export const UserContext = createContext();

function UserInformation({ children }) {
  // ✅ Set up state to hold user information
  const [userInfo, setUserInfo] = useState({
    name: "Raju Lopchan",
    age: 10,
    address: "Kathmandu",
    phone: "9800000000",
    country: "Nepal",
  });

  // ✅ Provide the state and updater function to children components
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}

// ✅ Export the provider component to wrap around your application
export default UserInformation;
