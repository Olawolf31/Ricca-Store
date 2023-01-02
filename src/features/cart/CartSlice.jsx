import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

//products
const url = "https://dummyjson.com/products";

const initialState = {
  cartItems: [],
  productCount: 0,
  total: 0,
  isLoading: true,
};

export const productsData = createAsyncThunk("cart/productsData", async () => {
  try {
    const response = await axios.get(`${url}?limit=12`);
    const apiProducts = await response.data;
    return apiProducts.products;
  } catch (error) {
    console.log(error);
  }
});

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      // Check if the product is already in the cart
      const productExists = state.cartItems.find(item => item.id === action.payload.id);

      if (!productExists) {
        // If the product is not in the cart, increment the product count and add the product to the cart
        state.productCount++;

      }

      // If the product is already in the cart, return the state without modifying it
      return state;
    }
    
  },
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

export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;
