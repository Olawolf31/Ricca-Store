import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/CartSlice"

export const Store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})