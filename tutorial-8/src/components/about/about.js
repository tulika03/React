
import User from "../user/User";
import UserClass from "../user/UserClass";
import "./about.css";
import useUsersList from "../../../utils/userUsersList";


const About = () => {
  const userData = {
    name: "Tulika",
    location: "India",
    contact: "tulika",
  };

  const userInfo = useUsersList();
  
  return (
    <div className="about">
      <div className="about-detail">
        <h2> About Us</h2>
        <p>
          {" "}
          This is an Akshay Saini tutorials page. Yu can visit the website{" "}
          <a href="https://namastedev.com/">NamasteDev</a> to learn more about
          this course.
        </p>
      </div>
      <div>
      </div>
      <div className="about-card">
        <UserClass user={userInfo} />
        <User user={userInfo}></User>
      </div>
    </div>
  );
};

export default About;
