import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  composeBuilder,
  requestInitial,
  requestSuccess,
  RequestWithStatus,
} from "utils";

import { fetchItemsAction, fetchTopSalesAction } from "./actions";
import { Category, ProductItem } from "api";

type ProductsSliceState = {
  fetchTopSales: RequestWithStatus<ProductItem[]>;
  fetchItems: RequestWithStatus<ProductItem[]>;
  fetchCategories: RequestWithStatus<Category[]>;
};

const initialState: ProductsSliceState = {
  fetchTopSales: requestInitial(),
  fetchItems: requestInitial(),
  fetchCategories: requestInitial(),
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearItems: (state) => {
      state.fetchItems.data = [];
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.fetchCategories.data = { ...state.fetchCategories.data, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    composeBuilder(builder, [fetchTopSalesAction]);
    builder.addCase(fetchItemsAction.fulfilled, (state, action) => {
      if (state.fetchItems.wasCalled) {
        state.fetchItems.data = [
          ...(state.fetchItems.data || []),
          ...action.payload,
        ];
      } else {
        state.fetchItems = requestSuccess(action.payload);
      }
    });
  },
});

export const productsActions = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
