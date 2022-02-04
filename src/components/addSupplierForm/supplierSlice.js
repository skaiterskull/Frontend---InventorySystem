import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  allSuppliers: [],
};

const supplierSlice = createSlice({
  name: "supplierSlice",
  initialState,
  reducers: {
    isPending: (state) => {
      state.isLoading = true;
    },

    supplierAdded: (state) => {
      state.isLoading = false;
    },

    addSupplierFail: (state) => {
      state.isLoading = false;
    },

    fetchSupplierSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.allSuppliers = payload.result;
    },

    fetchSupplierFail: (state) => {
      state.isLoading = false;
    },

    deleteSupplierSuccess: (state) => {
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = supplierSlice;

export const {
  isPending,
  supplierAdded,
  fetchSupplierSuccess,
  fetchSupplierFail,
  deleteSupplierSuccess,
  addSupplierFail,
} = actions;

export default reducer;
