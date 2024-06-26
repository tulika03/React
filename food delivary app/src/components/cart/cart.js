import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, addItem } from "../../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  let [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  useEffect(() => {
  }, [cartItems]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  }

  if (!cartItems.length) {
    return (
      <div className="flex flex-col w-full m-auto justify-center max-w-xl p-11 gap-6 my-11 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Cart is Empty
          </h5>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              navigate("/home");
            }}
          >
            Menu
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="justify-center flex flex-col w-full m-auto justify-center max-w-xl p-11 gap-6 my-11 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Cart items
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          onClick={handleClearCart}
        >
          Clear cart
        </a>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {cartItems.map((item, index) => (
            <li className="lg:py-4" key={item.id}>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-50 h-50 rounded-full"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                      item.imageId
                    }
                    alt="Neil image"
                  ></img>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {item.description}
                  </p>
                  <p>
                  <div className="left-1/4 top-3/4 pt-3 pl-3 button-box items-stretch .flex-no-wrap">
                    <button
                      className="z-10 p-2  border-2  text-sm bg-white text-black-400 .text-6xl disabled:bg-gray-400"
                      onClick={() => item.quantity > 0 && handleRemoveItem(item)}
                    >
                      -
                    </button>
                    <button className="z-10 p-2 border-2 text-sm bg-white text-green-600 .font-semibold" >
                      {item.quantity}
                    </button>
                    <button
                      className="z-10 p-2 border-2 text-sm bg-white text-black-400 .text-6xl"
                      onClick={() => handleAddItem(item)}
                    >
                      +
                    </button>
                </div>
                  {/* ₹{item.price ? item.price / 100 : item.defaultPrice / 100} */}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
