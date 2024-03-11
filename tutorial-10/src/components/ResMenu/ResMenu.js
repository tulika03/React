import useRestaurantMenu from "../../../hooks/useRestaurantMenu";
import ShimmerUI from "../content/shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./restaurantCategory";
import { useState } from "react";
import { useSelector } from "react-redux";
import Message from "../Toast/message";
import StickyNav from "../header/stickyNav";
const ResMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);

  const toastData = useSelector((store) => {
    console.log("toast store selector: ", store.toast)
    return store.toast;
  })

  const categories =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const [showIndex, setShowIndex] = useState(null);
  if (resData === null) {
    return <ShimmerUI />;
  }

  return (
    <>
      <div className="menu flex flex-col max-w-full w-auto  m-auto justify-center items-center flex-row p-11 gap-6">
        <div className="">{resData?.cards[0]?.card?.card?.info?.name}</div>
        <div>
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              resData?.cards[0]?.card?.card?.info?.cloudinaryImageId
            }
            className="rounded-none"
          ></img>
        </div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      {/* {toastData.alert && <Message message={toastData.errorMessage} />} */}
      </div>
    </>
  );
};

export default ResMenu;
