import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

//products
const url = "https://fakestoreapi.com/products";

const initialState = {
  cartItems: [],
  count: 0,
  total: 0,
  isLoading: true,
};

export const productsData = createAsyncThunk("cart/productsData", async () => {
  try {
    const response = await axios.get(`${url}?limit=8`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(productsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
        console.log(action);
      })
      .addCase(productsData.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action);
      });
  },
});

/*  console.log(CartSlice);  */

export default CartSlice.reducer;
