import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter.js";
import userSlice from "./userReducer.js";
import shoppingCartSlice from "./shoppingCart.js";
import toastSlice from "./toast.js";
import depositMenuSlice from "./depositMenu.js";
import searchSlice from "./search.js";

export default configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    shoppingCart: shoppingCartSlice,
    toast: toastSlice,
    depositMenu: depositMenuSlice,
    search: searchSlice,
  },
});
