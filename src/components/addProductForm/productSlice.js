import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productInSearch: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    isPending: (state) => {
      state.isLoading = true;
    },

    productAdded: (state) => {
      state.isLoading = false;
    },

    addProductFail: (state) => {
      state.isLoading = false;
    },

    productFound: (state, { payload }) => {
      state.isLoading = false;
      state.productInSearch = payload.result;
    },

    productNotFound: (state) => {
      state.isLoading = false;
      state.productInSearch = [];
    },
  },
});

const { actions, reducer } = productSlice;

export const {
  isPending,
  productAdded,
  addProductFail,
  productFound,
  productNotFound,
} = actions;

export default reducer;
