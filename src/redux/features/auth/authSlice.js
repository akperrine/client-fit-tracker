import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  value: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
