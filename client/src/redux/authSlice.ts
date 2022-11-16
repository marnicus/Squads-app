import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isUserLoggedIn: false,
  },
  reducers: {
    changeAuthStatus: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
  },
});

export const { changeAuthStatus } = authSlice.actions;

export default authSlice.reducer;
