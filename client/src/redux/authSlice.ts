import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../components/interfaces";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    squadMember: null,
    isAuthenticated: false,
    loading: false
  } as AuthState,
  reducers: {
    changeLoading: (state, action) => {
      state.loading = action.payload;
    },
    changeAuth: (state, action) => {
      const { isAuthenticated, loading, squadMember }: AuthState = action.payload;
      state.isAuthenticated = isAuthenticated;
      state.loading = loading;
      delete squadMember?.password;
      state.squadMember = squadMember;
    },
  },
});

export const { changeAuth, changeLoading } = authSlice.actions;

export default authSlice.reducer;
