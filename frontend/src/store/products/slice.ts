import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  composeBuilder,
  requestInitial,
  requestSuccess,
  RequestWithStatus,
} from "utils";

import { fetchItemsAction, fetchTopSalesAction } from "./actions";
import { Category, FetchedItem, ProductItem } from "api";
import { CategoryIdEnum } from "enums";

type ProductsSliceState = {
  fetchTopSales: RequestWithStatus<ProductItem[]>;
  fetchItems: RequestWithStatus<ProductItem[]>;
  fetchCategories: RequestWithStatus<Category[]>;
  activeCategoryId: CategoryIdEnum | null;
  searchProduct: string | null;
  fetchItem: FetchedItem | null;
};

const initialState: ProductsSliceState = {
  fetchTopSales: requestInitial(),
  fetchItems: requestInitial(),
  fetchCategories: requestInitial(),
  fetchItem: null,
  activeCategoryId: null,
  searchProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearItems: (state) => {
      state.fetchItems.data = [];
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.fetchCategories.data = {
        ...state.fetchCategories.data,
        ...action.payload,
      };
    },
    setActiveCategoryId: (state, action: PayloadAction<CategoryIdEnum>) => {
      state.activeCategoryId = action.payload;
    },
    setSearchProduct: (state, action: PayloadAction<string | null>) => {
      state.searchProduct = action.payload;
    },
    setFetchedProduct: (state, action: PayloadAction<FetchedItem | null>) => {
      state.fetchItem = action.payload;
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
