import { createSlice } from "@reduxjs/toolkit";

export const depositSlice = createSlice({
  name: "depositMenu",
  initialState: {
    open: false,
  },
  reducers: {
    setOpen: (state) => {
      state.open = !state.open;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpen } = depositSlice.actions;

export default depositSlice.reducer;
