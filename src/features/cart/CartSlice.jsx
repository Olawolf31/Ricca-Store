/* import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//products
/* const url = "https://fakestoreapi.com/products"; */

const url = "https://course-api.com/react-useReducer-cart-project";


/* const initialState = {
  cartItems: [],
  count: 0,
  total: 0,
  isLoading: true,
}; */

const initialState = {
  cartItems: [],
  amountCount: 0,
  total: 0,
  isLoading: true
};

/* export const products = createAsyncThunk("cart/products", async () => {
  try {
    const response = await axios.get(`${url}?limit=8`);
     console.log(response.data) 
    return response.data;
  } catch (error) {
    console.log(error);
  }
}); */

export const getCartItems = createAsyncThunk(
  "cart/getCartItens",
  async (name, thunkAPI) => {
    try {
      // console.log(name)
      /*  console.log(thunkAPI)
    console.log(thunkAPI.getState()) */
      //we can call a function from another component using thunkAPI.dispatch
      /*  thunkAPI.dispatch(openModal()) */
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something wrong");
    }
  }
);

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    extraReducers: (builder) => {
      builder
        .addCase(getCartItems.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getCartItems.fulfilled, (state, action) => {
          state.isLoading = false;
          state.cartItems = action.payload;
           console.log(action); 
        })
        .addCase(getCartItems.rejected, (state, action) => {
          state.isLoading = false;
          console.log(action);
        });
      }
    
    /* extraReducers: (builder) => {
      builder
        .addCase(products.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(products.fulfilled, (state, action) => {
          state.isLoading = false;
          state.cartItems = action.payload;
           console.log(action);
        })
        .addCase(products.rejected, (state, action) => {
          state.isLoading = false;
          console.log(action);
        });
    }, */
  },
});

/* console.log(CartSlice); */

export default CartSlice.reducer;
