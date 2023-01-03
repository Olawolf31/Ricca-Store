import React from "react";
import HeroSlider from "../Hero/HeroSlider";
import { addToCart } from "../../features/cart/CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { productsData } from "../../features/cart/CartSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsData());
  }, [dispatch]);  

  const { products, isLoading } = useSelector((store) => store.cart);
 /*  console.log(cartItems, isLoading); */

  //dispatch addToCart Button
/*   const dispatch = useDispatch()  */

  return (
    <div>
      <HeroSlider />

      <section className="bg-white dark:bg-gray-900">
        <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:px-12">
          <div className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>
            <span className="text-sm font-medium">
              Flowbite is out! See what's new
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We invest in the world’s potential
          </h1>
          <p className="mb-18 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </section>

      <section className="pb-20 dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="mt-6 lg:mt-0 lg:px-2">
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.slice(0, 4).map((items) => {
                return (
                  <div
                    key={items.id}
                    className="flex flex-col items-center justify-center w-full max-w-lg mx-auto"
                  >
                    <img
                      className="object-cover w-full rounded-md h-72 xl:h-80"
                      src={items.thumbnail}
                      alt={items.title}
                    /> 
                    <h4 className="mt-4 mb-2 text-center text-md font-bold text-gray-700 dark:text-gray-200">
                      {items.title}
                    </h4>
                    <p className="text-blue-500 mt-4 mb-4 font-extrabold">€{items.price}</p>

                    <button onClick={() =>  console.log(dispatch(addToCart(items)))} className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mx-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      <span className="mx-1">Add to cart</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
