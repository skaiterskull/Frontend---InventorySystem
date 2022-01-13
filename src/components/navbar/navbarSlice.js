import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeUserNavbar: "My profile",
};

const navbarSlice = createSlice({
  name: "navbarSlice",
  initialState,
  reducers: {
    active_userNavbar_switched: (state, { payload }) => {
      state.activeUserNavbar = payload;
    },
  },
});

const { reducer, actions } = navbarSlice;
export const { active_userNavbar_switched } = actions;
export default reducer;
