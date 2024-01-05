import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  ProductItem,
  ItemsFilters,
  fetchItems,
  fetchProduct,
  fetchTopSales,
  fetchCategories,
  Category,
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

export const fetchProductAction = createAsyncThunk<any, string>(
  "products/fetchProduct",
  async (id, { rejectWithValue }) => {
    try {
      return await fetchProduct(id);
    } catch (error) {
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
