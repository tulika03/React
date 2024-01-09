import "./user.css";
import { useEffect, useState } from "react";

const User = (props) => {
  const { user } = props;
  const [count, setCount] = useState(0);
  // setCount(2);
  return (
    <div className="user-list">
      <div className="user-card">
        <div className="card-content">
          <img src={user?.avatar_url}></img>
        </div>
        <div className="card-content">
        <div className="label">
          <span>Name </span>
          <span>Location </span>
          <span>Contact </span>
          <span>Count</span>
        </div>
        <div className="info">
          <span> {user?.name}</span>
          <span> {user?.location}</span>
          <span>{user?.login}</span>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default User;
