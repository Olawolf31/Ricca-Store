import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/cart/CartSlice"

export const Store = configureStore({
    reducer: {
        cart: CartReducer,
    }
})