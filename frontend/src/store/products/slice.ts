import { createSlice } from "@reduxjs/toolkit";

import { composeBuilder, requestInitial, RequestWithStatus } from "utils";

import { fetchTopSalesAction } from "./actions";
import { FetchedTopSale } from "api";

type ProductsSliceState = {
  fetchTopSales: RequestWithStatus<FetchedTopSale[]>;
};

const initialState: ProductsSliceState = {
  fetchTopSales: requestInitial(),
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => composeBuilder(builder, [fetchTopSalesAction]),
});

export const productsActions = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
