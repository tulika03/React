import React from "react";
import UserClass from "../user/UserClass";
import User from "../user/User";
class AboutClass extends React.Component {
  userData = {};

  constructor(props) {
    console.info("parent constructor")
    super(props);
    this.userData = {
      name: "A",
      location: "India",
      login: "@A",
    };
    this.userData2 = {
      name: "B",
      location: "India",
      login: "@B",
    };

    this.state= {
        userInfo: {
          name: "Akshay",
          location: "India",
          login: "@Akshay",
        }
    }
  }

  async componentDidMount() {
    console.info("parent componentDidMount")
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const usersList = await  data.json();
    console.log(usersList)
    this.setState({userInfo: usersList})

  }

  componentDidUpdate() {
    console.info("parent componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("Parent class componentWillUnmount");
  }

  render() {
    console.info("parent render")
    return (
      <div className="about">
        <div className="about-detail">
          <h2> About Us</h2>
          <p>
            This is an Akshay Saini tutorials page. Yu can visit the website{" "}
            <a href="https://namastedev.com/">NamasteDev</a> to learn more about
            this course.
          </p>
        </div>
        <div></div>
        <div className="about-card">
          <UserClass user={this.userData} />
          <UserClass user={this.userData2} />
          {/* <User user={this.state.userInfo}></User> */}
        </div>
      </div>
    );
  }
}

export default AboutClass
