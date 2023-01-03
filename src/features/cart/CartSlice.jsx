import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

//products
const url = "https://dummyjson.com/products";

const initialState = {
  cartItems: [],
  products: [],
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
      // Check if the item is already in the cart
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // Update the quantities and total for the existing item
        existingItem.quantity += 1;
        state.total += action.payload.price;
      } else {
        // Add the new item to the cart
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });

        // Increment the product count and update the total
        state.productCount += 1;
        state.total += action.payload.price;
      }
    },
    removeCart: (state, action) => {
      const itemID = action.payload;
      const item = state.cartItems.find((item) => item.id === itemID);
      const price = item ? item.price : 0;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
      state.productCount -= 1
      state.total -= price;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(productsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        console.log(action);
      })
      .addCase(productsData.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action);
      });
  },
});



export const { addToCart, removeCart } = CartSlice.actions;

export default CartSlice.reducer;
