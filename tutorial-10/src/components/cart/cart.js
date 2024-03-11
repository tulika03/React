import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  let [total, setTotal] = useState(0);
  const dispatch = useDispatch();;
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  if (!cartItems.length) {
    return (
      <div className=" justify-center flex flex-col w-full m-auto justify-center max-w-xl p-11 gap-6 my-11 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Cart is Empty
        </h5>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => {
            navigate("/home")
          }}>Menu</button>
      </div>
    </div>
    )
  }
  return (
    <div className=" justify-center flex flex-col w-full m-auto justify-center max-w-xl p-11 gap-6 my-11 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Cart items
        </h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500" onClick={handleClearCart}>
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
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  ₹{item.price ? item.price / 100 : item.defaultPrice/100}
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
