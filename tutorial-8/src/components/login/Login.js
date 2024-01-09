import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form'
const Login = () => {
  const logo =
    "https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/148878/schoolLogo/1679131281081android-chrome-512x512.png";

    const [state, setState] = useState({
        username: "",
        password: "",
      });

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value)
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="login-page">
      <div className="login-card">
        <img src={logo}></img>
        <form>
          <input
            className="text-input"
            type="text"
            name="username"
            value={state.username}
            onChange={handleChange}
          ></input>
          <input
            className="text-input"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          ></input>
          <button className="button">LOGIN</button>
        </form>

        <Link className="forgot">Forgot password?</Link>
      </div>
    </div>
  );
};

export default Login;
