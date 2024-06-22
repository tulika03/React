import {addItem} from "../../../store/slices/cartSlice"
import {setAlert, setErrorMessage } from "../../../store/slices/toastSlice"
import { useDispatch } from "react-redux";

const ItemList = (props) => {
  const item = props?.item?.card?.info;
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
    dispatch(setErrorMessage("Item added to cart"));
    dispatch(setAlert(true));
    setTimeout(() => {
      dispatch(setAlert(false));
    }, 3000);
  };

  return (
    <div className="flex flex-row p-2">
      <div className="flex flex-col w-5/6 gap-2">
        <span className="text-lg font-sans tracking-normal font-medium text-gray-600">
          {item?.name}
        </span>
        <span className="text-md font-sans tracking-normal font-medium text-gray-600">
          ₹
          {item?.price
            ? item.price / 100
            : item.variantsV2.pricingModels[0].price / 100}
        </span>
        <span className="text-xs font-sans tracking-normal font-medium text-gray-400 pt-2">
          {item?.description}
        </span>
      </div>
      <div className="border-box relative">
        <button
          className="absolute z-10 p-1 left-1/3 top-3/4 border-2 rounded-md  text-sm bg-white text-green-400"
          onClick={() => handleAddItem(item)}
        >
          ADD +
        </button>
        <img
          alt="item image"
          className="rounded-md"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            item.imageId
          }
        ></img>
      </div>
    </div>

  );
};

export default ItemList;
