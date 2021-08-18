import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter.js";
import userSlice from "./userReducer.js";
import shoppingCartSlice from "./shoppingCart.js";
import toastSlice from "./toast.js";

export default configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    shoppingCart: shoppingCartSlice,
    toast: toastSlice,
  },
});
