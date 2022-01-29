import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  allCategories: [],
};

const catSlice = createSlice({
  name: "catSlice",
  initialState,
  reducers: {
    isPending: (state) => {
      state.isLoading = true;
    },

    catAdded: (state) => {
      state.isLoading = false;
    },

    fetchCatSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.allCategories = payload.result;
    },

    fetchCatFail: (state) => {
      state.isLoading = false;
    },

    deleteCatSuccess: (state) => {
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = catSlice;

export const {
  isPending,
  catAdded,
  fetchCatSuccess,
  fetchCatFail,
  deleteCatSuccess,
} = actions;

export default reducer;
