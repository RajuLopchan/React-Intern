import React, { createContext, useState } from "react";

// ✅ Create a context object named UserContext and export it for global access using useContext
export const UserContext = createContext();

function UserInformation({ children }) {
  // ✅ Set up state to hold user information
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
    country: "",
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
