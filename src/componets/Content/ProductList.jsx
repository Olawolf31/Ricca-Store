import React from 'react'
import Product from './Product';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { productsData } from '../../features/cart/CartSlice';
import { useDispatch } from 'react-redux';


const ProductList = () => {


  const { products, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsData());
  }, [dispatch]);

  return (
    <section className="mt-20 pb-10 dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="mt-6 lg:mt-0 lg:px-2">
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((items) => {
                return (
                  <Product key={items.id} items={items}/>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  )
}

export default ProductList