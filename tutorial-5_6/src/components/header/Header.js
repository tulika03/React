import "./Header.css";
import { LOGO_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo" alt="logo"
          src={LOGO_URL}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <Link className="link" to="/home">Home</Link>
          <Link className="link" to="/about">About Us</Link>
          <Link className="link" to="/contact">Contact Us</Link>
          <Link className="link" >Cart</Link>
          <button className="login" >Sign in</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;