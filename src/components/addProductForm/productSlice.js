import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productInSearch: [],
  selectedProduct: {},
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
    productSelected: (state, { payload }) => {
      state.selectedProduct = payload;
    },

    updateProductSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.selectedSupplier = payload.result;
      state.productInSearch = [];
    },

    updateProductFail: (state) => {
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
  productSelected,
  updateProductSuccess,
  updateProductFail,
} = actions;

export default reducer;
