import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  ProductItem,
  ItemsFilters,
  fetchItems,
  fetchItem,
  fetchTopSales,
  fetchCategories,
  Category,
  FetchedItem,
} from "api";
import { productsActions } from "./slice";

export const fetchTopSalesAction = createAsyncThunk<ProductItem[], void>(
  "products/fetchTopSales",
  async (_, { rejectWithValue }) => {
    try {
      const result = await fetchTopSales();

      return result;
    } catch (error) {
      console.error("Error fetching Top Sales", error);
      return rejectWithValue(error);
    }
  }
);

export const fetchItemAction = createAsyncThunk<FetchedItem, string>(
  "products/fetchItem",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const result = await fetchItem(id);
      dispatch(productsActions.setFetchedProduct(result))
console.log(result)
      return result;
    } catch (error) {
      console.error("Error fetching product", error);
      return rejectWithValue(error);
    }
  }
);

export const fetchItemsAction = createAsyncThunk<ProductItem[], ItemsFilters>(
  "products/fetchItems",
  async (data, { rejectWithValue }) => {
    try {
      const result = await fetchItems(data);

      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCategoriesAction = createAsyncThunk<Category[], void>(
  "products/fetchCategories",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await fetchCategories();

      dispatch(productsActions.setCategories(result));

      return result;
    } catch (error) {
      console.error("Error fetching categories", error);

      return rejectWithValue(error);
    }
  }
);
