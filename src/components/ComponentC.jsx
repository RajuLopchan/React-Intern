import React, { useContext } from "react";
import { UserContext } from "../UserInformation";

const ComponentC = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        width: "40%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h2>Component C</h2>

      {/* Labeled input fields */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
          <strong>Name:</strong>{" "}
          <input
            type="text"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
        </label>

        <label>
          <strong>Age:</strong>{" "}
          <input
            type="number"
            value={userInfo.age}
            onChange={(e) => setUserInfo({ ...userInfo, age: e.target.value })}
          />
        </label>

        <label>
          <strong>Address:</strong>{" "}
          <input
            type="text"
            value={userInfo.address}
            onChange={(e) =>
              setUserInfo({ ...userInfo, address: e.target.value })
            }
          />
        </label>

        <label>
          <strong>Phone:</strong>{" "}
          <input
            type="text"
            value={userInfo.phone}
            onChange={(e) =>
              setUserInfo({ ...userInfo, phone: e.target.value })
            }
          />
        </label>

        <label>
          <strong>Country:</strong>{" "}
          <input
            type="text"
            value={userInfo.country}
            onChange={(e) =>
              setUserInfo({ ...userInfo, country: e.target.value })
            }
          />
        </label>
      </div>
    </div>
  );
};

export default ComponentC;
