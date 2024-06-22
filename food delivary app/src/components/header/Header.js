import { LOGO_URL } from "../../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [cartAdded, setCartAdded] = useState(null);
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => {
    console.log("check cart items length: ", store.cart.items)
    return store.cart.items;
  });

  return (
      <header className="flex justify-between p-6 shadow-md sticky fixed">
        <div className="logo-container">
          <img className="logo h-16 w-16" alt="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items align-middle">
          <ul>
            <Link className="link p-6" to="/home">
              Home
            </Link>
            <Link className="link p-6" to="/about">
              About Us
            </Link>
            <Link className="link p-6" to="/contact">
              Contact Us
            </Link>
            <Link className="link p-6" to="/cart">
              <b> Cart ({cartItems.length})</b>              
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign in
            </button>
            {/* <li>{loggedInUser}</li> */}
          </ul>
        </div>
      </header>

  );
};

export default Header;
