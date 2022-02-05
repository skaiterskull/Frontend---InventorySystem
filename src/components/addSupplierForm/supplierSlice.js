import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  allSuppliers: [],
  selectedSupplier: {},
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
    supplierSelectedSuccess: (state, { payload }) => {
      state.selectedSupplier = payload;
    },
    updateSupplierSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.selectedSupplier = payload.result;
    },
    updateSupplierFail: (state) => {
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
  supplierSelectedSuccess,
  updateSupplierSuccess,
  updateSupplierFail,
} = actions;

export default reducer;
