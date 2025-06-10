import React, { useContext } from "react";
import { UserContext } from "../UserInformation";

const ComponentA = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Component A</h2>
      <input
        type="text"
        value={userInfo.name}
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      />
      <input
        type="number"
        value={userInfo.age}
        onChange={(e) => setUserInfo({ ...userInfo, age: e.target.value })}
      />
      <input
        type="text"
        value={userInfo.address}
        onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
      />
      <input
        type="text"
        value={userInfo.phone}
        onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
      />
      <input
        type="text"
        value={userInfo.country}
        onChange={(e) => setUserInfo({ ...userInfo, country: e.target.value })}
      />
    </div>
  );
};

export default ComponentA;
