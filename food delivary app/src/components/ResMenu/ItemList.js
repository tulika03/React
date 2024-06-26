import { addItem, removeItem } from "../../../store/slices/cartSlice";
import { setAlert, setErrorMessage } from "../../../store/slices/toastSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";



const ItemList = (props) => {
  const item = props?.item?.card?.info;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const handleAddItem = (item) => {
    setQuantity(prevQuantity => prevQuantity + 1);
    if(!item["quantity"]) {
      item.quantity = 1;
    }
    dispatch(addItem(item));
    dispatch(setErrorMessage("Item added to cart"));
    dispatch(setAlert(true));
    setTimeout(() => {
      dispatch(setAlert(false));
    }, 3000);
  };

  

  const handleRemoveItem = (item) => {
    // dispatch an action
    setQuantity(prevQuantity => prevQuantity - 1);
    dispatch(removeItem(item));
    dispatch(setErrorMessage("Item removed from cart"));
    dispatch(setAlert(true));
    setTimeout(() => {
      dispatch(setAlert(false));
    }, 3000);
  }

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
        <img
          alt="item image"
          className="rounded-md"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            item.imageId
          }
        ></img>
        {quantity == 0 ? (
          <div className="absolute button-box left-1/3 top-3/4">
            <button
              className="z-10 p-1  border-2 rounded-md  text-sm bg-white text-green-400"
              onClick={() => handleAddItem(item)}
            >
              ADD +
            </button>
          </div>
        ) : (
          <div className="absolute left-1/4 top-3/4 button-box items-stretch .flex-no-wrap">
            <button
              className="z-10 p-2  border-2  text-sm bg-white text-black-400 .text-6xl disabled:bg-gray-400" disabled={quantity == 0}
              onClick={() => quantity > 0 && handleRemoveItem(item)}
            >
              -
            </button>
            <button className="z-10 p-2 border-2 text-sm bg-white text-green-600 .font-semibold" >
              {quantity}
            </button>
            <button
              className="z-10 p-2 border-2 text-sm bg-white text-black-400 .text-6xl"
              onClick={() => handleAddItem(item)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
