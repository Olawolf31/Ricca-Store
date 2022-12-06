import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: [],
  count: 0,
  total: 0,
  isLoading: true,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: null,
});

console.log(CartSlice);

export default CartSlice.reducer;
