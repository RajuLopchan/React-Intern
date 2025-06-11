import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    id: '',
  });

  const [formResetTrigger, setFormResetTrigger] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('userData');
    if (stored) setUserData(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, formResetTrigger, setFormResetTrigger }}
    >
      {children}
    </UserContext.Provider>
  );
};
