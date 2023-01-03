import React from "react";
import { useSelector } from "react-redux";
import { removeCart } from "../../features/cart/CartSlice";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/modal/ModalSlice";
import { clearAllCart } from "../../features/cart/CartSlice";

const Cart = ({ setOpenCart }) => {
  const { cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  //trigger Modal whe order is placed

  const triggerModal = () => {
    dispatch(openModal());
    dispatch(clearAllCart())
    setOpenCart(false);
  };
  return (
    <>
      <div className="flex flex-col w-full p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-5 h-5 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {item.title}
                      </h3>
                      <p className="text-sm dark:text-gray-400">
                        X {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">€ {item.price}</p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      onClick={() => dispatch(removeCart(item.id))}
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <>
          <div className="space-y-1 text-right">
            {cartItems.length >= 1 ? (
              <>
                <p>
                  Total amount:
                  <span className="font-semibold"> €{total}</span>
                </p>
                <p className="text-sm dark:text-gray-400">
                  Not including taxes and shipping costs
                </p>
              </>
            ) : (
              "Cart is Empty"
            )}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setOpenCart(false)}
              className="px-6 py-2 border rounded-md dark:border-violet-400"
            >
              Back
              <span className="sr-only sm:not-sr-only"> to shop</span>
            </button>
            {cartItems.length >= 1 && (
              <button
                onClick={triggerModal}
                type="button"
                className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
              >
                <span className="sr-only sm:not-sr-only"> Place Order</span>
              </button>
            )}
          </div>
        </>
      </div>
    </>
  );
};

export default Cart;
