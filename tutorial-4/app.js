import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo" alt="logo"
          src="https://img.freepik.com/free-vector/hand-drawn-delivery-concept-cartoon_52683-75881.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

let restaurantsList = [{
    "name": "Behrouz Biryani",
    imageUrl: "https://b.zmtcdn.com/data/pictures/chains/2/18363082/ed2b2e9f365e35979823c269989813e5_o2_featured_v2.jpg?output-format=webp",
    delTime: "36 min",
    cuisines : "Biryani, Mughlai, Kebabs",
    "rating": "4.5"
},
{
    "name": "Bella Rosa",
    imageUrl: "https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?size=626&ext=jpg&ga=GA1.1.685350175.1704211304&semt=ais",
    delTime: "38 min",
    cuisines : "Italian, Indian, Chineses",
    "rating": "4.3"

},
{
    "name": "The Burger Club",
    imageUrl: "https://b.zmtcdn.com/data/pictures/chains/3/17953943/816872e9f1fcc43304e21a0f050f5f21_o2_featured_v2.jpg",
    delTime: "35 min",
    cuisines : "Burger, Coffee, Beverages",
    "rating": "4.1"

},
{
    "name": "Firangi Bake",
    imageUrl: "https://b.zmtcdn.com/data/pictures/chains/7/18479007/4598bf555104600555614b20a04f900f_o2_featured_v2.jpg",
    delTime: "40 min",
    cuisines : "Italian, Mexican, Pasta",
    "rating": "4.0"

},

{
    "name": "The Kabab corner",
    imageUrl: "https://b.zmtcdn.com/data/pictures/6/18454466/bbc3aea149b4eb72ed177c6590d5b24e_o2_featured_v2.jpg",
    delTime: "33 min",
    cuisines : "Kebab, North Indian, Biryani",
    "rating": "4.0"

}]


const RestaurantCard = (props) => {
    let {resData} = props;
    console.log("props is: ", props, resData)
  return (
    <div className="res-card" >
      <img src={resData.imageUrl} alt="cuisines"></img>
      <h3>{resData.name}</h3>
      <div className="res-detail">
        <p style={{ "fontWeight": 400, "fontSize": "14px", color: "black" }}>
          {resData.cuisines}
          <span style={{ float: "right" }}>{resData.rating} ⭐</span>
        </p>
        <p> <b> {resData.delTime} &nbsp;🛵</b></p>
      </div>
    </div>
  );
};


const Content = () => {
  return (
    <div className="content">
      <div className="search">
        <input id="search"></input>
      </div>
      <div className="res-container">
        {
            restaurantsList.map(restaurant => <RestaurantCard resData={restaurant} key={restaurant.name}></RestaurantCard>)
        }
      </div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// It is used to render react element
root.render(<AppComponent></AppComponent>);
