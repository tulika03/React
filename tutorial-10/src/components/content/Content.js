import RestaurantCard, { withPromotedLabel } from "../resCard/Restaurant";
import "./content.css";
import { useState, useContext } from "react";
import ShimmerUI from "./shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../../../hooks/useRestaurantList";
import UserContext from "../../../context/UserContext";
const Content = () => {
  // State variable
  //const [restaurantsList, setRestaurantsList] = useState([]);
  
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const {loggedInUser, setUsername} = useContext(UserContext);
  const filterTopRated = () => {
    const filteredList = restaurantsList.filter(
      (e) => +e.info.rating.rating_text >= 3.9
    );
    restaurantsList = filteredList;
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
    if (event.target.value.length < 3) {
      setRestaurantsList(originalCopy);
    } else {
      const filterRestaurant = restaurantsList.filter((e) =>
        e.info.name
          .toString()
          .toLowerCase()
          .includes(searchVal.toString().toLowerCase())
      );
      setRestaurantsList(filterRestaurant);
    }
  };

  const handleInput = (event) => {
    setUserData(event.target.value)
  }

  const data = useRestaurantList();
  let restaurantsList = data.resInfo;
  let originalCopy = restaurantsList;


  return (
    <div className="content mx-auto max-w-screen-xl">

      <div className="flex flex-wrap w-ful max-w-full p-6">
        <div className="search flex w-full gap-6 py-6">
          <input
            type="text"
            id="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            value={searchVal}
            onChange={handleSearchVal}
            required
          ></input>
          {/* /conditional rendering */}
          {isFiltered ? (
            <button
              className="search-btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
              onClick={reset}
            >
              Reset
            </button>
          ) : (
            <button
              className="search-btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
              onClick={filterTopRated}
            >
              Top Restaurants
            </button>
          )}
           <input
            type="text"
            id="context"
            value={loggedInUser} onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Context"
            
            required
          ></input>
          <span>{isFiltered}</span>
        </div>
        <div>
          {restaurantsList.length === 0 ? (
            <ShimmerUI></ShimmerUI>
          ) : (
            <div className="res-container flex flex-wrap gap-10">
              {restaurantsList.map((restaurant) => (
                <Link
                  className="restaurant"
                  to={"/restaurants/" + restaurant.info?.id}
                  key={restaurant.info.id}
                >
                  {/* If a restaurant is promoted add promoted label to it */
                    restaurant.promoted? <RestaurantCardPromoted resData={restaurant} /> :  <RestaurantCard resData={restaurant}></RestaurantCard>
                  }


                 
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



export default Content;
