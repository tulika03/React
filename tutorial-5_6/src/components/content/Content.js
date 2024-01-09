import RestaurantCard from "../resCard/Restaurant";
import "./content.css";
import { useState, useEffect } from "react";
import ShimmerUI from "./shimmer";
import { Link } from "react-router-dom";

const Content = () => {
  // State variable
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [originalCopy, setOriginalCopy] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const filterTopRated = () => {
    const filteredList = restaurantsList.filter(
      (e) => +e.info.rating.rating_text >= 3.9
    );
    setRestaurantsList(filteredList);
    setIsFiltered(true);
  };

  const reset = () => {
    console.info("after reset: ", restaurantsList);
    setRestaurantsList(originalCopy);
    setIsFiltered(false);
    setSearchVal("");
  };

  const handleSearchVal = (event) => {
    setSearchVal(event.target.value);
    if(event.target.value.length < 3) {
      setRestaurantsList(originalCopy);
    }
   else {
    const filterRestaurant = restaurantsList.filter(e => e.info.name.toString().toLowerCase().includes(searchVal.toString().toLowerCase()));
    setRestaurantsList(filterRestaurant);
   } 
  };

  useEffect(() => {
    console.log("use effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch("https://api.npoint.io/c54fd225a301b8ed94ab");
    const resResult = await result.json();
    setRestaurantsList(resResult?.sections?.SECTION_SEARCH_RESULT);
    setOriginalCopy(resResult?.sections?.SECTION_SEARCH_RESULT);
  };


  return (
    
    <div className="content">
      <div className="search">
        <input id="search" value={searchVal} onChange={handleSearchVal}></input>
        {/* /conditional rendering */}
        {isFiltered ? (
          <button className="search-btn" onClick={reset}>
            Reset
          </button>
        ) : (
          <button className="search-btn" onClick={filterTopRated}>
            Top Restaurants
          </button>
        )}
        <span>{isFiltered}</span>
      </div>
      {restaurantsList.length === 0 ? <ShimmerUI></ShimmerUI> :  <div className="res-container">
        {restaurantsList.map((restaurant) => (
          <Link className="restaurant" to={"/restaurants/" + restaurant.info.resId} key={restaurant.info.resId}>
            <RestaurantCard
            resData={restaurant}            
          ></RestaurantCard>
          </Link>
        ))}
      </div> }
     
    </div>
  );
};

export default Content;
