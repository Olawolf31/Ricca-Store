import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";

//cart icon
export const CartIcon = () => {
  return (
    <div className="relative">
      <CgShoppingCart className="w-8 h-8 relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" />
      <span className="absolute top-0 left-0 px-1 text-xs text-white bg-blue-500 rounded-full">
        0
      </span>
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`relative bg-black shadow ${isOpen ? "dark:bg-gray-800" : ""}`}
    >
      <div className="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <NavLink
              to="/"
              className={`text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300`}
            >
              Ricca Store
            </NavLink>
          </div>

          {/* Mobile */}

          <div className="flex lg:hidden md:hidden">
            <button
              type="button"
              className={`text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen && <RiMenu4Fill className="w-5 h-5 dark:text-white" />}
              {isOpen && <RiMenu4Fill className="w-5 h-5 dark:text-white" />}
            </button>
            <div className="flex justify-center md:block">
              <CartIcon />
            </div>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `my-2 ${
                  isActive ? "text-pink-700" : "text-gray-200"
                } transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`
              }
            >
              About Ricca Store
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `my-2 ${
                  isActive ? "text-pink-700" : "text-gray-200"
                } transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`
              }
            >
              Products
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `my-2 ${
                  isActive ? "text-pink-700" : "text-gray-200"
                } transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`
              }
              to="/contact"
            >
              Contact Us
            </NavLink>
          </div>

          <div className="flex justify-center md:block sm:hidden">
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
