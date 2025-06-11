import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const ComponentOne = () => {
  const {
    userData,
    setUserData,
    formResetTrigger,
    setFormResetTrigger,
  } = useContext(UserContext);

  const [localData, setLocalData] = useState({
    name: '',
    address: '',
    id: '',
  });

  const handleChange = (e) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setUserData((prev) => ({
      ...prev,
      ...Object.fromEntries(
        Object.entries(localData).filter(([, v]) => v !== '')
      ),
    }));
    setFormResetTrigger((prev) => prev + 1); // 🔁 trigger reset in all
  };

  // 🔁 When formResetTrigger changes, reset local form inputs
  useEffect(() => {
    setLocalData({
      name: '',
      address: '',
      id: '',
    });
  }, [formResetTrigger]);

  return (
    <div>
      <h3>Component One</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={localData.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={localData.address}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={localData.id}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>

      <p>Name: {userData.name}</p>
      <p>Address: {userData.address}</p>
      <p>ID: {userData.id}</p>
    </div>
  );
};

export default ComponentOne;
