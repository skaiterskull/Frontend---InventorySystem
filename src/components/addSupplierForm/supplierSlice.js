import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  allSuppliers: [],
  selectedSupplier: {},
  supplierDetail: {},
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

    deleteSupplierFail: (state) => {
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

    selectSupplierDetail: (state, { payload }) => {
      state.supplierDetail = payload;
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
  deleteSupplierFail,
  selectSupplierDetail,
} = actions;

export default reducer;
