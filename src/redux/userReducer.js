import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    username: null,
    role: null,
    balance: null,
    rewards: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.balance = action.payload.balance;
      state.rewards = action.payload.rewards;
      state.token = action.payload.token;
    },
    resetUser: (state) => {
      state.id = null;
      state.username = null;
      state.role = null;
      state.balance = null;
      state.rewards = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
