import "./Restaurant.css";

const RestaurantCard = (props) => {
    let {resData} = props;
  return (
    <div className="res-card" >
      <img src={resData?.info.image.url} alt="cuisines"></img>
      <h3>{resData?.info.name}</h3>
      <div className="res-detail">
        <p style={{ "fontWeight": 400, "fontSize": "14px", color: "black" }}>
          {/* {resData.info.cuisine.map(e => e.name)} */}
          <span style={{ float: "right" }}>{resData?.info.rating.rating_text} ⭐</span>
        </p>
        <h4> {resData?.order.deliveryTime} &nbsp;🛵</h4>
        <p> {resData?.info.costText.text} </p>
      </div>
    </div>
  );
};

export default RestaurantCard;