import "./login.css";
import { Link } from "react-router-dom";
import {  useForm } from 'react-hook-form'
const Login = () => {
  const logo =
    "https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/148878/schoolLogo/1679131281081android-chrome-512x512.png";

    const {register, handleSubmit, formState: {errors} }= useForm();
    
    const submitForm = (data) => {
      console.log(data)
    }
 
  return (
    <div className="login-page">
      <div className="login-card">
        <img src={logo} className="pb-10"></img>
        <form onSubmit={handleSubmit(submitForm)}>
        <input
            type="text"
            id="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username"
            {...register("username", {required: true, pattern: "/^[A-za-z0-9]+$/i", minLength: "3", maxLength: "12"})}
            name="username"           
            required
          ></input>
          {errors.username && <p className="text-red-700 text-xs">Username is required and must be valid</p>}
          <input
             className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="password"
            placeholder="password"
            name="password"
            {...register("password", {required: true, minLength: "8", maxLength: "16"})}
          ></input>
          {errors.password && <p className="text-red-700 text-xs">Password is required</p>}
          <button className="button my-4" type="submit">LOGIN</button>
        </form>

        <Link className="forgot">Forgot password?</Link>
      </div>
    </div>
  );
};

export default Login;
