import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/CartSlice"
import ModalSlice from "../features/modal/ModalSlice";

export const Store = configureStore({
    reducer: {
        cart: cartReducer,
        checkoutModal: ModalSlice,
    }
})