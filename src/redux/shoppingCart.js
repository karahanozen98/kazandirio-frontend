import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    items: [],
    open: false,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeAll: (state) => {
      state.items = [];
    },
    changeCartVisibility: (state) => {
      if (state.items.length < 1) state.open = false;
      else state.open = !state.open;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, removeAll, changeCartVisibility } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
