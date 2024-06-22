import { FaStar } from "react-icons/fa";


const RestaurantCard = (props) => {
  let { resData } = props;
  return (
    <div className="max-w-full w-96 min-h-96 h-full max-h-full rounded-md overflow-hidden hover:shadow-xl hover:border-1 gap-6 p-4">
      <div>
        <img
          className="w-full rounded-none h-64"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData?.info.cloudinaryImageId}
          alt="cuisines"
        ></img>
      </div>

      <div className="px-6">
        <div className="font-bold text-gray-800 dark:text-white flex justify-between">
          <div className="w-3/4">
            <span> {resData?.info.name}</span>
          </div>
          <div className="flex justify-center align-middle ">
            <span className="px-3 py-1 rounded-xl text-white text-xs align-middle bg-green-700 self-center">
              {resData?.info?.avgRatingString} <FaStar size={11} className="inline pb-0.5" />
            </span>
          </div>
        </div>

        <div className="flex">
          <span className="mt-2 text-gray-500 dark:text-gray-400">
            { resData?.info?.cuisines.join(", ") }
          </span>
        </div>
        <div className="flex-col justify-between mt-2">
          <span className="text-gray-500 text-sm">
            {resData?.info?.costForTwo}
          </span>
        </div>
        <div className="flex flex-row mt-2 float-end mb-1">
          <span className="text-gray-500 dark:text-gray-500text-gray-500 text-sm float-right">
            {resData?.info?.sla?.slaString} &nbsp;
          </span>
        </div>
      </div>
    </div>
  );
};

// higher order component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
       <label>Promoted</label>
      <RestaurantCard {...props}></RestaurantCard>
      </div>

    )
  }
}

export default RestaurantCard;

