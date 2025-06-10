import React, { useContext } from "react";
import { UserContext } from "../UserInformation";

const ComponentB = () => {
  const { userInfo } = useContext(UserContext);

  return (
    <div style={{ border: "1px solid green", padding: "10px", width: "15%" }}>
      <h2>Component B</h2>
      <ul>
        <li>
          <strong>Name:</strong> {userInfo.name}
        </li>
        <li>
          <strong>Age:</strong> {userInfo.age}
        </li>
        <li>
          <strong>Address:</strong> {userInfo.address}
        </li>
        <li>
          <strong>Phone:</strong> {userInfo.phone}
        </li>
        <li>
          <strong>Country:</strong> {userInfo.country}
        </li>
      </ul>
    </div>
  );
};

export default ComponentB;
