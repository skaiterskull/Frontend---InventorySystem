import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNavbar: "",
};

const navbarSlice = createSlice({
  name: "navbarSlice",
  initialState,
  reducers: {
    active_userNavbar_switched: (state, { payload }) => {
      state.activeNavbar = payload;
    },
  },
});

const { reducer, actions } = navbarSlice;
export const { active_userNavbar_switched } = actions;
export default reducer;
