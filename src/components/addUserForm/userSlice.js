import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  activeUser: {},
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

    updateUserSuccess: (state) => {
      state.isLoading = false;
      state.selectedUser = {};
    },

    updateUserFail: (state) => {
      state.isLoading = false;
    },

    deleteUserSuccess: (state) => {
      state.isLoading = false;
    },

    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.activeUser = payload.result;
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
  resetSelectedUser,
  roleUpdateSuccess,
  statusUpdateSuccess,
  updateUserSuccess,
  updateUserFail,
  deleteUserSuccess,
  loginSuccess,
} = actions;

export default reducer;
