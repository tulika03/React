import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="left-container">
          <img
            alt="logo"
            className="logo"
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </div>
        <div className="middle-container">
          <input id="search"></input>
        </div>
        <div className="right-container">
        <span className="material-icons user-icon">person</span>
        </div>
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent></HeaderComponent>);
