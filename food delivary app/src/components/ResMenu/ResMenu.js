import useRestaurantMenu from "../../../hooks/useRestaurantMenu";
import ShimmerUI from "../content/shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./restaurantCategory";
import { useState } from "react";
const ResMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);

  const categories =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const restaurantDetail = resData?.cards[0]?.card?.card?.info;
  console.log("categories: ", restaurantDetail);

  const [showIndex, setShowIndex] = useState(null);
  if (resData === null) {
    return <ShimmerUI />;
  }

  return (
    <div className="menu flex flex-col max-w-full w-auto  m-auto justify-center items-center flex-row p-11 gap-6">
      <div className="w-full w-1/2">
        <div className="justify-start flex-col font-semibold text-lg text-gray-700">
          <div>
            <span>{resData?.cards[0]?.card?.card?.info?.name}</span>
          </div>
          <div></div>
        </div>
      </div>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category}
          showItems={index === showIndex}
          setShowIndex={() => {console.log("check index value: ", index)
            return setShowIndex(index)}}
        />
      ))}
    </div>
  );
};

export default ResMenu;
