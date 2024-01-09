import "./Header.css";
import { LOGO_URL } from "../../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
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
        <Link className="link" to="/grocery">Grocery</Link>
          <Link className="link" to="/home">Home</Link>
          <Link className="link" to="/about">About Us</Link>
          <Link className="link" to="/contact">Contact Us</Link>
          <Link className="link" >Cart</Link>
          <button className="login" onClick={() => {
            navigate("/login")
          }}>Sign in</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;