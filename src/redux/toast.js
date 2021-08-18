import { createSlice } from "@reduxjs/toolkit";

export const severities = {
  success: "success",
  error: "error",
  warning: "warning",
};
Object.freeze(severities);

export const toastSlice = createSlice({
  name: "toast",
  initialState: {
    open: false,
    message: "",
    severity: "info",
  },
  reducers: {
    Open: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    Close: (state) => {
      state.open = false;
      state.message = "";
      state.severity = "info";
    },
  },
});

// Action creators are generated for each case reducer function
export const { Open, Close, incrementByAmount } = toastSlice.actions;

export default toastSlice.reducer;
