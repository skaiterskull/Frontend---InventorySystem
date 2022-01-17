import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  allUsers: [],
  selectedUser: {},
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    isPending: (state) => {
      state.isLoading = true;
    },

    userAdded: (state) => {
      state.isLoading = false;
    },

    fetchUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.allUsers = payload.result;
    },

    fetchUserFail: (state) => {
      state.isLoading = false;
    },

    userSelectedSuccess: (state, { payload }) => {
      state.selectedUser = payload;
    },

    roleUpdateSuccess: (state, { payload }) => {
      state.selectedUser = { ...state.selectedUser, role: payload };
    },

    statusUpdateSuccess: (state) => {
      state.selectedUser = {
        ...state.selectedUser,
        isActive: !state.selectedUser.isActive,
      };
    },
  },
});

const { actions, reducer } = userSlice;

export const {
  isPending,
  userAdded,
  fetchUserSuccess,
  fetchUserFail,
  userSelectedSuccess,
  roleUpdateSuccess,
  statusUpdateSuccess,
} = actions;

export default reducer;
