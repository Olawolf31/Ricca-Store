import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="dark:bg-gray-900">
        <div className="p-6 py-12 my-10 dark:bg-violet-400 dark:text-gray-900">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter font-bold">
                Up to 50% Off
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>Plus free shipping! Use code:</span>
                <span className="font-bold text-lg">MAMBA</span>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <footer className="px-4 py-8 bg-black dark:text-white-400">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-5 h-5 rounded-full dark:text-gray-900"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={`  dark:text-white hover:text-blue-500`}
                >
                  Terms of Use
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={`  dark:text-white hover:text-blue-500`}
                >
                  Privacy
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li className="text-gray-100">
              <NavLink
                to="#"
                className={`  dark:text-white hover:text-blue-500`}
              >
                Instagram
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className={`  dark:text-white hover:text-blue-500`}
              >
                Facebook
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className={`  dark:text-white hover:text-blue-500`}
              >
                Twitter
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="dark:text-gray-400">
            © Copyright 2023. All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
